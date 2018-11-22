<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1 v-if="customer">Welcome, {{ customer.firstname }}</h1>
      <h1 v-else>Welcome guest!</h1>
      <h2 v-if="nostorage">WARNING: Your browser is out of date and won't be compatable with this application.</h2>
    </div>
  </div>
  <div class="row" v-if="token">
    <div class="col s12 productCard" v-if="openOrder">
      <h2> Open Orders: </h2>
      <h3> {{ orderNumber }} </h3>
    </div>
    <div class="col s12 productCard" v-else>
      <h2> You have no open orders at the moment. </h2>
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
      }
    },
    created() {
    },
    methods: {
      checkStorage(){
        if(localStorage){
          return this.checkStorage = false;
        }
        this.storage = true;
      }
    }
  }

</script>

<!-- Extra style -->
<style>
</style>