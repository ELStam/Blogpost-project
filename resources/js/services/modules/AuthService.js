import apiClient from "@/services/apiClient.js"
import {route} from 'ziggy-js'
import Cookies from 'js-cookie'

export default {
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
            console.log(error)
        }
    }
}
