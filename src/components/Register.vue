<template>
  <div class="col-sm-4">
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
        <button v-on:click.prevent="post" class="btn btn-default">Register</button>
      </div>
    </form>
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
</template>

<script>
import axios from "axios";

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
    post: function() {
      axios({
        method: "post",
        url: "https://martingrove-api.azurewebsites.net/api/Account/Register",
        data: {
            Email: this.userAccount.email,
            Password: this.userAccount.password,
            ConfirmPassword: this.userAccount.cpassword
        }
      }).then(function(data) {
        console.log("This is the test");
        console.log(data.status);
        console.log(data);
        console.log("This is the test");
      });
    }

    /* TEST POST WORKS

        post: function() {
      axios({
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            title: this.userAccount.email,
            body: this.userAccount.password,
            userId: 1
        }
      }).then(function(data) {
        console.log("This is the test");
        console.log(data.status);
        console.log(data);
        console.log("This is the test");
      });
    }
    */
  }
};
</script>


<!-- Extra style -->
<style>
</style>