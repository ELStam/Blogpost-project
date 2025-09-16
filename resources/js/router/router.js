import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '@/components/HomeComponent.vue';
import UserListComponent from '@/components/UserListComponent.vue';
import ProfielComponent from "@/components/ProfielComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'Home'
    },
    {
        path: '/users',
        component: UserListComponent,
        name: 'UserList'
    },
    {
        path: '/profiel',
        component: ProfielComponent,
        name: 'Profiel'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
