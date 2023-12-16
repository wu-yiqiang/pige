import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { featureRouters } from './featureRouters'
import { storeRouter, RouterInfo } from '../store/index'
import pinia from '../store/pinia'
const store = storeRouter(pinia)
export const tabbar: Array<RouteRecordRaw> = featureRouters
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/History',
    children: tabbar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const routerParams: RouterInfo = {
    path: to.path,
    fullWidth: to.meta?.fullWidth,
    title: to.meta?.title,
    icon: to.meta?.icon
  }
  store.setRouterInfo(routerParams)
  next()
})


export default router
