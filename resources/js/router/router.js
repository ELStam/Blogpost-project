import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import ProfielComponent from "@/components/ProfileComponent.vue";
import LoginComponent from "@/components/auth/LoginComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'Home'
    },
    {
        path: '/profile',
        component: ProfileComponent,
        name: 'Profile'
    },
    {
        path: '/login',
        component: LoginComponent,
        name: 'Login'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
