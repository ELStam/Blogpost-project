import {route} from 'ziggy-js'
import apiClient from "@/services/apiClient.js";

export default {
    async getAllCategories() {
        try {
            const reponse = await apiClient.get(route('categories.index'))
            return reponse.data
        } catch (error) {
            console.log(error)
        }
    }
}
