import { createApp } from 'vue'
import App from './App.vue'

// Importa el maneojo de las rutas
import router from './router'

import './assets/index.css'

// Crea una aplicación VUE
createApp(App).use(router).mount('#app')
