import { defineStore } from "pinia"
import { computed, ref } from "vue"
import type { PacienteUser, MedicoUser, AdminUser } from '@/types';

type User = PacienteUser | MedicoUser | AdminUser
type OtherUser = PacienteUser | MedicoUser

const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)
    const token = ref<string | null>(null)
    const otherUser = ref<OtherUser | null>(null)

    const setToken = (newToken: string) => {
        token.value = newToken
    }

    const setUser = (newUser: User) => {
        user.value = newUser
    }

    const setOtherUser = (newUser: OtherUser) => {
        otherUser.value = newUser
    }

    const currentUser = computed(() => user.value)

    const currentOtherUser = computed(() => otherUser.value)

    return {
        user,
        token,
        // getters
        currentUser,
        currentOtherUser,
        //Actions
        setToken,
        setUser,
        setOtherUser,
    }
},
    {
        persist: true,
    },
)

export default useAuthStore