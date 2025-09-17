import UserService from "@/services/modules/UserService.js";

export default {
    namespaced: true,

    state() {
        return {
            currentUser: null,
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
                const user = await UserService.getCurrentUser();
                commit('SET_CURRENT_USER', user);
            } catch (error) {
                console.error('Failed to fetch current user:', error);
            }
        },

        async setUsers({commit}) {
            try {
                const users = await UserService.getAllUsers();
                commit('SET_USERS', users);
            } catch (error) {
                console.log('Failed to fetch users:', error);
            }
        }
    },

    getters: {
        currentUser: (state) => state.currentUser,
        allUsers: (state) => state.users
    }
}
