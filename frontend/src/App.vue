<script setup lang="ts">
import {  RouterView } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';
</script>

<template>
  <div class="w-screen">
    <DefaultLayout/>
    <RouterView />
  </div>
</template>
