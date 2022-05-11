import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import '@/assets/css/reset.css'
import '@/assets/css/ui.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.mixin(mixins)
app.mount('#app')
