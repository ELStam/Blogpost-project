import apiClient from "@/services/apiClient.js";
import {route} from "ziggy-js";
import Cookies from "js-cookie";

export default {

    /**
     * Creates a new blog post.
     *
     * Sends a POST request to the 'blogs.store' endpoint.
     *
     * @param {string} title
     * @param {string} introduction
     * @param {string} paragraph_title
     * @param {string} parapgraph_body
     * @param {Array<number>} categories_id
     *
     * @returns {Promise<Object|undefined>}
     */
    async createBlog(title, introduction, paragraph_title, parapgraph_body, categories_id) {
        try {
            const response = await apiClient.post('blogs.store', {
                title,
                introduction,
                paragraph_title,
                parapgraph_body,
                categories_id
            })

            return response.data
        } catch (error) {
            alert(error)
        }
    },

    /**
     * Fetches all the blogs.
     *
     * Sends a GET request to the 'blogs.index' endpoint.
     *
     * @returns {Promise<Array|undefined>}
     */
    async getAllBlogs() {
        try {
            const response = await apiClient.get(route('blogs.index'))
            return response.data.blogs
        } catch (error) {
            alert(error)
        }

    },

    /**
     * Fetches a single blog by its ID.
     *
     * Sends a GET request to the 'blogs.show' endpoint.
     *
     * @param {string|number} id
     * @returns {Promise<Object|undefined>}
     */
    async getBlog(id) {
        try {
            const response = await apiClient.get(route('blogs.show', {blog: id}))
            return response.data.blog
        } catch (error) {
            alert(error)
        }
    },

    /**
     * Deletes the blog by its ID.
     *
     * Sends a DELETE request to the 'blogs.destroy'.
     *
     * @param id
     * @returns {Promise<Object|undefined>}
     */
    async deleteBlog(id) {
        try {
            const response = await apiClient.delete(route('blogs.destroy', {blog: id}))
            return response.data
        } catch (error) {
            alert(error)
        }
    }
}

