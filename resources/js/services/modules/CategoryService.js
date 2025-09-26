import {route} from 'ziggy-js'
import apiClient from "@/services/apiClient.js";

export default {

    /**
     * Fetches all the categories.
     *
     * Sends a GET request to the 'categories.index' endpoint.
     *
     * @returns {Promise<Array|undefined>}
     */
    async getAllCategories() {
        try {
            const response = await apiClient.get(route('categories.index'))
            return response.data.categories
        } catch (error) {
            alert(error)
        }
    }
}
