<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1 v-if="customer">Welcome, {{ customer }}</h1>
      <h1 v-else-if="newUser">Welcome!</h1>
      <h1 v-else-if="!newUser">Welcome back!</h1>
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

  <div class="row" v-else-if="newUser && !token">
    <div class="col s12 loginCard">
      &nbsp;
      &nbsp;
      <fieldset>
        <input id="first" type="text" name="first" required>
        <label for="first">First Name</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="last" type="text" name="last" required>
        <label for="last">Last Name</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="password" type="password" name="password" required>
        <label for="password">Password</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="confirmpassword" type="password" name="confirmpassword" required>
        <label for="confirmpassword">Confirm Password</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="email" type="text" name="email" required>
        <label for="email">Email</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="address" type="text" name="address" required>
        <label for="address">Address</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="city" type="text" name="address" required>
        <label for="city">City</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="province" type="text" name="province" required>
        <label for="province">Province</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="postalcode" type="text" name="postalcode" required>
        <label for="postalcode">Postal Code</label>
        <div class="after"></div>
      </fieldset>
      <button type="button" class="buttonBigGreen">SIGN-UP</button>
      <h4 style="text-align:center;" v-on:click="showLogin"><em>Or Login...</em></h4>
    </div>
  </div>

  <div class="row" v-else-if="!newUser && !token">
    <div class="col s12 loginCard">
      &nbsp;
      &nbsp;
      <fieldset>
        <input id="returningemail" type="email" name="returningemail" required>
        <label for="returningemail">Email</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="password" type="password" name="password" required>
        <label for="password">Password</label>
        <div class="after"></div>
      </fieldset>
      <button type="button" class="buttonBigGreen">LOGIN</button>
      <h4 style="text-align:center;" v-on:click="showSignUp"><em>Or Sign-up...</em></h4>
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
        customer: 'Kevin',
        token: true,
        newUser: true,
        openOrder: "",
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
      showLogin(){
        this.newUser = false;
      }, 
      showSignUp() { 
        this.newUser = true;
      }
    }
  }

</script>

<!-- Extra style -->
<style>
</style>