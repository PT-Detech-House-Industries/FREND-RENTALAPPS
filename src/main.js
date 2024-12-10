import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes/index'
import store from './store/index' // Import store Vuex

// Impor file CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Impor file JavaScript Bootstrap (optional, jika Anda membutuhkan komponen JS seperti modal atau dropdown)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

// Use the plugin
Vue.use(ElementUI, {
  locale
});

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
