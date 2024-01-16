import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElmentPlus from 'element-plus'
// import './style.css'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import router from '@/route'
import registerComp from '@/components/component'
import '@/plugin/chart'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElmentPlus)
app.use(registerComp)
app.use(router)
app.mount('#app')
