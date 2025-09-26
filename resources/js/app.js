import {createApp} from 'vue';
import {ZiggyVue} from 'ziggy-js';

import App from './App.vue';
import {Ziggy} from './ziggy'

import router from '@/router/router';
import blogStore from '@/store/blogStore'
import authStore from "@/store/authStore.js";
import userStore from "@/store/userStore.js";
import {createStore} from "vuex";

const app = createApp(App)
const stores = createStore({
    modules: {
        blog: blogStore,
        auth: authStore,
        user: userStore
    }
})

app.use(router)
    .use(stores)
    .use(ZiggyVue, Ziggy)

app.mount('#app')
