import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'
import { BootstrapVue3 } from 'bootstrap-vue-3'

// Bootstrap CSS y JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// BootstrapVue 3
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')