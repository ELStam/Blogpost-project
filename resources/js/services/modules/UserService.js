import apiClient from '../apiClient'
import {route} from 'ziggy-js'

export default {
    /**
     * Fetches all users.
     *
     * Sends a GET request to the 'users.index' endpoint (or whatever route lists users).
     *
     * @returns {Promise<Array>}
     */
    async getAllUsers() {
        try {
            const response = await apiClient.get(route('users.index'))
            return response.data
        } catch (error) {
            alert(error)
            throw error
        }
    },

    /**
     * Fetches the current logged-in user.
     *
     * Sends a GET request to the 'user.current' endpoint.
     *
     * @returns {Promise<Object|undefined>}
     */
    async getCurrentUser() {
        try {
            const response = await apiClient.get(route('user.current'))
            return response.data
        } catch (error) {
            alert(error)
        }
    }
}
