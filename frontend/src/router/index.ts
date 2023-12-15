import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { featureRouters } from './featureRouters'
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


export default router
