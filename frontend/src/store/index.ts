import { defineStore } from 'pinia'
export interface RouterInfo {
  path: string
  fullWidth: any
  icon: any
  title: any
}

export const storeRouter = defineStore('storeRouter', {
  state: () =>  {
    return {
      path: '',
      fullWidth: false,
      icon: '',
      title: ''
    }
  },
  getters: {},
  actions: {
    setRouterInfo(value: RouterInfo) {
      this.path = value.path
      this.fullWidth = value.fullWidth
      this.icon = value.icon
      this.title = value.title
    },
  },
  // persist: {
  //   //数据持久化
  //   enabled: true
  // }
})
