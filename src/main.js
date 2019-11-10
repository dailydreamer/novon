import Vue from 'vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
