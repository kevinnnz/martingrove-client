<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: {
    'Navigation': Navigation,
    'Footer': Footer
  },
  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  },
  created(){
    if(localStorage && localStorage.getItem('cart')) {
      this.$store.state.cart = JSON.parse(localStorage.cart);
      this.$store.commit('calculateQtyCounter');
    }
    this.setUser();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: -20px;
}
</style>
