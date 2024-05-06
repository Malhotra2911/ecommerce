import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Order from './components/Order.vue'
import Product from './components/Product.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'Order',
        path: '/order',
        component: Order
    },
    {
        name: 'Product',
        path: '/product',
        component: Product
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth'
          };
        } else {
          return { top: 0 };
        }
      }
});

export default router;
