<template>
<div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row" v-if="this.products && this.products.length">
      <div class="col s12 productCard" v-for="product of this.products" v-bind:key="product.ProductId">
        <div class="row">
            <div class="col s6">
              <h2 class="productTitle">{{ product.ProductName }}</h2>
              <p>${{ product.ProductPrice }}</p>
              <button type="button" class="buttonGreen" v-bind:prodId="product.ProductId" v-bind:prodName="product.ProductName" v-bind:prodPrice="product.ProductPrice" v-on:click="addToCart($event)">Add to Cart</button>
            </div>
            <div class="col s6">
              <p>{{ product.ProductDescription }}</p>
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
//import axios from "axios";
//import { forEach } from "async";
import apiservices from '@/services/apiservices';
import Product from '@/models/product';

export default {
  data() {
    return {
      name: this.$route.query.menu,
      id: this.$route.params.id,
      products: [],
      errors: []
    };
  },
  created() {
    //this returns a promise
    apiservices.getProducts().then(response =>{
      var tempProducts = response.data;
      for (let i = 0; i < tempProducts.length; i++) {
        const element = tempProducts[i];
        if(element.MenuId == this.id && element.ProductIsAvailble == true) {
          this.products.push(element);
        } 
      }
    }).catch(error =>{
      // alerting an error went wrong
      this.errors = error;
    });
  },
  methods: {
    addToCart(e) {
      // adding product to cart
      let productId = e.toElement.attributes.prodId.value;
      let productName = e.toElement.attributes.prodName.value;
      let productPrice = e.toElement.attributes.prodPrice.value;
      let productQty = 1;
      let product = new Product(productId, productName, productPrice, productQty);
      this.$store.dispatch('assembleCart', product);
      // display success message! You did it!!
    }
  }
}
</script>