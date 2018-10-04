<template>
<div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row" v-if="products && products.length">
      <div class="col s12 productCard" v-for="product of products" v-bind:key="product.Product.ProductId">
        <div class="row">
            <div class="col s6">
              <h2 class="productTitle">{{ product.Product.ProductName }}</h2>
              <p>${{ product.Product.ProductPrice }}</p>
              <button type="button" class="buttonGreen" v-on:click="addToCart()">Add to Cart</button>
            </div>
            <div class="col s6">
              <!-- place holder for an image -->
            </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="errors && errors.length">
      <div class="col s12 productCard" v-for="error of errors" v-bind:key="error">
        {{error.message}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "Food",
      products: [],
      errors: []
    }
  },
  methods: {
    addToCart() {
      if (localStorage && localStorage.getItem('access_token')){
        // if the user is logged in we'll store their cart in the database

      } 
      else {
        if (localStorage && localStorage.getItem('cart')){
          // if the user is not logged in we'll keep their cart safe in local storage
          let cart = JSON.parse(localStorage.getItem(cart));
          var product = {}
          product.productId = "";
          product.productName = "";
          product.productPrice = "";
          product.productQuantity = "";

          cart.push(product);
          localStorage.setItem(JSON.stringify(cart));
      }

      }
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`https://mayfieldgolf.azurewebsites.net/api/products`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.products = response.data
    })
    .catch(e => {
      this.errors.push(e)
    });
  }
}
</script>
