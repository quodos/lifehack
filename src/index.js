/* eslint-disable no-unused-vars */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import LifeHack from './components/life-hack';
import styles from './scss/styles.scss';

// Yay! Routes FTW.
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes.routes,
});

Vue.mixin({
  methods: {
    _veryUsefulMethod() {
      console.log('I am a global mixin. I should be used across the app.');
    },
  },
});

const App = new Vue({
  el: '#app',
  router,
  name: 'App',
  render: h => h(LifeHack),
  methods: {
    _someMethodYouWant() {
      console.log('Any method that you want to have!');
    },
  },
  created() {
    console.log('App created....');
  },
});
