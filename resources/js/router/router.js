import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import UserListComponent from '@/components/UserListComponent.vue';
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

    {
        path: '/users',
        component: UserListComponent,
        name: 'UserList'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
