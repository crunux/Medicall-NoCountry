<script setup lang="ts">
import Avatar from 'primevue/avatar';

const data = reactive([
    {
        especialidad: 'Cardiologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'

    },
    {
        especialidad: 'Dermatologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Ginecologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Pediatria',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Oftalmologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Neurologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Oncologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Psicologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Nutricionista',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Fisioterapia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Odontologia',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    },
    {
        especialidad: 'Medicina General',
        image: 'https://www.paho.org/sites/default/files/styles/flexslider_full/public/2020-09/heart-attack.jpg?h=3e7d1b3d&itok=8Z9Z6J9v'
    }
])

const scroll = computed(() => {
    return data.length
})
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 6,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '375px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<template>
    <SectionLanding>
        <div class="md:w-4/12 mt-6 h-full flex flex-col items-center">
            <h1 class="text-3xl md:text-6xl mb-4 text-center">Consulta con tu medico preferido nunca fue tan facil.</h1>
            <p class="text-lg md:text-xl m-0 text-center text-gray-1">Desde cualquier parte.</p>
            <Button class="my-4 shadow-md px-4 py-3">Consulta Ahora.!</Button>
        </div>
    </SectionLanding>
    <SectionLanding>
        <div class="md:w-7/12 mt-6 flex flex-col items-center">
            <h2 class="text-3xl md:text-4xl my-y text-center">Servicios/Especialidades</h2>
            <Carousel :value="data"
                :numVisible="6"
                :responsiveOptions>
                <template #item="item">
                    <div class="card p-2 m-2 flex flex-col justify-center items-center">
                        <Avatar :image="item.data.image"
                            size="large"
                            shape="circle"
                            class="mx-auto" />
                        <h4 class="text-center">{{ item.data.especialidad }}</h4>
                    </div>
                </template>
            </Carousel>
            <Button class="my-6 shadow-md px-4 py-3">Haz tu cita!</Button>
        </div>
    </SectionLanding>
    <SectionLanding>
        <div class="md:w-4/12 mt-6">
            <h2 class="text-3xl md:text-4xl mb-4 text-center">Nuestros Medicos.</h2>
            <p class="text-lg md:text-xl m-0 text-center text-gray-1">Desde cualquier parte.</p>
            <Button class="mx-[28%] md:mx-[38%] my-2 shadow-md px-4 py-3">Consulta Ahora.!</Button>
        </div>
    </SectionLanding>
    <footer class="w-full h-full flex flex-col md:flex-row mt-28 justify-center items-center">
        <div class="md:w-2/12 mt-6">
            <h2 class="text-3xl md:text-6xl mb-4 text-center">Consulta con tu medico preferido nunca fue tan facil.</h2>
            <p class="text-lg md:text-xl m-0 text-center text-gray-1">Desde cualquier parte.</p>
            <Button class="mx-[28%] md:mx-[38%] my-2 shadow-md px-4 py-3">Consulta Ahora.!</Button>
        </div>
        <div class="md:w-2/12 mt-6">
            <h2 class="text-3xl md:text-6xl mb-4 text-center">Consulta con tu medico preferido nunca fue tan facil.</h2>
            <p class="text-lg md:text-xl m-0 text-center text-gray-1">Desde cualquier parte.</p>
            <Button class="mx-[28%] md:mx-[38%] my-2 shadow-md px-4 py-3">Consulta Ahora.!</Button>
        </div>
        <div class="md:w-2/12 mt-6">
            <h2 class="text-3xl md:text-6xl mb-4 text-center">Consulta con tu medico preferido nunca fue tan facil.</h2>
            <p class="text-lg md:text-xl m-0 text-center text-gray-1">Desde cualquier parte.</p>
            <Button class="mx-[28%] md:mx-[38%] my-2 shadow-md px-4 py-3">Consulta Ahora.!</Button>
        </div>
    </footer>
</template>
<style scope>
.p-carousel-indicators {
    display: none;
}
</style>