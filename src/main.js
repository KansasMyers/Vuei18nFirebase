import Vue from 'vue'
import App from './App.vue'

import router from './router'
import i18n from './i18n'

import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
let config = {
  apiKey: "AIzaSyDMO3CStH77gjauHJOoBhLBc8YfkAHS-lc",
  authDomain: "vueawsome.firebaseapp.com",
  databaseURL: "https://vueawsome.firebaseio.com",
  projectId: "vueawsome",
  storageBucket: "",
  messagingSenderId: "716128025168"
}
firebase.initializeApp(config)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')