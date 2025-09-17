import Cookies from "js-cookie";
import AuthService from "@/services/modules/AuthService.js";


export default {
    namespaced: true,

    state() {
        return {
            token: Cookies.get('auth_token') || null,

        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
    },

    actions: {
        async login({commit}, {username, password}) {
            try {
                const data = await AuthService.login(username, password)
                commit('SET_TOKEN', data.auth_token)
                return data
            } catch {
                console.log('Login failed', error)
            }
        },
    }
}


