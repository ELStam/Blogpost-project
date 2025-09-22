import {createStore} from 'vuex';
import authModule from "@/store/modules/authModule.js";
import userModule from "@/store/modules/userModule.js";
import blogModule from "@/store/modules/blogModule.js";

const blogStore = createStore({
    modules: {
        auth: authModule,
        user: userModule,
        blog: blogModule
    },
})

export default blogStore
