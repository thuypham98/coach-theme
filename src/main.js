import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import routes from "./routes";

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
