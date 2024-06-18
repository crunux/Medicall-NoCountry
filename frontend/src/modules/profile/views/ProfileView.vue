<script setup lang="ts">
import { computed } from 'vue'
const store = useAuthStore()
const { user } = storeToRefs(store)
console.log(user);
const customComponent = computed(() => user.type_profile === 1 ? PacienteProfileView : user.type_profile === 2 ? MedicoProfileView : AdminProfileView)
</script>

<template>
  <component :is="customComponent" />
</template>