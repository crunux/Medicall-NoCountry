<script setup lang="ts">
import useAuthStore from '@/stores/useAuthStore';
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore();
const { currentRoute } = useRouter();


const menuProfile = ref<InstanceType<typeof MenuProfile> | null>(null)
const userLoggedIn = computed(() => store.user);
const activateLogin = computed(() => currentRoute.value.path !== '/login');
const activateRegister = computed(() => currentRoute.value.path !== '/register');

const items = ref([
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-home',
        to: '/profile'
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        shortcut: '⌘+Q',
        command: () => {
            console.log('logout');

            // store.logout();
        }
    },
    {
        separator: true
    }
])

</script>
<template>
    <navbar class=" w-[calc(100vw - 0.5rem)] md:h-16 lg:h-20 flex justify-between items-center ">
        <div class="flex justify-start items-center gap-4 font-semibold font-regular ml-10">
            <RouterLink class="text-lg no-underline"
                to="/">Home</RouterLink>
            <RouterLink class="text-lg no-underline"
                to="/about_us">Quienes Somos?</RouterLink>
            <RouterLink class="text-lg no-underline"
                to="/services">Servicios</RouterLink>
            <RouterLink class="text-lg no-underline"
                to="/contact">Contacto</RouterLink>
        </div>
        <div class="flex justify-between items-center gap-2 md:px-6 font-medium">
            <div class="flex items-center gap-2">
                <RouterLink
                    :class="!activateRegister ? 'px-2 bg-gray-0 rounded-md text-xl no-underline' : 'text-xl no-underline'"
                    v-if="activateLogin && !userLoggedIn"
                    to="/login">Login</RouterLink>
                <RouterLink class="px-3 bg-gray-0 rounded-md text-xl no-underline"
                    v-if="activateRegister && !userLoggedIn"
                    to="/register">Registrarse</RouterLink>
            </div>
            <div class="inline-flex items-center gap-2">
                <h3 class="font-semibold text-3xl md:text-4xl m-0 text-center">Medicall</h3>
                <img class="w-8 md:w-12"
                    src="@/assets/images/medicall.png"
                    alt="logo-medicall">
            </div>
            <div class="cursor-pointer hover:border-1 hover:border-primary-500 pr-4"
                @click="menuProfile?.toggleMenu">
                <Avatar v-if="userLoggedIn"
                    shape="circle"
                    size="large"
                    class=""
                    :image="userLoggedIn.profile_photo_url" />
                <MenuProfile ref="menuProfile"
                    :popup="true"
                    :items
                    :user="userLoggedIn" />
            </div>
        </div>
    </navbar>
</template>