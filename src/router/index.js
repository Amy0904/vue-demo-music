import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const UserCenter = () => import('component/user-center')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
