import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
library.add(faTwitter, faFacebookF, faYoutube, faPinterest, faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
