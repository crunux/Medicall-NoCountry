import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */'../views/AboutView.vue'),
      meta: {
        requireAuth: false
      }
    },
    /// Auth
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */'../../src/modules/auth/views/LoginView.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */'../../src/modules/auth/views/RegisterView.vue'),
      meta: {
        requireAuth: false
      }
    },
    // Video Call
    {
      path: '/videocall',
      name: 'videocall',
      component: () => import(/* webpackChunkName: "videocall" */'../../src/modules/videocall/views/VideoCallView.vue'),
      meta: {
        requireAuth: true
      }
    },
    // Profile
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* */ '../../src/modules/profile/views/ProfileView.vue'),
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const isAuth = auth.token || localStorage.getItem('accessToken');
  if ((to.meta.requireAuth) && (!isAuth)) {
    next('login')
  } else {
    next()
  }
  //TODO
})

export default router
