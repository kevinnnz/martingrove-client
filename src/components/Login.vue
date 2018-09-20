<template>
  <div>
    <h1>Login</h1>
      Email: <input type="text" v-model="input.username" name="username"><br>
      Password: <input type="password" v-model="input.password" name="password"><br>
      <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs' ;

  export default {
    name: 'Login', //this is the name of the component
    data() {
      return {
                input: {
                    username: "",
                    password: ""
                }
            }
    },
    methods: {
      login() {
        if(this.input.username != "" && this.input.password != "") {
          const data = qs.stringify({ 
            grant_type: 'password',            
            user: this.input.username, 
            password: this.input.password
          });

          const endpoint = "www.api.com\token";

          const headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          };

          axios.post(endpoint, data, headers).then(function(response){
            localStorage.setItem("access_token", response.access_token);
            localStorage.setItem("user", response.userName);
          });
        }
      }
    }
  }
</script>

<!-- Extra style -->
<style>
</style>