import CommentService from "@/services/modules/CommentService.js";

export default {
    namespaced: true,

    state() {
        return {
            comments: []
        };
    },

    mutations: {
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
         * Removes the comment based on the id via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {number} id
         *
         * @return {Promise<void>}
         */
        async removeComment({commit}, {blogId, commentId}) {
            try {
                await CommentService.deleteComment(blogId, commentId);
                commit('DELETE_COMMENT', commentId);
            } catch (error) {
                console.error('Failed to delete comment:', error);
                throw error;
            }
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
