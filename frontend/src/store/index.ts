import { defineStore } from 'pinia'
import * as Pinia from "pinia";
export const pinia = Pinia.createPinia();
export const States = defineStore("States", {
  state: () => {
    return {
      settings: {
        saveDir: "/download",
        hostName: "hostname",
        ip: "127.0.0.1",
        port: 12,
      },
    };
  },
  getters: {
    // getIp() {
    //   return this.settings.ip
    // }
  },
  actions: {
    // updateSettings(value: string) {
    //   this.settings = value
    // }
  },
});