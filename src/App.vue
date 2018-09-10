<template>
  <div id="app">
    <h1>Welcome </h1>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Food from './components/Food.vue'
import Drink from './components/Drink.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    Cart
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
