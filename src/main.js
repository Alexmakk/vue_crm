import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: 'AIzaSyAYSeRwnXO8zr9cLpCKQI6japGdZgbQIX0',
  authDomain: 'vue-crm-c39c5.firebaseapp.com',
  databaseURL: 'https://vue-crm-c39c5.firebaseio.com',
  projectId: 'vue-crm-c39c5',
  storageBucket: 'vue-crm-c39c5.appspot.com',
  messagingSenderId: '936678869295',
  appId: '1:936678869295:web:4ff3baa667c82f4b5fb9da',
  measurementId: 'G-3YPLMMBE0Y'
});

/* let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
}); */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');