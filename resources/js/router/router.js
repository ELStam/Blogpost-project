import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import ProfileComponent from "@/components/ProfileComponent.vue";
import LoginComponent from "@/components/auth/LoginComponent.vue";
import BlogDetailComponent from "@/components/blogs/BlogDetailComponent.vue";
import FollowingComponent from "@/components/FollowingComponent.vue";
import RegisterComponent from "@/components/auth/RegisterComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'Home'
    },
    {
        path: '/blogs/:id',
        name: 'BlogDetail',
        component: BlogDetailComponent,
        props: true
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
    },
    {
        path: '/following',
        component: FollowingComponent,
        name: 'Following'
    },
    {
        path: '/register',
        component: RegisterComponent,
        name: 'Register'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
