//Homepage
import Home from '../components/Home';
import Cart from '../components/Cart';
import Food from '../components/Food';
import Drink from '../components/Drink';
import FoodMenu from '../components/FoodMenu';
import Checkout from '../components/Checkout';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Logout from '../components/Logout';

export const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/:menu',
      name: 'Menu',
      component: FoodMenu,
      props: true,
    },
  ];
