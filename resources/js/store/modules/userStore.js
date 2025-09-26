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
        /**
         * set currentUser state
         *
         * @param {Object} state
         * @param {Object} user
         *
         * @returns {void}
         */
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },
        SET_USERS(state, users) {
            state.users = users;
        }
    },

    actions: {
        /**
         * Fetch currentUser handler
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @returns {void}
         */
        async fetchCurrentUser({commit}) {
            try {
                commit('SET_CURRENT_USER', await UserService.getCurrentUser())
            } catch (error) {
                throw error
            }
        },

        /**
         * Fetch users handler
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @returns {void}
         */
        async fetchUsers({commit}) {
            try {
                commit('SET_USERS', await UserService.getAllUsers())
            } catch (error) {
                throw error
            }
        },
    },

    getters: {
        /**
         * Get currentUser state
         *
         * @param {Object} state
         *
         * @returns {string}
         */
        currentUser(state) {
            return state.currentUser
        },

        /**
         * Get users state
         *
         * @param {Object} state
         *
         * @returns {Array}
         */
        users(state) {
            return state.users
        }
    }
}
