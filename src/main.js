import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/database';

import VModal from 'vue-js-modal'
import { VueMasonryPlugin } from 'vue-masonry'
Vue.use(VueMasonryPlugin)
Vue.use(VModal, { dialog: true })


import { library } from '@fortawesome/fontawesome-svg-core'
import { faStickyNote,faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStickyNote,faPlusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyAiwHGPhKg0S_Yz6tr6OC-ncGxfLMWp6jk',
  authDomain: '',
  databaseURL: '',
  projectId: 'strawberry-jam-note',
  storageBucket: '',
  messagingSenderId: ''
}

firebase.initializeApp(config)

export const db = firebase.firestore()


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
