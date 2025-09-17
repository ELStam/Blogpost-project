import apiClient from "@/services/apiClient.js";
import {route} from "ziggy-js";

export default {
    async getAllBlogs() {
        const response = await apiClient.get(route('blogs.index'))
        return response.data
    },
}
