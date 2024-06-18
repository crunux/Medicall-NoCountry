<script setup lang="ts">
const store = useAuthStore()
const { user } = storeToRefs(store)
const customComponent = computed(() => user.type_user === 1 ? PacienteProfileView : user.type_user === 2 ? MedicoProfileView : AdminProfileView)
</script>

<template>
  <component is="customComponent" />
</template>