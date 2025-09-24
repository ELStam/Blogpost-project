import {createApp} from 'vue';
import {ZiggyVue} from 'ziggy-js';

import App from './App.vue';
import {Ziggy} from './ziggy'

import router from '@/router/router';
import blogStore from '@/store/blogStore'

const app = createApp(App)

app.use(router)
    .use(blogStore)
    .use(ZiggyVue, Ziggy)

app.mount('#app')
