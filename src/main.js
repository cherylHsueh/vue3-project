import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// [ CSS Entry ]
// import './scss/main.scss'
import './assets/css/tailwind.css'

// [ Plugins ]
import dayjs from './plugins/day'

const app = createApp(App)

app.use(dayjs)
app.use(router)
app.mount('#app')
