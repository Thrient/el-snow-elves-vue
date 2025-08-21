import './assets/main.css'
import 'virtual:uno.css'

import {createApp} from 'vue'
import {store} from "@/stores";

import App from './App.vue'
import router from './router'

import mitt from 'mitt'

const mittImpl = mitt()
const app = createApp(App)

window.$mitt = mittImpl
app.config.globalProperties.$mitt = mittImpl

app.use(store)
app.use(router)


app.mount('#app')

