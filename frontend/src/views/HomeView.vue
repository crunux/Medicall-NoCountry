<script setup lang="ts">
import { ref } from 'vue';
import Calendar from 'primevue/calendar';
import AutoComplete from 'primevue/autocomplete';


const items = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' }
];

const search = () => {
    console.log('search');
}

const value = ref();

</script>

<template>
    <h1>Hello</h1>
    <Calendar :pt="{ header: 'focus:yellow-400 p-2' }"
        v-model="value"
        showIcon />
    <AutoComplete v-model="value"
        :suggestions="items"
        field="name"
        dropdown
        @complete="search" />
</template>
