import {createApp} from 'vue'
import App from '@/App.vue'
import 'virtual:svg-icons-register'
import { pinia } from './store/index'
import router from './router/'
createApp(App).use(router).use(pinia).mount('#app')
