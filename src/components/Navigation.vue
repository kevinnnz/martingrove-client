<template>
  <div class="header">
    <div class="row masthead">
      <div class="col s8">
      <img src="../assets/Club_Logo-NoBG.png" class="logo"/>
      <!-- <h1>Martin Grove Golf Course</h1> -->
      </div>
      <div class="col s4 cart">
        <h2 class="cartlabel" style="font-size: 16px;">My Order</h2>
        <h2 class="items">0</h2>
      </div>
    </div>
      <nav class="navbar">
      <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`" class="nav-link">{{routes.text}}</router-link>
    </nav> 
    </div>
   <!-- <div>
  <header class="header">
      <nav class="inner">
        <img class="logo" src="../assets/Club_Logo-BG.png" alt="logo">
        <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`" class="nav-link">{{routes.text}}</router-link>
        <router-link v-for="routes in accountLinks" v-bind:key="routes.id" :to="`${routes.page}`" class="github"> {{routes.text}} </router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    </div> -->
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
            id: 0,
            text: 'Home',
            page:'/'
        },
        {
            id: 1,
            text: 'Food',
            page: '/food'
        },
        {
            id: 2,
            text: 'Drink',
            page: '/drink'
        }
      ],
      accountLinks: [
        {
            id: 3,
            text: 'Register',
            page: '/register'
        },
        {
            id: 4,
            text: 'Login',
            page: '/login'
        },
        {
            id: 5,
            text: 'Logout',
            page: '/logout'
        }]
    }
  }
}
</script>
