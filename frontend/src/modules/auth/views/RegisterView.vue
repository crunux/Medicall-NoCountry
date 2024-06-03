<script setup lang="ts">
const selectRegister = ref('Pacientes');
</script>
<template>
    <section class="w-[calc(100svw - 1rem)] w-full justify-center items-center">
        <h2 class="text-4xl font-semibold p-2 m-3 text-center">Register</h2>
        <p class="text-gray-1 text-center mb-6">consulta de manera mas rapida y de forma virtual</p>
        <SelectButton v-model="selectRegister"
            class="text-center py-2 my-3"
            :options="['Pacientes', 'Medicos']" aria-labelledby="select-register"/>
        <PacientesForm v-if="selectRegister === 'Pacientes'" />
        <MedicosForm v-if="selectRegister === 'Medicos'" />


    </section>
</template>