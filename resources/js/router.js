
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/fruits', component: () => import ('./components/Fruit/index.vue'),
        name: 'fruit.index',
    }
]
const router = createRouter({
    history: createWebHistory('/'),
    routes
})
export default router;
