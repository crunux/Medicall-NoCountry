import { useAuthStore } from "@/stores/useAuthStore"
import type { GenericObject } from "vee-validate";

let HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || null

if (PORT_BACKEND){
    HOST_BACKEND = `${HOST_BACKEND}:${PORT_BACKEND}`
}

// Function to format date
const formatDate = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const useRegister = () => {
    const store = useAuthStore()
    const register = async (values: GenericObject, typeUser: number) => {
        try {
        // Format the bornDate to year-month-day
        const formattedValues = {
            ...values,

            bornDate: formatDate(values.bornDate),

            type_profile: typeUser
        };
        console.log(formattedValues);

        const response = await fetch(`http://${HOST_BACKEND}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedValues),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        store.setToken(data.accesTocke);
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
    }
    return {
        register
    }
}


export default useRegister