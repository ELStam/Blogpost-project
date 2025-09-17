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
            if (token) {
                Cookies.set('auth_token', token)
            } else {
                Cookies.remove('auth_token')
            }
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

        async logout({commit}) {
            try {
                await AuthService.logout()
                commit('SET_TOKEN', null)
            } catch (error) {
                console.log('Logout failed', error)
            }
        }
    },

    getters: {
        isAuthenticated(state) {
            return !!state.token
        },

        getToken(state) {
            return state.token
        }
    }
}


