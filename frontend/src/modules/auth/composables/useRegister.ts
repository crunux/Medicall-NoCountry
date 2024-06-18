import { useAuthStore } from "@/stores/useAuthStore"
import type { GenericObject } from "vee-validate";
import { useDateFormat } from '@vueuse/core'
import router from "@/router";
import { getUrlPath }  from '@/utils/useConfig'

const useRegister = () => {
    const store = useAuthStore()
    const { BASE_URL } = getUrlPath('/api/register')
    const register = async (values: GenericObject, typeUser: number) => {
        try {
            // Format the bornDate to year-month-day
            const formattedValues = {
                ...values,
                bornDate: useDateFormat(values.bornDate, 'YYYY-MM-DD').value,
                type_profile: typeUser
            };
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedValues),
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            store.setToken(data.access_token);
            store.setUser(data.user)
            router.push({ name: 'profile' });
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return {
        register
    }
}


export default useRegister