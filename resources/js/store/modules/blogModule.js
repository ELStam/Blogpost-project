import BlogService from "@/services/modules/BlogService.js";
import CategoryService from "@/services/modules/CategoryService.js";

export default {
    namespaced: true,

    state() {
        return {
            blogs: [],
            categories: [],
            blog: ''
        }
    },

    mutations: {
        ADD_BLOG(state, blog) {
            state.blogs.push(blog)
        },

        SET_BLOGS(state, blogs) {
            state.blogs = blogs
        },

        SET_BLOG(state, blog) {
            state.blog = blog
        },

        REMOVE_BLOG(state, index) {
            state.blogs.splice(index, 1)
        },

        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    },

    actions: {
        async createBlog({commit}, {title, body}) {
            try {
                const blog = await BlogService.createBlog(title, body)
                commit('ADD_BLOG', blog)
                return blog
            } catch (error) {
                throw error
            }
        },

        fetchBlogs({commit}) {
            return BlogService.getAllBlogs()
                .then(response => {
                    commit('SET_BLOGS', response)
                })
                .catch(error => {
                    throw error
                })
        },

        fetchBlog({commit}, id) {
            return BlogService.getBlog(id)
                .then(response => {
                    commit('SET_BLOG', response)
                }).catch(error => {
                    throw error
                })
        },

        removeBlog({commit, state}, id) {
            return BlogService.deleteBlog(id)
                .then(response => {
                    commit('REMOVE_BLOG', response)
                }).catch(error => {
                    throw error
                })
        },

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
        blogs(state) {
            return state.blogs
        },

        blog(state) {
            return state.blog
        },

        categories(state) {
            return state.categories
        }
    }
}
