<template>
  <div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row orderCart">
      <div class="col s12 orderCard">
        <div class="row">
          <div class="col s4">
            <p class="productName">Hamburger</p>
          </div>
          <div class="col s4">
            <p class="productPrice">$10.00</p>
          </div>
          <div class="col s4">
            <p>QTY</p>
          </div>
        </div>
      </div>
      <div class="col s12 orderCard">
        <div class="row">
          <div class="col s4">
            <p class="productName">Hamburger</p>
          </div>
          <div class="col s4">
            <p class="productPrice">$10.00</p>
          </div>
          <div class="col s4">
            <p>QTY</p>
          </div>
        </div>
      </div>
      <div class="col s12 orderCard">
        <div class="row">
          <div class="col s4">
            <p class="productName">Hamburger</p>
          </div>
          <div class="col s4">
            <p class="productPrice">$10.00</p>
          </div>
          <div class="col s4">
            <p>QTY</p>
          </div>
        </div>
      </div>
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
      </div>
    </div>
</template>

<script>
  export default {
    data(){
      return {
        name:'Cart',
        cartItems: []
      }
    }
  }
</script>

<!-- Extra style -->
<style>
</style>