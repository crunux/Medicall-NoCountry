<script setup lang="ts">
import { computed } from 'vue'
import useAuthStore from '@/stores/useAuthStore';
import { storeToRefs } from 'pinia';
import AdminProfileView from '@/modules/admin/views/AdminProfileView.vue'
import MedicoProfileView from '@/modules/medico/views/MedicosProfileView.vue'
import PacienteProfileView from '@/modules/profile/components/PacienteProfileView.vue'

const store = useAuthStore()
const { currentUser } = storeToRefs(store)
const customComponent = computed(() => currentUser.value?.type_profile === 1 ? PacienteProfileView : currentUser.value?.type_profile === 2 ? MedicoProfileView : AdminProfileView)
</script>

<template>
  <component :is="customComponent" />
</template>