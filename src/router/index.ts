import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import About from '../views/About.vue';
import Search from "../views/Search.vue";
import AProject from "../views/AProject.vue";
// Define routes with proper TypeScript annotations
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Search',
        component: Search,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
    path: '/project/:id',
    name: 'Project',
        component: AProject,
        props: true,
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;