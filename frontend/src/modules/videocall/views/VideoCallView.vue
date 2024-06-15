<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const webrtc = ref<HTMLElement | null>(null);
const roomId = ref('public-room-v2');
const router = useRouter();

const stateCall = computed(() => {
  return webrtc.value?.state;
});

const join = () => {
  webrtc.value?.join();
};

const leave = () => {
  webrtc.value?.leave();
  router.push({ name: 'home' });
};
</script>
<template>
  <InputText id="join-help"
    label="Room ID"
    v-model="roomId" />
  <VideoWebRTC ref="webrtc"
    socketURL="https://api.crunux.tech/"
    cameraHeight="500"
    :roomId
    :enableLogs="true" />
  <Button label="Join"
    v-if="stateCall === 'disconnect'"
    @click="join"
    aria-labelledby="join-help"
    class="m-2" />
  <Button severity="danger"
    v-if="stateCall === 'connected'"
    label="Leave"
    @click="leave"
    class="m-2" />
</template>
