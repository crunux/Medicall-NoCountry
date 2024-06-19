<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDevicesList } from '@vueuse/core';
import VideoWebRTC from '../components/VideoWebRTC.vue';
const { push } = useRouter();
const roomId = useRoute().query.roomId as string;

const webrtc = ref<InstanceType<typeof VideoWebRTC> | null>(null);
const mutedOn = ref(true);
const videoOff = ref(false);
// const preCall = ref<HTMLVideoElement | null>(null);

const selectedCamera = ref('');
const selectedMicrophone = ref('');
const selectedSpeaker = ref('');

const {
  videoInputs,
  audioInputs,
  audioOutputs,
} = useDevicesList({
  requestPermissions: true,
})

// const currentCamera = computed(() => videoInputs.value[0]?.deviceId)
// const currentMicrophone = computed(() => audioInputs.value[0]?.deviceId)

const listCamera = computed(() => videoInputs.value.map((item) => ({
  label: item.label,
  deviceId: item.deviceId
})));

const listAudioInputs = computed(() => audioInputs.value.map((item) => ({
  label: item.label,
  deviceId: item.deviceId
})));

const listAudioOutpust = computed(() => audioOutputs.value.map((item) => ({
  label: item.label,
  deviceId: item.deviceId
})));

const stateCall = computed(() => webrtc.value?.status);

const join = () => {
  webrtc.value?.join();
}

// console.log(roomId, 'roomId', typeof roomId);

const leave = () => {
  webrtc.value?.leave();
  push({ name: 'profile' });
};

const captureScreen = () => {
  webrtc.value?.capture();
}

const sharedScreen = () => {
  webrtc.value?.shareScreen();
}

watch(selectedCamera, (value: string) => {
  contraints.video.deviceId = value;
});

watch(selectedMicrophone, (value: string) => {
  contraints.audio.deviceId = value;
});

watch(selectedSpeaker, (value: string) => {
  preCall.value?.setSinkId(value);
});

watchEffect(() => {
  console.log(webrtc.value?.status, 'webrtc');
})
// watchEffect(() => {
//   start();
// });
</script>
<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="text-2xl font-bold">Video Call</h1>
    <div class="flex justify-center gap-2 p-2">
      <Dropdown v-model="selectedCamera"
        :options="listCamera"
        optionLabel="label"
        type="text"
        optionValue="deviceId"
        checkmark
        :highlightOnSelect="false"
        placeholder="Select a Camera" />
      <Dropdown v-model="selectedMicrophone"
        :options="listAudioInputs"
        optionLabel="label"
        type="text"
        optionValue="deviceId"
        checkmark
        :highlightOnSelect="false"
        placeholder="Select a Microphone" />
      <Dropdown v-model="selectedSpeaker"
        :options="listAudioOutpust"
        optionLabel="label"
        type="text"
        optionValue="deviceId"
        checkmark
        :highlightOnSelect="false"
        placeholder="Select a Speaker" />
    </div>
    <!-- <video ref="preCall"
      autoplay
      playsinline
      :muted="mutedOn"></video> -->
    <InputText id="roomId-help"
      label="Room ID"
      class="w-40 text-center"
      disabled
      v-model="roomId" />
    <div class="m-2">
      <VideoWebRTC ref="webrtc"
        socketURL="https://api.crunux.tech/"
        cameraHeight="500"
        :enableVideo="videoOff"
        :enableAudio="mutedOn"
        :videoId="selectedCamera"
        :audioId="selectedMicrophone"
        :roomId
        :enableLogs="true" />
    </div>
    <div>
      <Button label="Join"
        v-if="stateCall === 'disconnected'"
        @click="join"
        rounded
        aria-labelledby="join-help"
        class="m-2" />
      <Button severity="danger"
        v-if="stateCall === 'connected'"
        label="Leave"
        rounded
        @click="leave"
        class="m-2 py-2" />
      <Button :severity="!mutedOn ? 'primary' : 'danger'"
        icon="pi pi-microphone"
        rounded
        @click="mutedOn = !mutedOn"
        class="m-2 py-2" />
      <Button :severity="videoOff ? 'primary' : 'danger'"
        icon="pi pi-camera"
        rounded
        @click="videoOff = !videoOff"
        class="m-2 py-2" />
      <Button severity="info"
        @click="sharedScreen"
        :disabled="stateCall === 'disconnected'"
        icon="pi pi-desktop"
        rounded
        class="m-2 py-2" />
      <Button severity="info"
        @click="captureScreen"
        :disabled="stateCall === 'disconnected'"
        icon="pi pi-image"
        rounded
        class="m-2 py-2" />
    </div>
  </section>
</template>
