import { createMemoryHistory, createRouter } from 'vue-router'

import dashboardView from './components/Dashboard.vue'

const routes = [
    { path: '/', component: dashboardView }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
})

export default router

