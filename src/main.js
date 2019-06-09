import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from './store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
