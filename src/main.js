import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vconsole from "vconsole";
import 'lib-flexible/flexible.js'
 
new vconsole();

const app = createApp(App)
 
app.use(router)
 
app.mount('#app')
