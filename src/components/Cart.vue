<template>
  <div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row orderCart" v-if="products && products.length">
      <div class="col s12 orderCard" v-for="(product, index) in products" v-bind:key="product.product">
        <div class="row">
          <div class="col s8">
            <p class="productName">{{ product.productName }}</p>
          </div>
          <div class="col s2">
            <p class="productPrice">${{ product.productPrice }}</p>
          </div>
          <div class="col s2">
            <p v-on:click="removeProduct($event)" v-bind:index="index">x</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="background-color:rgb(255,255,255);" v-if="products && products.length">
      <!-- 
      <div class="col s12 warningCard">
          <h3 style="text-align: center">Warning</h3>
          <p>You must be 19 years of age to purchase alcohol. Valid ID must be presented upon request. Failure to do so will result in a refund for the alcohol.</p>
          <form>
            <input type="checkbox" name="ofage" value="ofage"> I am 19 or older<br>
          </form>
      </div> 
      -->
      <div class="col s6">
          <h3 style="font-size: 16px;">Est. Pick-up Time</h3>
          <h3>{{ pickupTime }} minutes</h3>
      </div>
      <div class="col s6">
          <h3>Sub Total:</h3>
          <h3>${{ calculateSubtotal }}</h3>
      </div>
      <div class="col s6">
        <button type="button" class="buttonOutline">ADD MORE</button>
      </div>
      <div class="col s6">
        <button type="button" class="buttonBigGreen" v-on:click="goToCheckout">CHECKOUT</button>
      </div>
    </div>
     <div class="row ordercart" v-else>
      <div class="col s12 productCard">
        <h2><em>There are no products in your cart..</em></h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'Cart',
        products: this.$store.getters.cart,
        pricesArray: [],
      }
    },
    computed: {
        pickupTime() {
          return 10;
          //return this.$store.state.estimatedTime;
        },
        calculateSubtotal()  {
          return this.pricesArray.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr))
        }
    },
    created() {
      // setting up prices array
      this.products.forEach(product => {
        this.pricesArray.push(product.productPrice);
      });
    },
    methods: {
      removeProduct(e) {
        let index = e.toElement.attributes.index.value;
        this.products.splice(index, 1);
        this.pricesArray.splice(index, 1);
        this.$store.commit('removeProductFromCart', index);
        this.$store.commit('calculateQtyCounter');
        this.$store.dispatch('writeCartToLocalStorage');

        // display a confirmation message
      },
      goToCheckout() {
        this.$store.state.subtotal = this.calculateSubtotal;
        this.$store.state.tax = parseFloat((this.$store.state.subtotal * 0.13).toFixed(2));
        this.$store.state.gratuity = parseFloat((this.$store.state.subtotal * 0.15).toFixed(2))
        this.$store.state.total = this.$store.state.subtotal + this.$store.state.tax + this.$store.state.gratuity;
        this.$router.push('Checkout');
      }
    }
  }
</script>

<!-- Extra style -->
<style>
</style>