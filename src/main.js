import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import './style.css'
import 'element-plus/dist/index.css'
import router from '@/route'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
