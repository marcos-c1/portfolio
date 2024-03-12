import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.isEnglish = false 
app.config.globalProperties.isExpanded = false 

app.use(router)

app.mount('#app')
