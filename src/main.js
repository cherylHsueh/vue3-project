import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// import './scss/main.scss' // [ CSS 樣式入口 ]
import './assets/css/tailwind.css'

createApp(App).use(router).mount('#app')
