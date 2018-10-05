<template>
<div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row" v-if="pFood && pFood.length">
      <div class="col s12 productCard" v-for="product of pFood" v-bind:key="product.ProductId">
        <div class="row" v-if="product.ProductId">
            <div class="col s6">
              <h2 class="productTitle">{{ product.ProductName }}</h2>
              <p>${{ product.ProductPrice }}</p>
              <button type="button" class="buttonGreen" v-bind:prodId="product.ProductId" v-bind:prodName="product.ProductName" v-bind:prodPrice="product.ProductPrice" v-on:click="addToCart($event)">Add to Cart</button>
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
import axios from "axios";
import { forEach } from "async";

export default {
  data() {
    return {
      name: "Food",
      products: [],
      productFoods: [],
      pFood: [],
      errors: []
    };
  },
  // Fetches posts when the component is created.
  created() {
    var self = this;
    axios.all([]).then(function() {
      self.getProductFoods();
      self.getProducts();
    });
  },
  methods: {
    getProductFoods: function() {
      axios
        .get(`https://mayfieldgolf.azurewebsites.net/api/productfoods`)
        .then(response => {
          this.productFoods = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    getProducts: function() {
      axios
        .get(`https://mayfieldgolf.azurewebsites.net/api/products`)
        .then(response => {
          this.products = response.data;
          this.deleteDrinks(this.products, this.productFoods);
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    deleteDrinks(array, array2) {
      for (let index = 0; index < array.length; index++) {
        for (let index2 = 0; index2 < array2.length; index2++) {
          if (array[index].ProductId == array2[index2].ProductId) {
            this.pFood.push(array[index]);
            //this.products.splice(index,1);
            //onsole.log(index + " " + index2);
          }
        }
      }
    },
    addToCart(e) {
      var product = {}
      product.productId = e.toElement.attributes.prodId.value;
      product.productName = e.toElement.attributes.prodName.value;
      product.prodPrice = e.toElement.attributes.prodPrice.value;
      product.prodQty = 1;

      if (localStorage && localStorage.getItem('cart')){
          // if the user is not logged in we'll keep their cart safe in local storage
          let cart = JSON.parse(localStorage.getItem('cart'));
          for (let index = 0; index < cart.length; index++) {
            if(cart[index].productId == product.productId) {
              cart[index].prodQty = cart[index].prodQty + 1;
              localStorage.setItem("cart", JSON.stringify(cart));
              alert(product.productName + " added to cart!");
              return;
            }
          }
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(product.productName + " added to cart!");
      } else {
        let cart = [];
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart));
        alert(product.productName + " added to cart!");
      }
  }
}};
</script>