import {createStore} from 'vuex';
import UserService from '../services/modules/UserService';
import Cookies from "js-cookie";
import AuthService from "@/services/modules/AuthService.js";


const blogStore = createStore({
    state() {
        return {
            token: Cookies.get('auth_token') || null,
            // List of user objects.
            users: []
        }
    },


    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

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
        async login({commit}, {username, password}) {
            try {
                const data = await AuthService.login(username, password)
                commit('SET_TOKEN', data.auth_token)
                return data
            } catch {
                console.log('Login failed', error)
            }
        },
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
})

export default blogStore
