import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import { store } from './store/store.js'
import moment from 'moment/dist/moment'
import id from 'moment/dist/locale/id'

moment.locale('id',id)


const app = createApp(App)

app.config.globalProperties.$filters = {
    timeAgo(date) {
        return moment(date).fromNow()
    }
}

app
.use(router)
.use(store)
.mount('#app')
