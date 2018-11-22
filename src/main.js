// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './store';
import VueFlashMessage from 'vue-flash-message';
import Firebase from 'firebase';
import { routes } from './router';

// firebase config settings (change these for production)
const config = {
  apiKey: "AIzaSyAChrFd_ZmR_H4_x1Jkzxc8R1mY7Jcbis0",
  authDomain: "martingrove-359bb.firebaseapp.com",
  databaseURL: "https://martingrove-359bb.firebaseio.com",
  projectId: "martingrove-359bb",
  storageBucket: "martingrove-359bb.appspot.com",
  messagingSenderId: "451321816496"
};

// initilaze firebase
Firebase.initializeApp(config);

Vue.use(VueFlashMessage);
Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active'
});

// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in
/*
router.beforeEach((to, from, next) => {
  const currentUser = Firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next('/sign-in');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
}); */


/* eslint-disable no-new */
Firebase.auth().onAuthStateChanged(function (user) {
  new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App },
    render: h => h(App)
  });
});