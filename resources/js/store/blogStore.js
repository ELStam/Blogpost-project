import BlogService from "@/services/modules/BlogService.js";
import CategoryService from "@/services/modules/CategoryService.js";
import PageLayout from "@/components/PageLayout.vue";
import ProfilePhotoComponent from "@/components/general/ProfilePhotoComponent.vue";
import BlogItemComponent from "@/components/blogs/BlogItemComponent.vue";
import IconComponent from "@/components/general/IconComponent.vue";

export default {
    components: {IconComponent, BlogItemComponent, ProfilePhotoComponent, PageLayout},
    
    namespaced: true,

    state() {
        return {
            blogs: [],
            categories: [],
            blog: ''
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
         * @param state
         * @param categories
         *
         * @return {void}
         */
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    },

    actions: {
        /**
         * Creates a new blog via API and commits it to the store.
         *
         * @param {Object} context
         * @param {Function} context.commit
         * @param {Object} payload - Blog data
         *
         * @return {Promise<Object>}
         */
        async createBlog({commit}, {blog}) {
            try {
                const createdBlog = await BlogService.createBlog(blog)
                commit('ADD_BLOG', createdBlog)
                return createdBlog
            } catch (error) {
                throw error
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
