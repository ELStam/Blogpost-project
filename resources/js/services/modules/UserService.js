import apiClient from '../apiClient'
import {route} from 'ziggy-js'

export default {
    async getAllUsers() {
        try {
            const response = await apiClient.get(route('users.index'))
            return response.data
        } catch (error) {
            alert(error)
        }

    },

    async getCurrentUser() {
        try {
            const response = await apiClient.get(route('user.current'))
            return response.data
        } catch (error) {
            alert(error)
        }

    }
}
