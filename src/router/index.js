import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Portfolio from '../views/portfolio.vue'
import Contact from '../views/contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})

export default router