import apiClient from '../apiClient'
import { route } from 'ziggy-js'

export default {
    /**
     * Fetches all users from the backend API.
     * 
     * This method uses the 'apiClient' to send a GET request to
     * the Laravel route named 'users.index' (via Ziggy).
     * It returns the response data (an array of user objects)
     * 
     * @async
     * @function
     * @returns {Promisre<Array<Object>>} An array of user objects from the API
     */
    async getAllUsers() {
        const response = await apiClient.get(route('users.index'))
        return response.data
    }
}