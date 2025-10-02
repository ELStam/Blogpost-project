import CommentService from "@/services/modules/CommentService.js";
import BlogService from "@/services/modules/BlogService.js";

export default {
    namespaced: true,

    state() {
        return {
            comments: []
        };
    },

    mutations: {
        /**
         * Set the comments state
         *
         * @param {Object} state
         * @param {Array} comments
         */
        SET_COMMENTS(state, comments) {
            state.comments = comments;
        },

        /**
         * Add a new comment to the state
         *
         * @param {Object} state
         * @param {Object} comment
         */
        ADD_COMMENT(state, comment) {
            state.comments.push(comment);
        },

        /**
         * Remove a comment by its id
         *
         * @param {Object} state
         * @param {number} commentId
         */
        DELETE_COMMENT(state, commentId) {
            state.comments = state.comments.filter(c => c.id !== commentId);
        }
    },

    actions: {
        /**
         * Add a new comment
         *
         * @param {Object} context
         * @param {Object} commentData
         */
        async addComment({commit}, commentData) {
            try {
                const newComment = await CommentService.createComment(commentData);
                commit('ADD_COMMENT', newComment);
            } catch (error) {
                console.error("Failed to add comment:", error);
                throw error;
            }
        },

        /**
         * Delete a comment by ID
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param commentId
         *
         * @return {Promise<void>}
         */
        deleteComment({commit}, commentId) {
            return CommentService.deleteComment(commentId)
                .then(() => {
                    commit('DELETE_COMMENT', commentId)
                }).catch(error => {
                    throw error
                })
        }
    },

    getters: {
        /**
         * Returns all comments.
         *
         * @param {Object} state
         *
         * @return {Array<Object>} - blogs
         */
        comments(state) {
            return state.comments;
        },
    }
};
