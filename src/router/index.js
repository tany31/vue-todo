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
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: () => import('../components/Post.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('../views/Todo.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
