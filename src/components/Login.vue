<template>
  <div>
    <h1>Login</h1>
      Email: <input type="text" v-model="input.username" name="username"><br>
      Password: <input type="password" v-model="input.password" name="password"><br>
      <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
import authenticationservice from '@/services/authenticationservice'

  export default {
    name: 'Login', //this is the name of the component
    data() {
      return {
                input: {
                    username: "",
                    password: ""
                },
                loggedin: false
            }
    },
    methods: {
      login() {
        // call the authentication
        authenticationservice.login().then(response => {
          this.loggedin = response;
        });
      }
    }
        
  }
</script>

<!-- Extra style -->
<style>
</style>