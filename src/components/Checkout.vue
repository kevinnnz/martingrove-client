<template>
  <div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col s12 productCard">
          <br />
        <div class="row"> 
            <div class="col s6" style="text-align:center;">Subtotal:</div> 
            <div class="col s6" style="text-align:center;">${{ this.$store.state.subtotal }}</div>
            <br />
            <div class="col s6" style="text-align:center;">Tax: </div>
            <div class="col s6" style="text-align:center;">${{ this.$store.state.tax }}</div>
            <div class="col s6" style="text-align:center;">Gratuity: </div>
            <div class="col s6" style="text-align:center;">${{ this.$store.state.gratuity }}</div>
            <div class="col s12" style="text-align:center;"><h2 class="sub">Total:</h2></div>
            <div class="col s12" style="text-align:center;"><h2>${{ this.$store.state.total }}</h2></div>
        </div>  

        <h2>Payment</h2>
        <StripeCard></StripeCard>
      </div>
    </div>
  </div>
</template>

<script>
import StripeCard from '../components/StripeCard';

  export default {
    data(){
      return {
        name:'Checkout',
      }
    },
    components: {
        'StripeCard': StripeCard,
    }
  }
</script>

<!-- Extra style -->
<style>
</style>