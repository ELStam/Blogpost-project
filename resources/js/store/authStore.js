import Cookies from "js-cookie";
import AuthService from "@/services/modules/AuthService.js";


export default {
    namespaced: true,

    state() {
        return {
            token: Cookies.get('auth_token') || null,
            errors: {},
        }
    },

    mutations: {
        /**
         * Sets or removes the token in the state and cookies.
         *
         * @param {Object} state
         * @param {string} token
         *
         * @return {void}
         */
        SET_TOKEN(state, token) {
            state.token = token

            token ? Cookies.set('auth_token', token) : Cookies.remove('auth_token')
        },

        /**
         * Sets the errors object in the state.
         * 
         * @param {Object} state 
         * @param {Object} errors 
         * 
         * @return {void}
         */
        SET_ERRORS(state, errors) {
            state.errors = errors
        }
    },

    actions: {
        /**
         * Logs the user in via the API and stores the token.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {Object} payload
         * @param {string} payload.username
         * @param {string} payload.password
         *
         * @return {Promise<Object>}
         */
        async login({commit}, {username, password}) {
            try {
                const data = await AuthService.login(username, password)
                const token = data.auth_token

                token
                    ? commit('SET_TOKEN', token)
                    : commit('SET_ERRORS', data)
                console.log(data)

                return data
            } catch (error) {
                throw error
            }
        },

        /**
         * Registers a new user via the API and stores the token.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {Object} user
         * @param {string} user.name
         * @param {string} user.bio
         * @param {string} user.username
         * @param {string} user.password
         * @param {string} user.confirm_password
         *
         * @returns {Promise<Object>}
         */
        async register({commit}, user) {
            try {
                const data = await AuthService.register(
                    user
                )

                data.auth_token
                    ? commit('SET_TOKEN', data.auth_token)
                    : commit('SET_ERRORS', data)

                return data

            } catch (error) {
                throw error
            }
        },

        /**
         * Logs the user out via the API and sets the token null.
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @return {Promise<void>}
         */
        async logout({commit}) {
            try {
                await AuthService.logout()
                commit('SET_TOKEN', null)
            } catch (error) {
                throw error
            }
        },

        /**
         * Clears the errors in the state and
         * commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @returns {Promise<void>}
         */
        clearErrors({commit}) {
            try {
                commit('SET_ERRORS', {})
            } catch (error) {
                throw error
            }
        }
    },

    getters: {
        /**
         * Returns whether the user is authenticated.
         *
         * @param {Object} state
         * @return {boolean}
         */
        isAuthenticated(state) {
            return !!state.token
        },

        /**
         * Returns the current token.
         *
         * @param {Object} state
         * @return {string}
         */
        getToken(state) {
            return state.token
        },

        getErrors(state) {
            return state.errors
        }
    }
}


