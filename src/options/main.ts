import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@unocss/reset/normalize.css'
import 'virtual:uno.css'

import App from './App.vue'
import router from '~/router'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app');