import apiClient from "@/services/apiClient.js";
import {route} from "ziggy-js";
import Cookies from "js-cookie";

export default {

    /**
     * Creates a new blog post.
     *
     * Sends a POST request to the 'blogs.store' endpoint.
     * The blog data is sent as FormData to handle file uploads.
     * 
     * @param {Object} blog
     * @param {string} blog.title
     * @param {string} blog.introduction
     * @param {string} blog.paragraph_title
     * @param {string} blog.paragraph_body
     * @param {Array<number>} blog.category_id
     * @param {File|null} blog.banner
     *
     * @returns {Promise<Object|undefined>}
     */
    async createBlog(blog) {
        try {
            let formData = new FormData()
            formData.append('title', blog.title)
            formData.append('introduction', blog.introduction)
            formData.append('paragraph_title', blog.paragraph_title)
            formData.append('paragraph_body', blog.paragraph_body)

            blog.category_id.forEach(id => {
                formData.append('categories_id[]', id)
            })

            if (blog.banner) {
                formData.append('banner', blog.banner)
            }

            const response = await apiClient.post(route('blogs.store'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })

            return response.data.blog
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

