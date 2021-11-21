import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import LoadScript from 'vue-plugin-load-script';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import axios from 'axios';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.prototype.$http = axios;

Vue.config.productionTip = false
// Vue.use(LoadScript)
// Vue.LoadScript("https://balkangraph.com/js/latest/OrgChart.js");
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
