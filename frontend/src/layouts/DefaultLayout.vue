<script setup lang="ts">
import { useAuthStore } from '@/stores/useAuthStore';
import { useRoute, useRouter } from 'vue-router';

const store = useAuthStore();
const { currentRoute } = useRouter();


const menuProfile = ref<InstanceType<typeof MenuProfile> | null>(null)
const userLoggedIn = computed(() => store.user);
const activateLogin = computed(() => currentRoute.value.path !== '/login');
const activateRegister = computed(() => currentRoute.value.path !== '/register');

const items = ref([
    {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        to: '/dashboard'
    },
    {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        shortcut: '⌘+Q'
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
                to="/servicios">Servicios</RouterLink>
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
            <div class="pointer px-1"
                @click="menuProfile?.toggleMenu">
                <Avatar v-badge.danger="4"
                    v-if="userLoggedIn"
                    :image="userLoggedIn.profile_photo_url"
                    :icon="userLoggedIn.profile_photo_url ? 'pi pi-user' : ''" />
                <MenuProfile ref="menuProfile"
                    :popup="true"
                    :items
                    :user="userLoggedIn" />
            </div>
        </div>
    </navbar>
</template>