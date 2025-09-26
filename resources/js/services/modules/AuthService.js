import apiClient from "@/services/apiClient.js"
import {route} from 'ziggy-js'
import Cookies from 'js-cookie'

export default {
    /**
     * Logs a user in with a username and password.
     *
     * Sends a POST request to the 'login' endpoint, If successful,
     * stores the token in the cookies.
     *
     * @param {string} username
     * @param {string} password
     *
     * @returns {Promise<Object>}
     */
    async login(username, password) {
        try {
            const response = await apiClient.post(route('login'), {
                username,
                password
            })
            console.log(response.data.auth_token)

            Cookies.set('auth_token', response.data.auth_token)


            // if (response.data.auth_token) {
            //     Cookies.set('auth_token', response.data.auth_token)
            // }


            return response.data
        } catch (error) {
            if (error.status === 422) return error.response.data.errors
        }
    },

    /**
     * Register a new user.
     *
     * Sends a POST request to the 'register' endpoint, if successful,
     * stores the token in the cookies.
     *
     * @param {Object} user
     * @param {string} user.name
     * @param {string} user.bio
     * @param {string} user.username
     * @param {string} user.password
     * @param {string} user.confirm_password
     *
     * @returns {Promise<Object>}
     */
    async register(user) {
        try {
            const response = await apiClient.post(route('register'),
                user
            )

            if (response.data.auth_token) {
                Cookies.set('auth_token', response.data.auth_token)
            }

            return response.data
        } catch (error) {
            if (error.status === 422) return error.response.data.errors
        }
    },

    /**
     * Logs out the current user.
     *
     * Sends a POST request to the 'logout' endpoint and removes the auth token
     * from the cookies.
     *
     * @returns {Promise<Object|undefined>}
     */
    async logout() {
        try {
            const response = await apiClient.post(route('logout'))
            Cookies.remove('auth_token')
            return response.data
        } catch (error) {
            alert(error)
        }
    }
}
