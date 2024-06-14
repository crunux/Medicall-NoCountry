import { defineStore } from "pinia"
import { ref } from "vue"

interface UserPaciente { }
interface UserMedico { }
interface UserAdmin { }

export const useAuthStore = defineStore('auth', () => {
    const user = ref<UserPaciente | UserMedico | UserAdmin | null>(null)
    const token = ref<string | null>(null)
    const otherUser = ref<UserPaciente | UserMedico | null>(null)

    const setToken = (newToken: string) => {
        token.value = newToken
    }

    const setUser = (newUser: any) => {
        user.value = newUser
    }

    const setOtherUser = (newUser: any) => {
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