import {createApp} from 'vue'
import App from '@/App.vue'
import 'virtual:svg-icons-register'
import router from './router/'
import pinia from './store/pinia'
createApp(App).use(pinia).use(router).mount('#app')
