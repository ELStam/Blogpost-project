import apiClient from '../apiClient'
import {route} from 'ziggy-js'

export default {
    async getAllUsers() {
        const response = await apiClient.get(route('users.index'))
        return response.data
    },

    async getCurrentUser() {
        const response = await apiClient.get('/api/user'); // Laravel Sanctum endpoint
        return response.data;
    }
}
