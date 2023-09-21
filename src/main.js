import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes/index'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
