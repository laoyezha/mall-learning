import { createApp } from 'vue'
import App from './App.vue'

// router
import router from './router'
// store
import store from './store'
//element ui
import element3 from './plugins/elementUI'

// custom style
import './style/index.scss'

createApp(App)
    .use(router)
    .use(store)
    .use(element3)
    .mount('#app')
