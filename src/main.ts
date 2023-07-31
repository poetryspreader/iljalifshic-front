import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faUserSecret,
    faPlay,
    faPause,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
    faUserSecret,
    faPlay,
    faPause,
    faChevronLeft,
    faChevronRight
)

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './pages/App.vue'
import router from './router'

createApp(App)
    .use(createPinia())
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
