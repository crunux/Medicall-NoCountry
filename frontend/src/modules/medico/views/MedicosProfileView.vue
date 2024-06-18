<script setup lang="ts">
//import { useCitaStore } from '@/stores/useCitaStore';
const title = 'Medicos';
const { push } = useRouter();
//const store = useCitaStore();
useHead({
    title: title,
    meta: [
        {
            name: 'description',
            content: 'Medicos Profile'
        }
    ]
});

const goVidecall = () => {
    push({ name: 'videocall', query: { roomId: 'cita37437' } });
};
</script>
<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Medicos</h1>
                    <Button @click="goVidecall">Go Cita</Button>
                </div>
            </div>
        </div>
    </section>
</template>