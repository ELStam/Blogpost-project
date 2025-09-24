import UserService from "@/services/modules/UserService.js";

export default {
    namespaced: true,

    state() {
        return {
            currentUser: '',
            users: []
        }
    },

    mutations: {
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },
        SET_USERS(state, users) {
            state.users = users;
        }
    },

    actions: {
        async fetchCurrentUser({commit}) {
            try {
                commit('SET_CURRENT_USER', await UserService.getCurrentUser())
            } catch (error) {
                throw error
            }
        },
    },

    getters: {
        currentUser(state) {
            return state.currentUser
        },
    }
}
