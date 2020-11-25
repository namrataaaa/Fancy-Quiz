import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'

Vue.use(SlimDialog)

Vue.use(BootstrapVue) 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
