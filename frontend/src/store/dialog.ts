import { defineStore } from 'pinia'

export const storeDialog = defineStore('storeDialog', {
  state: () => {
    return {
      deviceId: '',
      ip: '',
    }
  },
  getters: {},
  actions: {
    setDialogInfo(value: any) {
      this.deviceId = value.deviceId
      this.ip = value.ip
    }
  }
  // persist: {
  //   //数据持久化
  //   enabled: true
  // }
})
