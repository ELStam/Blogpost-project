import apiClient from "@/services/apiClient.js";
import {route} from "ziggy-js";

export default class CommentService {
    static comment;

    /**
     * Deletes the comment by its ID.
     *
     * Sends a DELETE request to the 'comments.destroy'.
     *
     * @returns {Promise<Object|undefined>}
     * @param blog
     * @param comment
     */

    static async deleteComment(blog, comment) {
        console.log('Deleting comment:', comment);
        console.log('From blog:', blog);

        try {
            const response = await apiClient.delete(
                route('comments.destroy', {blog: blog.id, comment: comment.id})
            );
            console.log('Response from API:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error deleting comment:', error);
            alert(error);
        }
    }


    static async addComment(blogId, body) {
        try {
            const response = await apiClient.post(
                route('comments.store', {blog: blogId}),
                {body}
            );
            return response.data.comment;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    /**
     * Fetches all the comments.
     *
     * Sends a GET request to the 'comment.index' endpoint.
     *
     * @returns {Promise<Array|undefined>}
     */
    async getAllComments() {
        try {
            const response = await apiClient.get(route('comments.index'))
            return response.data.comments
        } catch (error) {
            alert(error)
        }

    }
}
