<template>
    <div class="video-list">
        <div v-for="item in videoList"
            v-bind:video="item"
            v-bind:key="item.id"
            class="video-item">
            <video autoplay
                playsinline
                ref="videos"
                :height="cameraHeight"
                :muted="item.muted"
                :id="item.id"></video>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { io } from "socket.io-client";
import SimpleSignalClient from 'simple-signal-client';

export default defineComponent({
    name: 'video-webrtc',
    emits: ['opened-room', 'left-room', 'joined-room', 'share-started'],
    props: {
        roomId: {
            type: String,
            default: 'room-4723'
        },
        socketURL: {
            type: String,
            //default: 'https://videocall-socket-pi.vercel.app'
            default: 'https://localhost:3000'
            //default: 'https://192.168.1.201:3000'
        },
        cameraHeight: {
            type: [Number, String],
            default: 160
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        screenshotFormat: {
            type: String,
            default: 'image/jpeg'
        },
        enableAudio: {
            type: Boolean,
            default: true
        },
        enableVideo: {
            type: Boolean,
            default: true
        },
        enableLogs: {
            type: Boolean,
            default: false
        },
        peerOptions: {
            type: Object,  // NOTE: use these options: https://github.com/feross/simple-peer
            default() {
                return {};
            }
        },
        ioOptions: {
            type: Object,  // NOTE: use these options: https://socket.io/docs/v4/client-options/
            default() {
                return { rejectUnauthorized: false, transports: ['polling', 'websocket'] };
            }
        },
        cameraId: {
            type: String,
            default: null
        }
    },
    setup(props, { expose, emit }) {
        const { roomId, socketURL, enableAudio, enableVideo, enableLogs, peerOptions, ioOptions, cameraId } = toRefs(props);
        const signalClient = ref(null)
        const videoList = ref([])
        const videos = ref < HTMLVideoElement | null > (null)
        const canvas = ref < HTMLCanvasElement | null > (null)
        const ctx = ref < CanvasRenderingContext2D | null > (null)
        const socket = ref < Socket | null > (null)
        const state = ref < string > ('disconnect')

        const constraints = {
            video: enableVideo.value,
            audio: enableAudio.value
        };

        if (cameraId.value && enableVideo.value) {
            constraints.video = { deviceId: { exact: cameraId.value } };
        }

        if (audioId.value && enableAudio.value) {
            constraints.video = { deviceId: { exact: audioId } }
        }

        const { stream: localStream, start: startCall } = useUserMedia(constraints)


        async function join() {

            log('join');
            state.value = 'connected'
            socket.value = io(socketURL.value, ioOptions.value);
            signalClient.value = new SimpleSignalClient(socket.value);

            startCall()
            // const localStream = await navigator.mediaDevices.getUserMedia(constraints);
            log('opened', localStream);
            joinedRoom(localStream, true);
            signalClient.value.once('discover', (discoveryData) => {
                log('discovered', discoveryData)
                async function connectToPeer(peerID) {
                    if (peerID == socket.value.id) return;
                    try {
                        ('Connecting to peer', roomId.value);
                        const { peer } = await signalClient.value.connect(peerID, roomId.value, peerOptions);
                        log(videoList.value, 'videolist');
                        videoList.value.forEach(v => {
                            console.log(v, 'itemvideolist');
                            if (v.isLocal) {
                                onPeer(peer, v.stream);
                            }
                        })
                    } catch (e) {
                        log('Error connecting to peer');
                    }
                }
                discoveryData.peers.forEach((peerID) => connectToPeer(peerID));
                emit('opened-room', roomId.value);
            });
            signalClient.value.on('request', async (request) => {
                log('requested', request)
                const { peer } = await request.accept({}, peerOptions)
                log('accepted', peer);
                videoList.value.forEach(v => {
                    if (v.isLocal) {
                        onPeer(peer, v.stream);
                    }
                })
            })
            signalClient.value.discover(roomId.value);
        }

        function onPeer(peer, localStream) {
            log('onPeer');
            peer.addStream(localStream);
            peer.on('stream', (remoteStream) => {
                joinedRoom(remoteStream, false);
                peer.on('close', () => {
                    let newList = [];
                    videoList.value.forEach(function (item) {
                        if (item.id !== remoteStream.id) {
                            newList.push(item);
                        }
                    });
                    videoList.value = newList;
                    emit('left-room', remoteStream.id);
                });
                peer.on('error', (err) => {
                    log('peer error ', err);
                });
            });
        }

        function joinedRoom(stream, isLocal) {
            let found = videoList.value.find(video => {
                return video.id === stream.id
            })
            if (found === undefined) {
                let video = {
                    id: stream.id,
                    muted: isLocal,
                    stream: stream,
                    isLocal: isLocal
                };
                videoList.value.push(video);
            }

            setTimeout(function () {
                for (var i = 0, len = videos.value.length; i < len; i++) {
                    if (videos.value[i].id === stream.id) {
                        videos.value[i].srcObject = stream;
                        break;
                    }
                }
            }, 500);

            emit('joined-room', stream.id);
        }

        function leave() {
            state.value = 'disconnect'
            videoList.value.forEach(v => v.stream.getTracks().forEach(t => t.stop()));
            videoList.value = [];
            signalClient.value.peers().forEach(peer => peer.removeAllListeners())
            signalClient.value.destroy();
            signalClient.value = null;
            socket.value.destroy();
            socket.value = null;
        }

        function capture() {
            return getCanvas().toDataURL(screenshotFormat);
        }

        function getCanvas() {
            let video = videos.value[0];
            if (video !== null && !ctx.value) {
                let canvasElement = document.createElement('canvas');
                canvasElement.height = video.clientHeight;
                canvasElement.width = video.clientWidth;
                canvas.value = canvasElement;
                ctx.value = canvasElement.getContext('2d');
            }
            ctx.value.drawImage(video, 0, 0, canvas.value.width, canvas.value.height);
            return canvas;
        }
        async function shareScreen() {
            if (navigator.mediaDevices == undefined) {
                log('Error: https is required to load cameras');
                return;
            }

            try {
                const { stream: screenStream, start } = useDisplayMedia()
                start()
                joinedRoom(screenStream, true);
                emit('share-started', screenStream.id);
                signalClient.value.peers().forEach(p => onPeer(p, screenStream));
            } catch (e) {
                log('Media error: ' + JSON.stringify(e));
            }
        }
        function log(message, data) {
            if (enableLogs) {
                console.log(message);
                if (data != null) {
                    console.log(data);
                }
            }
        }
        expose({ state, join, leave, capture, shareScreen })
        defineExpose({
            state,
            join,
            leave,
            capture,
            shareScreen
        });
        return {
            videoList
        };
    },
});
</script>
<style scoped>
.video-list {
    background: whitesmoke;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.video-list div {
    padding: 0px;
}

.video-item {
    background: #c5c4c4;
    display: inline-block;
}
</style>