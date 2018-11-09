import Vue from 'vue';
import Router from 'vue-router';

//Homepage
import Home from '../components/Home';

// Login and Register Flow
import Login from '../components/Login';
import Register from '../components/Register';

// User Cart
import Cart from '../components/Cart';

// Food and Drink menu
import Food from '../components/Food';
import Drink from '../components/Drink';

import FoodMenu from '../components/FoodMenu';
import Checkout from '../components/Checkout';


Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/food',
      name: 'Food',
      component: Food,
    },
    {
      path: '/drink',
      name: 'Drink',
      component: Drink,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/:menu',
      name: 'Menu',
      component: FoodMenu,
      props: true
    },
  ],
});
