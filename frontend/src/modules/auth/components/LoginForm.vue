<script setup lang="ts">
import useLogin from '../composables/useLogin'

const { login } = useLogin()

const loginForm = reactive({
    email: '',
    password: '',
});

const loginUser = async () => {
    await login(loginForm)
}
</script>
<template>
    <div class="ml-[calc(50% - 187px)] flex items-center justify-center p-4">
        <div v-focustrap
            class="w-full card p-4 bg-white rounded-lg shadow-lg border-2 border-gray-1"
            style="max-width: 375px">
            <form @submit.prevent="loginUser">
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