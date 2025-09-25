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

            if (response.data.auth_token) {
                Cookies.set('auth_token', response.data.auth_token)
            }

            return response.data
        } catch (error) {
            alert(error)
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
