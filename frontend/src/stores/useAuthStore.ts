import { defineStore } from "pinia"
import { ref } from "vue"
import type { User } from '@/types';

interface UserPaciente extends User { }
interface UserMedico { }
interface UserAdmin { }

type UserStore = UserPaciente | UserMedico | UserAdmin

export const useAuthStore = defineStore('auth', () => {
    const user = ref<UserStore| null>(null)
    const token = ref<string | null>(null)
    const otherUser = ref<UserPaciente | UserMedico | null>(null)

    const setToken = (newToken: string) => {
        token.value = newToken
    }

    const setUser = (newUser: UserStore) => {
        user.value = newUser
    }

    const setOtherUser = (newUser: UserPaciente | UserMedico) => {
        otherUser.value = newUser
    }
    return {
        user,
        token,
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