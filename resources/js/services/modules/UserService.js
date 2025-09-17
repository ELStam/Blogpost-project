import apiClient from '../apiClient'
import {route} from 'ziggy-js'

export default {
    async getAllUsers() {
        const response = await apiClient.get(route('users.index'))
        return response.data
    },

    async getCurrentUser() {
        const response = await apiClient.get(route('user.current'))
        return response.data
    }
}
