<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1 v-if="this.$store.state.customer">Welcome, {{ this.$store.state.customer }}</h1>
      <h1 v-else>Mayfield Golf Course Mobile Ordering</h1>
      <h2 v-if="nostorage">WARNING: Your browser is out of date and won't be compatable with this application.</h2>
    </div>
  </div>
  <div class="row" v-if="this.$store.state.customer">
    <div class="col s12 productCard" v-if="this.ordersArr && this.ordersArr.length">
      <h3> {{ orderNumber }} </h3>
      <p v-for="order of this.ordersArr" v-bind:key="order.product.productId"> 
        {{ order.products.productName }} 
      </p>
      <p>{{ order.total }}</p>
    </div>
    <div class="col s12 productCard" v-else>
      <h2> You have no open orders at the moment. </h2>
    </div> 
  </div>
  <div class="row" v-else>
    <div class="col s12 productCard welcomeCard">
      <img src="../assets/ZE-Imagesplash_X.png" style="visibility: hidden; z-index: 0;" />
      <div class="row">
        <div class="col s6">
          <button type="button" class="buttonOutline" v-on:click="goToLogin">Login</button>
        </div>
        <div class="col s6">
          <button type="button" class="buttonBigGreen" v-on:click="goToSignUp">Sign-Up</button>
        </div>
      </div>
    </div>
  </div>
  
  
</div>
</template>

<script>
// import apiservices from '@/services/apiservices';

  export default {
    name: 'Home',
    data () {
      return {
        nostorage: false,
        customer: this.$store.state.customer,
        ordersArr: []
      }
    },
    created() {
      this.checkStorage();
      if( this.$store.state.ordersArray.length >= 0 ) {
        this.ordersArr = this.$store.state.ordersArray.reverse();
      }
    },
    methods: {
      checkStorage(){
        if(localStorage){
          return this.checkStorage = false;
        }
        this.storage = true;
      },
      goToSignUp() {
        this.$router.replace('/signup'); 
      }, 
      goToLogin() {
        this.$router.replace('/login');
      },
    }
  }

</script>

<!-- Extra style -->
<style>
</style>