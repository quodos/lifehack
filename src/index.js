/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import LifeHack from './components/life-hack';
import store from './store/store';
import styles from './scss/styles.scss';

// Yay! Routes FTW.
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes.routes,
});

// Initialize the app
const App = new Vue({
  el: '#app',
  router,
  store,
  name: 'App',
  render: h => h(LifeHack),
});
