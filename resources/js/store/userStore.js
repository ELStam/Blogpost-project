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
        /**
         * Sets the current user in the state.
         *
         * @param {Object} state
         * @param {Object} user
         *
         * @return {void}
         */
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
        },
    },

    actions: {
        /**
         * Fetches the current user from the API and commits it to the state
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @return {Promise<void>}
         */
        async fetchCurrentUser({commit}) {
            try {
                commit('SET_CURRENT_USER', await UserService.getCurrentUser())
            } catch (error) {
                throw error
            }
        },
    },

    getters: {
        /**
         * Returns the current user.
         *
         * @param {Object} state
         *
         * @return {Object} - current user
         */
        currentUser(state) {
            return state.currentUser
        },
    }
}
