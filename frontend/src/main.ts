import {createApp} from 'vue'
import App from '@/App.vue'
import 'virtual:svg-icons-register'
import { pinia } from './store/index'
createApp(App).use(pinia).mount('#app')
