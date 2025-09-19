import apiClient from "@/services/apiClient.js";
import {route} from "ziggy-js";
import Cookies from "js-cookie";

export default {

    async createBlog(title, body) {
        try {
            const response = await apiClient.post('blogs.store', {
                title,
                body
            })

            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    async getAllBlogs() {
        const response = await apiClient.get(route('blogs.index'))
        return response.data
    },
}


// async login(username, password) {
//     try {
//         const response = await apiClient.post(route('login'), {
//             username,
//             password
//         })
//
//         if (response.data.auth_token) {
//             Cookies.set('auth_token', response.data.auth_token)
//         }
//
//         return response.data
//
//     } catch (error) {
//         console.log(error)
//     }
// },
