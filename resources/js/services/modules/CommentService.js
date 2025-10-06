import apiClient from "@/services/apiClient.js";
import {route} from "ziggy-js";

export default class CommentService {

    /**
     * Fetch all comments for a specific blog
     */
    static async getAllComments(blogId) {
        try {
            const response = await apiClient.get(route('comments.index', {blog: blogId}));
            return response.data.comments;
        } catch (error) {
            console.error("Error fetching comments:", error);
            throw error;
        }
    }

    /**
     * Add a new comment
     */
    static async addComment(blogId, body) {
        try {
            const response = await apiClient.post(route('comments.store', {blog: blogId}), {body});
            return response.data.comment;
        } catch (error) {
            console.error("Error creating comment:", error);
            throw error;
        }
    }

    /**
     * Deletes the comment by its ID.
     *
     * Sends a DELETE request to the 'comment.destroy'.
     *
     * @returns {Promise<Object|undefined>}
     * @param blogId
     * @param commentId
     */
    static async deleteComment(blogId, commentId) {
        try {
            const response = await apiClient.delete(route('comments.destroy', {
                comment: commentId,
                blog: blogId
            }))
            return response.data
        } catch (error) {
            alert(error)
        }
    }
}
