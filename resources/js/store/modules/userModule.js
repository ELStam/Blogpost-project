import UserService from "@/services/modules/UserService.js";

export default {
    namespaced: true,

    state() {
        return {
            users: []
        }
    },

    mutations: {
        /**
         * Sets the users array in the state.
         *
         * @param {Object} state - VueX state
         * @param {Array<Object>} users - Array of user objects
         */
        SET_USERS(state, users) {
            state.users = users
        }
    },

    actions: {
        /**
         * Fetches all users from the API via UserService
         * and commits them to the state.
         * @param {Object} context
         * @param {Function} context.commit
         * @returns {Promise<void>}
         */
        async setUsers({commit}) {
            try {
                const users = await UserService.getAllUsers()
                commit('SET_USERS', users)
            } catch (error) {
                console.log('Failed to fetch users:', error)
            }
        }
    },

    getters: {
        /**
         * Returns all users from state.
         *
         * @param {Object} state
         * @returns {Array<Object>} Users Array
         */
        allUsers(state) {
            return state.users
        },
    }
}

