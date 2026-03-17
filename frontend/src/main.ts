import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(createHead())
app.mount('#app')
