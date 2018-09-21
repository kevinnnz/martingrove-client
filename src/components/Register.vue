<template>
<div class="body">

  <div class="col-sm-4" v-if="!subbmitted">
    <form>
      <h3>Register</h3>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="text" v-model="userAccount.email"/><!-- adding .lazy will change any {{field}} data related to load in after change not as input is entered  -->
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" type="password" v-model="userAccount.password"/>
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input class="form-control" type="password" v-model="userAccount.cpassword"/>
      </div>
      <div class="form-group">
        <button v-on:click.prevent="postin" class="btn btn-default">in</button>
      </div>
    </form>
  </div>
<div class="col-sm-4" v-if="subbmitted"> 
      <div class="form-group">
        <button v-on:click.prevent="postout" class="btn btn-default">out</button>
      </div>
  </div>
  <!--
  <div class="col-sm-4">
    <form data-bind="submit: register">
      <h3>Register</h3>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="text" data-bind="value: registerEmail"/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" type="password" data-bind="value: registerPassword"/>
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input class="form-control" type="password" data-bind="value: registerPassword2" />
      </div>
      <div class="form-group">
        <button v-on:click.prevent="post" class="btn btn-default">Register</button>
      </div>
    </form>
  </div>
  -->
</div>
</template>

<script>
import axios from "axios";
import auth from "../Shared/SharedGlobalResources.js";

export default {
  data() {
    return {
      userAccount: {
        email: "",
        password: "",
        cpassword: ""
      },
      subbmitted: false
    };
  },
  name: "Register", //this is the name of the component
  methods: {
    postin: function() {
      axios({
        method: "post",
        url: "https://martingrove-api.azurewebsites.net/api/Account/Register",
        data: {
          Email: this.userAccount.email,
          Password: this.userAccount.password,
          ConfirmPassword: this.userAccount.cpassword
        }
      })
        .then(function(data) {
          console.log(data);
          this.subbmitted = true;
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    postout: function() {
      this.subbmitted = false;
    }
  }
};
</script>


<!-- Extra style -->
<style>
</style>