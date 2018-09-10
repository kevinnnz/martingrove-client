import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';

// Login and Register Flow
import Login from '@/components/Login';
import Register from '@/components/Register';

// User Cart
import Cart from '@/component/Cart';

// Food and Drink menu
import Food from '@/component/Drink';
import Drink from '@/component/Drink'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
    }
  ],
});
