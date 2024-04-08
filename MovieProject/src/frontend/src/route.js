import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/LoginPage.vue'
import SignUp from './pages/SignUp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            redirect: '/login'
        },
        { 
            path: '/login',
            name: 'login-router',
            component: Login 
        },
        { 
            path: '/signup',
            name: 'signup-router',
            component: SignUp 
        }
    ]
});

export default router;

