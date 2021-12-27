import { createRouter, createWebHashHistory } from 'vue-router'
import Chara from '../views/Chara.vue'

const routes = [
  {
    path: '/',
    name: 'Chara',
    component: Chara
  },
  {
    path: '/story',
    name: 'Story',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Story.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
