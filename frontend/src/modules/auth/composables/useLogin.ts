import router from "@/router";
import { useAuthStore } from '@/stores/useAuthStore';
import  config  from '../../../utils/config'


const useLogin = () => {
    const store = useAuthStore()
    const { BASE_URL } = config('/api/login')
    const login = async (values: any) => {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.json();
            // Guardar el token en el almacenamiento local
            store.setToken(data.accesTocke);
            store.setUser(data.user);
            // redirect to videocall
            router.push({ name: 'profile' });

        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Aquí puedes manejar el error, como mostrar un mensaje al usuario
            return {
                error
            }
        }
    }
    return {
        login
    }
}


export default useLogin