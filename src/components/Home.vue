<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1 v-if="customer">Welcome, {{ customer }}</h1>
      <h1 v-else>Welcome, Guest</h1>
      <h2 v-if="nostorage">WARNING: Your browser is out of date and won't be compatable with this application.</h2>
    </div>
  </div>
  <div class="row" v-if="token">
    <div class="col s12" v-if="openOrder">
      <!-- 
        Order: Clicking on the order should take to you to the order history.
      -->
      <h2> Open Orders: </h2>
      <h3> {{ orderNumber }} </h3>
    </div>
    <div class="col s12" v-else>
      <h2> You have no open orders at the moment </h2>
    </div>
    <div class="col s6" v-if="!token">
        <button type="button" class="buttonOutline">LOGIN</button>
      </div>
      <div class="col s6" v-if="!token">
        <button type="button" class="buttonBigGreen">SIGN-UP</button>
      </div>
   
  </div>
  <div class="row" v-else>
    <!-- 
      If the user is not logged in lets presents a welcoming message with either
      sign-up or login.
    -->
    <div class="col s12">
      <h2>Welcome to Mayfeild Golf Mobile Ordering</h2>
    </div>
    <div class="col s6">
        <button type="button" class="buttonOutline">LOGIN</button>
      </div>
      <div class="col s6">
        <button type="button" class="buttonBigGreen">SIGN-UP</button>
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
        customer: '',
        token: true,
        openOrder: [{orderNumber: 123}]
      }
    },
    created() {
      // checking to make sure user is logged in or not
      this.checkStorage();
      this.getCustomerFromLocalStorage();
    },
    methods: {
      checkStorage(){
        if(localStorage){
          return this.checkStorage = false;
        }
        this.storage = true;
      },
      getCustomerFromLocalStorage() {
          if(localStorage.getItem('customer')) {
            this.customer = localStorage.customer;
          }
      },
      getTokenFromCookie() {
        // store the user token into a cookie
        // get that cookie and store it as a boolean?
      },
    }
  }

</script>

<!-- Extra style -->
<style>
</style>