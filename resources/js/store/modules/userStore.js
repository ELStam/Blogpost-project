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
         * @param {Function} context.dispatch
         * @param {Object} context.getters
         * @param {Object} payload
         * @param {string} payload.data
         * @param {string} payload.data2
         *
         * @returns {void}
         */
        fetchCurrentUser({commit}) {
            try {
                commit('SET_CURRENT_USER', UserService.getCurrentUser())
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
    }
}
