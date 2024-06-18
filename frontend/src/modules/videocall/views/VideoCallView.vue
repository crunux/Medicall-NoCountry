<script setup lang="ts">
import { ref, computed, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useDevicesList, useDisplayMedia } from '@vueuse/core';
import VideoWebRTCSetup from '../components/VideoWebRTCSetup.vue';
import DemoExample from '../components/DemoExample.vue';
const { push } = useRouter();
const roomId = useRoute().query.roomId as string;


const webrtc = ref<InstanceType<typeof VideoWebRTCSetup> | null>(null);
// const mutedOn = ref(false);
// const videoOff = ref(false);
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
// const contraints = reactive({
//   video: {
//     deviceId: selectedCamera.value,
//   },
//   audio: {
//     deviceId: selectedMicrophone.value
//   }
// });
// const { stream, start } = useDisplayMedia(contraints)

const join = () => {
  webrtc.value?.join();
}

// console.log(roomId, 'roomId', typeof roomId);

const leave = () => {
  webrtc.value?.leave();
  // push({ name: 'home' });
};

const captureScreen = () => {
  webrtc.value?.capture();
}

// watch(selectedCamera, (value: string) => {
//   contraints.video.deviceId = value;
//   preCall.value?.srcObject = stream.value;
// });
// watch(selectedMicrophone, (value: string) => {
//   contraints.audio.deviceId = value;
// });

// watch(selectedSpeaker, (value: string) => {
//   preCall.value?.setSinkId(value);
// });
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
      disabled
      v-model="roomId" />
    <div class="m-2">
      <VideoWebRTCSetup ref="webrtc"
        socketURL="https://api.crunux.tech/"
        cameraHeight="500"
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
      <Button severity="info"
        @click="captureScreen"
        :disabled="stateCall === 'disconnected'"
        label="Capture Screen"
        rounded
        class="m-2 py-2" />
    </div>
  </section>
</template>
