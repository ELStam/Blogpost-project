import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import LoginComponent from "@/components/auth/LoginComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'Home'
    },

    {
        path: '/login',
        component: LoginComponent,
        name: 'Login'

    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
