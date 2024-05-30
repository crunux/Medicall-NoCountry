<script setup lang="ts">

const { currentRoute } = useRouter();

const menuProfile = ref<InstanceType<typeof MenuProfile> | null>(null)
const userLoggedIn = computed(() => false);
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

console.log(menuProfile);

</script>
<template>
    <navbar class=" w-[calc(100vw - 0.5rem)] h-20 flex justify-between items-center ">
        <div class="flex justify-start items-center gap-4 font-regular ml-10">
            <RouterLink class="text-lg no-underline"
                to="/">Home</RouterLink>
            <RouterLink class="text-lg no-underline"
                to="/">Quienes Somos?</RouterLink>
            <RouterLink class="text-lg no-underline"
                to="/">Servicios</RouterLink>
            <RouterLink class="text-lg no-underline"
                to="/">Contacto</RouterLink>
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
                <h3 class="font-semibold text-4xl text-center">Medicall</h3>
                <img class="w-12"
                    src="@/assets/images/medicall.png"
                    alt="logo-medicall">
            </div>
            <div class="pointer px-1"
                @click="menuProfile?.toggleMenu">
                <Avatar v-badge.danger="4"
                    v-if="userLoggedIn"
                    label="Dr."
                    icon="pi pi-user" />
                <MenuProfile ref="menuProfile"
                    :popup="true"
                    :items />
            </div>
        </div>
    </navbar>
</template>