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
    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/LoginView.vue')
  },
  {
    path: '/register',
    name: "Register",
    component: () => import('../components/RegisterVue.vue')
  },
  {
    path: '/reset-password',
    name: "Reset",
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/',
    name: "loading",
    component: () => import('../components/splash-screen/SplashScreen.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === "/login" & auth.currentUser){
    next("/home")
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
    next("/home")
    return;
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
    next("/register")
    return;
  }

  next();
})


export default router
