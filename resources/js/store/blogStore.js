import {createStore} from 'vuex';
import authModule from "@/store/modules/authModule.js";
import userModule from "@/store/modules/userModule.js";


const blogStore = createStore({

    modules: {
        auth: authModule,
        user: userModule
    },
})

export default blogStore
