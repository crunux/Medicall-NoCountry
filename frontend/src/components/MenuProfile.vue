<script setup lang="ts">
import type { MenuItem, User } from '@/types';
import { RouterLink } from 'vue-router';
const el = ref<InstanceType<typeof Menu> | null>(null)

const { user, popup, items } = withDefaults(defineProps<{
    popup: boolean,
    items: MenuItem[]
    user: User
}>(), {
    popup: false
})

const currentUser = computed(() => user.type_profile === 1 ? 'Paciente' : user.type_profile === 2 ? 'Doctor' : 'Admin')


const toggleMenu = (event: Event) => {
    el.value?.toggle(event);
}

defineExpose({
    toggleMenu
})
</script>
<template>
    <div class="card flex justify-content items-center">
        <Menu ref="el"
            :model="items"
            :popup>
            <template #start>
                <span class="inline-flex items-center gap-1 p-2">
                    <span class="text-center text-xl font-semibold">User</span>
                </span>
            </template>
            <template #submenuheader="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <RouterLink v-ripple
                    class="inline-flex items-center no-underline p-2"
                    :to="item.to ? item.to : ''"
                    v-biding="props.actions"
                    @click="item.command ? item.command : ''">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <!-- <Badge v-if="item.badge"
                        class="ml-auto"
                        :value="item.badge" /> -->
                    <span v-if="item.shortcut"
                        class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                        }}</span>
                </RouterLink>
            </template>
            <template #end>
                <button v-ripple
                    class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <!-- <Avatar icon="pi pi-user"
                        class="mr-2" /> -->
                    <span class="inline-flex flex-col">
                        <span class="font-bold">{{ user.name }}</span>
                        <span class="text-sm">{{ currentUser }}</span>
                    </span>
                </button>
            </template>
        </Menu>
    </div>
</template>