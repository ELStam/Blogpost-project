import BlogService from "@/services/modules/BlogService.js";
import CategoryService from "@/services/modules/CategoryService.js";

export default {
    namespaced: true,

    state() {
        return {
            blogs: [],
            categories: [],
            blog: '',
            errors: {},
        }
    },

    mutations: {
        /**
         * Adds new blog to the state.
         *
         * @param {Object} state
         * @param {Object} blog
         *
         * @return {void}
         */
        ADD_BLOG(state, blog) {
            state.blogs.push(blog)
        },

        /**
         * Sets the blogs array in the state.
         *
         * @param {Object} state
         * @param {Array<Object>}blogs
         *
         * @return {void}
         */
        SET_BLOGS(state, blogs) {
            state.blogs = blogs
        },

        /**
         * Sets the currently selected blog.
         *
         * @param {Object} state
         * @param {Object} blog
         *
         * @return {void}
         */
        SET_BLOG(state, blog) {
            state.blog = blog
        },

        /**
         * Removes the blog based on the index.
         *
         * @param {Object} state
         * @param {number} index
         *
         * @return {void}
         */
        REMOVE_BLOG(state, index) {
            state.blogs.splice(index, 1)
        },

        /**
         * Sets the categories array in the state.
         *
         * @param {Object} state
         * @param {Array<Object>} categories
         *
         * @return {void}
         */
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },

        /**
         * Sets the errors object in the state.
         * 
         * @param {Object} state 
         * @param {Object} errors 
         * 
         * @returns {void}
         */
        SET_ERRORS(state, errors) {
            state.errors = errors
        }
    },

    actions: {
        /**
         * Creates a new blog via API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {Object} blog
         * 
         * @return {Promise<void>}
         */
        async createBlog({commit}, blog) {
           try {
            const data = await BlogService.createBlog(blog)
            commit('ADD_BLOG', data)
            return data
           } catch (error) {
            if (error.status === 422) return error.response.data.errors
           }
        },

        /**
         * Fetches the blogs via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @return {Promise<void>}
         */
        fetchBlogs({commit}) {
            return BlogService.getAllBlogs()
                .then(response => {
                    commit('SET_BLOGS', response)
                })
                .catch(error => {
                    throw error
                })
        },

        /**
         * Fetches the blog based on id via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @param {number} id - the id of the blog
         *
         * @return {Promise<void>}
         */
        fetchBlog({commit}, id) {
            return BlogService.getBlog(id)
                .then(response => {
                    commit('SET_BLOG', response)
                }).catch(error => {
                    throw error
                })
        },

        /**
         * Removes the blog based on the id via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {Object} state
         * @param id - the id of the blog
         *
         * @return {Promise<void>}
         */
        removeBlog({commit, state}, id) {
            return BlogService.deleteBlog(id)
                .then(response => {
                    commit('REMOVE_BLOG', response)
                }).catch(error => {
                    throw error
                })
        },

        /**
         * Fetches the categories via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @return {Promise<void>}
         */

        fetchCategories({commit}) {
            return CategoryService.getAllCategories()
                .then(response => {
                    commit('SET_CATEGORIES', response)
                })
                .catch(error => {
                    throw error
                })
        }
    },

    getters: {
        /**
         * Returns all blogs.
         *
         * @param {Object} state
         *
         * @return {Array<Object>} - blogs
         */
        blogs(state) {
            return state.blogs
        },

        /**
         * Returns a blog.
         *
         * @param {Object} state
         *
         * @return {Object} - blog
         */
        blog(state) {
            return state.blog
        },

        /**
         * Returns all categories.
         *
         * @param {Object} state
         *
         * @return {Array<Object>} - categories
         */
        categories(state) {
            return state.categories
        }
    }
}
