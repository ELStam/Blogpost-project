import BlogService from "@/services/modules/BlogService.js";
import CategoryService from "@/services/modules/CategoryService.js";

export default {
    namespaced: true,

    state() {
        return {
            blogs: [],
            categories: [],
        }
    },

    mutations: {
        ADD_BLOG(state, blog) {
            state.blogs.push(blog)
        },

        SET_BLOGS(state, blogs) {
            state.blogs = blogs
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
                console.log('Failed to add blog', blog)
            }
        },

        fetchBlogs({commit}) {
            return BlogService.getAllBlogs()
                .then(response => {
                    console.log('blogs: ', response)
                    commit('SET_BLOGS', response)
                })
                .catch(error => {
                    throw error
                })
        },

        fetchCategories({commit}) {
            return CategoryService.getAllCategories()
                .then(response => {
                    console.log('categories', response)
                    commit('SET_CATEGORIES', response)
                })
                .catch(error => {
                    throw error
                })
        }
    },

    getters: {
        getBlogs(state) {
            console.log(state.blogs)
            return state.blogs
        },

        getCategories(state) {
            return state.categories
        }
    }
}
