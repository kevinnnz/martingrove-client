<template>
  <div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row orderCart" v-if="products && products.length">
      <div class="col s12 orderCard" v-for="product of products" v-bind:key="product.product">
        <div class="row">
          <div class="col s4">
            <p class="productName">{{ product.productName }}</p>
          </div>
          <div class="col s4">
            <p class="productPrice">{{ product.prodPrice }}</p>
          </div>
          <div class="col s4">
            <button type="button" class="qtyButton" v-bind:prodId="product.productId" v-on:click="plus($event)">+</button>
            <input class="qtyInput" type="number" name="quantity" min="0" :value="product.prodQty">
            <button type="button" class="qtyButton" v-bind:prodId="product.productId" v-on:click="minus($event)">-</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="background-color:rgb(255,255,255);" v-if="products && products.length">
      <div class="col s12 warningCard">
          <h3 style="text-align: center">Warning</h3>
          <p>You must be 19 years of age to purchase alcohol. Valid ID must be presented upon request. Failure to do so will result in a refund for the alcohol.</p>
          <form>
            <input type="checkbox" name="ofage" value="ofage"> I am 19 or older<br>
          </form>
      </div>
      <div class="col s6">
          <h3 style="font-size: 16px;">Est. Pick-up Time</h3>
          <h3>20 Minutes</h3>
      </div>
      <div class="col s6">
          <h3>Sub Total:</h3>
          <h3>$16.50</h3>
      </div>
      <div class="col s6">
        <button type="button" class="buttonOutline">ADD MORE</button>
      </div>
      <div class="col s6">
        <button type="button" class="buttonBigGreen">CHECKOUT</button>
      </div>
    </div>
     <div class="row ordercart" v-else>
      <div class="col s12">
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
        products: []
      }
    },
    created() {
      if(localStorage && localStorage.getItem('cart')) {
        this.products = JSON.parse(localStorage.getItem('cart'));
      }
    },
    methods: {
      // these modify QTY 
      plus(e) {
        let id = e.toElement.attributes.prodId.value;
        let cart = JSON.parse(localStorage.getItem('cart'));
          for (let index = 0; index < cart.length; index++) {
            if(cart[index].productId == id) {
              cart[index].prodQty = cart[index].prodQty + 1;
              localStorage.setItem("cart", JSON.stringify(cart));
              this.products = [];
              this.products = JSON.parse(localStorage.getItem('cart'));
            }
          }
      },
      minus(e) {
        let id = e.toElement.attributes.prodId.value;
        let cart = JSON.parse(localStorage.getItem('cart'));
          for (let index = 0; index < cart.length; index++) {
            if(cart[index].productId == id) {
              cart[index].prodQty = cart[index].prodQty - 1;

              if (cart[index].prodQty <= 0 ) {
                cart.splice(index);
              }
              localStorage.setItem("cart", JSON.stringify(cart));
              this.products = [];
              this.products = JSON.parse(localStorage.getItem('cart'));
            }
          }
      }
    }
  }
</script>

<!-- Extra style -->
<style>
</style>