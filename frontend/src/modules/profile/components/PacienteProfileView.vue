<script setup lang="ts">
import { useHead } from '@unhead/vue';

const title = 'Paciente';

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: 'Paciente'
    }
  ]
});
</script>

<template>
  <h1> Paciente </h1>
</template>