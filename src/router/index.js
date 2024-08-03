import { createRouter, createWebHistory } from 'vue-router'
import contact from '../views/contactus.vue'
import Index from '@/views/Index.vue'
import Notpage from '@/views/Notpage.vue'
import About from '@/views/About.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact',
      name: 'contact us',
      component: contact
    },
    {
      path:'/',
      name:'home',
      component: Index
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
      path:'/:catchAll(.*)',
      name:'notpage',
      component: Notpage
    }
  ]
})

export default router
