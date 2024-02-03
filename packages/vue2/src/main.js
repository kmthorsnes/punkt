import Vue from 'vue';

import App from './App.vue';
import router from './router';

// import global styles
import './main.scss';

// set global variables
// Vue.prototype.$pktSvgPathOverride = 'https://punkt-cdn.oslo.kommune.no/latest/logos/';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
