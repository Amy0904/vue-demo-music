import Vue from 'vue'
import Router from 'vue-router'

// const Recommend = () => import('src/components/recommend')
import Recommend from 'src/components/recommend'

Vue.use(Router)
const Disc = () => import('src/components/disc')
const UserCenter = () => import('src/components/user-center')
const Singer = () => import('src/components/singer')
const Rank = () => import('src/components/rank')
const Search = () => import('src/components/search')
const SingerDetail = () => import('src/components/singer-detail')
const TopList = () => import('src/components/top-list')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
