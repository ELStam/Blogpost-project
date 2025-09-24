import {route} from 'ziggy-js'
import apiClient from "@/services/apiClient.js";

export default {
    async getAllCategories() {
        try {
            const response = await apiClient.get(route('categories.index'))
            return response.data.categories
        } catch (error) {
            alert(error)
        }
    }
}
