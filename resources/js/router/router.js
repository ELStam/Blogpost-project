import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import ProfileComponent from "@/components/ProfileComponent.vue";
import LoginComponent from "@/components/auth/LoginComponent.vue";
import BlogDetailComponent from "@/components/blogs/BlogDetailComponent.vue";
import FollowingComponent from "@/components/FollowingComponent.vue";
import Cookies from "js-cookie";
import RegisterComponent from "@/components/auth/RegisterComponent.vue";
import CreateBlogComponent from "@/components/blogs/CreateBlogComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'Home',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/blogs/:id',
        name: 'BlogDetail',
        component: BlogDetailComponent,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/profile',
        component: ProfileComponent,
        name: 'Profile',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: LoginComponent,
        name: 'Login'
    },
    {
        path: '/register',
        component: RegisterComponent,
        name: 'Register'
    },
    {
        path: '/following',
        component: FollowingComponent,
        name: 'Following',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/blogs/create',
        name: 'BlogCreate',
        component: CreateBlogComponent,
        props: route => ({
            title: route.query.title || ''
        }),
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!Cookies.get('auth_token')) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;
