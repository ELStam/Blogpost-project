import BlogService from "@/services/modules/BlogService.js";

export default {
    namespaced: true,

    state() {
        return {
            blogs: []
        }
    },

    mutations: {
        SET_BLOGS(state, blogs) {
            state.blogs = blogs
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
        }
    },

    getters: {
        getBlogs(state) {
            console.log(state.blogs)
            return state.blogs
        }
    }
}
