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
        SET_BLOGS(state, blogs) {
            state.blogs = blogs
        },

        SET_CATEGORIES(state, categories) {
            state.categories = categories
        }
    },

    actions: {
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
