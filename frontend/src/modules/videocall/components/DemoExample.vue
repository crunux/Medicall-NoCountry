<script lang="ts">
import { defineComponent, h, ref, toRefs } from 'vue';


export default defineComponent({
    name: 'DemoExample',
    props: {
        type: {
            type: String,
            default: 'normal'
        }
    },
    setup(_props, { expose }) {

        const { type } = toRefs(_props)
        const name = ref('Jose')

        const changeName = () => {
            name.value = name.value === 'Maria' ? 'Jose' : 'Maria'
        }

        expose({
            name,
            changeName
        })

        return {
            name
        }
    }
})
</script>

<template>
    <h1>Hello, {{ name }} - {{ type }}</h1>
</template>
