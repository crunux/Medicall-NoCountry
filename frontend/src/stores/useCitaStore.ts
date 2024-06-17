import { defineStore } from "pinia";




export const useCitaStore = defineStore('cita', () => {

    const cita = ref<{}>({});
    const citas = ref<any[]>([]);

    const setCitas = (data: any[]) => {
        citas.value = data;
    }
    const setCita = (value: {}) => {
        cita.value = value;
    }

    return {
        //State Properties
        cita,
        citas,
        //Getters

        //Actions
        setCitas,
        setCita,

    }
},
    {
        //Persist state
        persist: true,
    }
)