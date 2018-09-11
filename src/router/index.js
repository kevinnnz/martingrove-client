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

//Drink sub Menu
import Alchol from '../components/Alchol';
import SoftDrinks from '../components/SoftDrinks';

Vue.use(Router);

export default new Router({
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
      path: '',
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
      path: '/drink/softdrinks',
      name: 'SoftDrinks',
      component: SoftDrinks,
    },
    {
      path: '/drink/alchol',
      name: 'Alchol',
      component: Alchol,
    }
  ],
});
