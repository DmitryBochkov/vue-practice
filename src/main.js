import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import BuyModal from './components/shared/BuyModal.vue'
import './styles/main.styl'
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  // theme: { primary: "#7986CB", secondary: "#AD1457", accent: "#9c27b0", error: "#f44336", warning: "#ffeb3b", info: "#2196f3", success: "#4caf50" }
})

Vue.component('app-buy-modal', BuyModal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var config = {
      apiKey: 'AIzaSyD8fZvol2B_8AH24jjoczMq758mIsRtji4',
      authDomain: 'wfm-vue-ads-project.firebaseapp.com',
      databaseURL: 'https://wfm-vue-ads-project.firebaseio.com',
      projectId: 'wfm-vue-ads-project',
      storageBucket: 'wfm-vue-ads-project.appspot.com',
      messagingSenderId: '181649940747'
    }

    fb.initializeApp(config)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
