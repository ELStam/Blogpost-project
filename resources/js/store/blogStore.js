import BlogService from "@/services/modules/BlogService.js";
import CategoryService from "@/services/modules/CategoryService.js";
import apiClient from "@/services/apiClient.js";

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
         * Removes a blog from the state based on its id.
         *
         * @param {Object} state
         * @param {number} id
         *
         * @return {void}
         */
        REMOVE_BLOG(state, id) {
            state.blogs = state.blogs.filter(blog => blog.id !== id)
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
         * Resets the blogs in the state
         * @param {Object} state
         *
         * @returns {void}
         */
        RESET_BLOGS(state) {
            state.blogs = []
        },

        SET_ERRORS(state, errors) {
            state.errors = errors
        }
    },

    actions: {
        /**
         * Creates a new blog via API.
         *
         * @param {Object} context
         * @param {Object} blog
         *
         * @return {Promise<void>}
         */
        async createBlog({}, blog) {
            try {
                return await BlogService.createBlog(blog)
            } catch (error) {
                if (error.status === 422) return error.response.data.errors
            }
        },

        /**
         * Fetches the blogs via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {string} query
         *
         * @return {Promise<Array>}
         */
        async fetchBlogs({commit}, query = '') {
            if (!query)
                return BlogService.getAllBlogs()
                    .then(response => commit('SET_BLOGS', response))
                    .catch(error => {
                        throw error
                    });

            try {
                const response = await apiClient.get('api/search', {
                    params: {title: query}
                });
                commit('SET_BLOGS', response.data.blogs ?? [])
            } catch (error) {
                console.error('Search error:', error);
                commit('SET_BLOGS', [])
            }
        },

        /**
         * Fetches the blog based on id via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @param {number} id
         *
         * @return {Promise<Object>}
         */
        fetchBlog({commit}, id) {
            return BlogService.getBlog(id)
                .then(response => {
                    commit('SET_BLOG', response)
                    return response
                })
                .catch(error => {
                    throw error
                })
        },

        /**
         * Removes the blog based on the id via the API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {number} id
         *
         * @return {Promise<void>}
         */
        removeBlog({commit}, id) {
            return BlogService.deleteBlog(id)
                .then(() => {
                    commit('REMOVE_BLOG', id)
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
        },

        /**
         * Resets the blogs
         *
         * @param {Object} context
         * @param {Function} context.commit
         *
         * @return {void}
         */
        resetBlogs({commit}) {
            commit('RESET_BLOGS')
        },

        /**
         * Updates a blog via the API.
         *
         * @param {Object} _context
         * @param {Object} payload
         * @param {number} payload.id
         * @param {Object} payload.blog
         *
         * @return {Promise<void>}
         */
        async updateBlog({commit}, {id, blog}) {
            try {
                commit('SET_ERRORS', {})
                return await BlogService.updateBlog(id, blog)
            } catch (error) {
                console.log(true)
                console.log(error)
                throw error
            }
        },
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
