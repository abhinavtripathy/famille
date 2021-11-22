import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AddFamily',
    name: 'Add Family Members',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddFamily.vue')
  }, 
  {
    path: '/DailyQuiz',
    name: 'Daily Check In',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DailyQuiz.vue')
  }, 
  {
    path: '/ViewFamily',
    name: 'See My Family',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    beforeEnter() {location.href = 'http://localhost:3000/index.html'}
    // component: () => import(/* webpackChunkName: "about" */ '../views/AddFamily.vue')
  },
  {
    path: '/AddMemories',
    name: 'Add Family Memories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddMemories.vue')
  }, 
  {
    path: '/ViewMemories',
    name: 'View My Memories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Memories.vue')
  }, 

]

const router = new VueRouter({
  routes
})

export default router
