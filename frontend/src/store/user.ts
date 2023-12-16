import { defineStore } from 'pinia'

export const storeUser = defineStore('storeUser', {
  state: () => ({
    ip: '127.0.0.1'
  }),
  getters: {},
  actions: {
    setIp(ip: string) {
      this.ip = ip
    }
  },
  // persist: {
  //   //数据持久化
  //   enabled: true
  // }
})
