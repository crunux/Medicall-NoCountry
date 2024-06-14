<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';

const loginForm = reactive({
    email: '',
    password: '',
});
//useRoute() o useRouter()
const router = useRouter();
const auth = useAuthStore();

const login = async() => {
    console.log(loginForm);
    try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: loginForm.email,
                password: loginForm.password,
            }),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        console.log('Respuesta del servidor:', data);

        // Guardar el token en el almacenamiento local
        localStorage.setItem('accessToken', data.accesTocke);

        auth.setToken(data.accesTocke);
        auth.setUser(data.user);

        router.push({ name: 'videocall' });
        
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    }
}
</script>
<template>
    <div class="ml-[calc(50% - 187px)] flex items-center justify-center p-4">
        <div v-focustrap
            class="w-full card p-4 bg-white rounded-lg shadow-lg border-2 border-gray-1"
            style="max-width: 375px">
            <form @submit.prevent="login">
                <div class="mt-3 p-2 flex flex-col">
                    <label class=" m-1 text-gray-1"
                        for="email">Email</label>
                    <InputText id="email"
                        v-model="loginForm.email"
                        type="email"
                        autofocus />
                </div>

                <div class="mt-3 p-2 flex flex-col">
                    <div class="flex justify-between m-1"><label class="text-gray-1"
                            for="password">Password</label>
                        <RouterLink class="text-primary"
                            to="/reset-password">olvidaste tu contrasena?</RouterLink>
                    </div>
                    <Password inputId="password"
                        v-model="loginForm.password"
                        toggleMask
                        required
                        :feedback="false"
                        inputClass="pass" />
                </div>
                <div class="flex flex-col">
                    <Button type="submit"
                        label="Ingresar"
                        class="m-2" />
                </div>
            </form>

        </div>
    </div>
</template>
<style scope>
.pass {
    width: 100%;
}
</style>