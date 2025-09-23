import {createStore} from 'vuex';
import authStore from "@/store/modules/authStore.js";
import userStore from "@/store/modules/userStore.js";
import blogModule from "@/store/modules/blogModule.js";

const blogStore = createStore({
    modules: {
        auth: authStore,
        user: userStore,
        blog: blogModule
    },
})

export default blogStore
