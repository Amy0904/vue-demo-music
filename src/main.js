import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import 'core-js/modules/es6.promise'
import 'core-js/modules/es6.array.iterator'

import 'common/stylus/index.styl'

Vue.use(VueLazyLoad, {
  loading: './common/image/default.png'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
