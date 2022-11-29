import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: "Register",
    component: () => import('../views/RegisterVue.vue')
  },
  {
    path: '/resetPass',
    name: "Reset",
    component: () => import('../views/ForgotPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === "/login" & auth.currentUser){
    next("/")
    return;
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next("/login")
    return;
  }

  next();
})

router.beforeEach((to, from, next) => {
  if(to.path === "/register" & auth.currentUser){
    next("/")
    return;
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next("/register")
    return;
  }

  next();
})


export default router
