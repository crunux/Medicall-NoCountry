import { useRouter } from "vue-router";
import { useAuthStore } from '@/stores/useAuthStore';

const router = useRouter();

let HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND || null

if (PORT_BACKEND) {
    HOST_BACKEND = `${HOST_BACKEND}:${PORT_BACKEND}`
}

const useLogin = () => {
    const store = useAuthStore()
    const login = async (values: any) => {
        try {
            const response = await fetch(`https://${HOST_BACKEND}/api/login`, {
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
            console.log('Respuesta del servidor:', data);

            // Guardar el token en el almacenamiento local
            store.setToken(data.accesTocke);
            store.setUser(data.user);

            router.push({ name: 'videocall' });

        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
    }
    return {
        login
    }
}


export default useLogin