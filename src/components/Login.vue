<template>
<div class="body">
  <div class="col-sm-4" v-if="!submitted">
       <form class="login" @submit.prevent="postin">
     <h1>Log in</h1>
     <label>User name</label>
     <input required v-model="userAccount.username" type="text" placeholder="Email"/>
     <label>Password</label>
     <input required v-model="userAccount.password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
  </div>
<div class="col-sm-4" v-if="submitted"> 
      <div class="form-group">
        <button v-on:click.prevent="postout" class="btn btn-default">out</button>
      </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import auth from "../Shared/SharedGlobalResources.js";

export default {
  data() {
      
    return {
      userAccount: {
        username: "",
        password: ""
      },
      errors: [],
      submitted: false,
      tokenKey: ""
    }
  },
  methods: {
    postin: function() {
      axios({
        method: "post",
        url: "https://martingrove-api.azurewebsites.net/token",
        contentType: "application/raw",
        data: "username="+ this.userAccount.username +"&password="+this.userAccount.password+"&grant_type=password"
      }).then(
        (response) => {
          this.tokenKey = response.data.access_token;
          this.submitted = true;
          auth.token = this.tokenKey;
          console.log(auth.token);
          });
    },
    postout: function() {
      this.submitted = false;
    }
  }
};
</script>
<!-- Extra style -->
<style>
</style>