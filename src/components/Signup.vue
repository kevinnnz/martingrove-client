<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1>Sign-Up</h1>
    </div>
  </div>

  <div class="row">
    <div class="col s12 loginCard">
      <flash-message ></flash-message>
      &nbsp;
      &nbsp;
      <fieldset>
        <input id="email" type="text" name="email" ref="email" required>
        <label for="email">Email</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="password" type="password" name="password" ref="password" required>
        <label for="password">Password</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="confirmpassword" type="password" name="confirmpassword" ref="confpassword" required>
        <label for="confirmpassword">Confirm Password</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="firstname" type="text" name="firstname" ref="firstname" required>
        <label for="firstname">First Name</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="lastname" type="text" name="lastname" ref="lastname" required>
        <label for="lastname">Last Name</label>
        <div class="after"></div>
      </fieldset>
      <fieldset>
        <input id="phonenumber" type="text" name="phonenumber" ref="phonenumber" required>
        <label for="phonenumber">Phone Number</label>
        <div class="after"></div>
      </fieldset>
      <button type="button" class="buttonBigGreen" v-on:click="signUpUser">SIGN-UP</button>
      <h4 style="text-align:center;" v-on:click="showLogin"><em>Or Login...</em></h4>
    </div>
  </div>

</div>
</template>

<script>
import authenticationservice from '@/services/authenticationservice';
import Firebase,{ auth } from "firebase";
import Customer from '@/models/customer';
import axios from "axios";
require('vue-flash-message/dist/vue-flash-message.min.css');


export default {
  data () {
    return { 
      name: 'Home',
    }
  },
  methods : {
    signUpUser: function() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;
      const confpassword = this.$refs.confpassword.value;
      const firstname = this.$refs.firstname.value;
      const lastname = this.$refs.lastname.value;
      const phonenumber = this.$refs.phonenumber.value.toString();
      const uid = "";

      let emptyFields = authenticationservice.validateSignUp(email, password, confpassword, firstname, lastname, phonenumber);
      if(emptyFields.length != 0) {
        for (let i = 0; i < emptyFields.length; i++) {
          const error = emptyFields[i];
          this.flash(error, "error"); 
        }
        return;
      }
      
      if(!authenticationservice.validateEmail(email)) {
        //TODO: Proper alert!!
        return this.flash("Not a valid email", "error");
      }

      if(!authenticationservice.validatePasswords(password, confpassword)) {
        //TODO: proper alert!!
        return this.flash("Password's do not match", "error");
      }

      Firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
        return axios({
                    method: 'Post',
                    url: 'https://mayfieldgolfapi.azurewebsites.net/api/CustAccounts',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data : {
                      FirstName : firstname, 
                      LastName : lastname, 
                      Token : response.uid,
                      PhoneNumber : phonenumber,
                    }
        }).then(response => {
          // set store
          return this.$store.commit('setCustomer', response);
        }).catch(error => {
          this.flash(error.message, "error");
        })
      }).catch(error => {
        this.flash(error.message, "error");
      });
      
      // go home..
      // this.$router.replace('/');
    }, 
    showLogin() {
      this.$router.replace('/login');
    }
  }
}

</script>

<!-- Extra style -->
<style>
</style>