import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import router from './router'

// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).use(ElementPlus).use(router).mount('#app')
