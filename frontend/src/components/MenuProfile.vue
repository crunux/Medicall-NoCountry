<script setup lang="ts">
import type { MenuItem } from '@/types';
const el = ref<InstanceType<typeof Menu> | null>(null)

withDefaults(defineProps<{
    popup: boolean,
    items: MenuItem[]
}>(), {
    popup: false
})


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
                    <span class=" text-xl font-semibold">user</span>
                </span>
            </template>
            <template #submenuheader="{ item }">
                <span class="text-primary font-bold">{{ item.label }}</span>
            </template>
            <template #item="{ item, props }">
                <a v-ripple
                    class="inline-flex items-center"
                    v-bind="props.action">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <!-- <Badge v-if="item.badge"
                        class="ml-auto"
                        :value="item.badge" /> -->
                    <span v-if="item.shortcut"
                        class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                        }}</span>
                </a>
            </template>
            <template #end>
                <button v-ripple
                    class="relative overflow-hidden w-full p-link flex align-items-center p-2 pl-3 text-color hover:surface-200 border-noround">
                    <!-- <Avatar icon="pi pi-user"
                        class="mr-2" /> -->
                    <span class="inline-flex flex-col">
                        <span class="font-bold">Name</span>
                        <span class="text-sm">typeUser</span>
                    </span>
                </button>
            </template>
        </Menu>
    </div>
</template>