<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1>Login</h1>
    </div>
  </div>

  <div class="row">
    <div class="col s12 loginCard">
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
      <button type="button" class="buttonBigGreen" v-on:click="signInUser">LOGIN</button>
      <h4 style="text-align:center;"><em>Or Sign-Up...</em></h4>
    </div>
  </div>

</div>
</template>

<script>
import authenticationservice from '@/services/authenticationservice';
import Firebase from "firebase";

export default {
  name: 'Home',
  data () {
  },
  methods : {
    signInUser: function() {
      const email = this.$refs.email.value;
      const password = this.$refs.password.value;

      if(!authenticationservice.validatePasswords(password, confpassword)) {
        //TODO: proper alert!!
        return alert("Password's do not match");
      }

      if(!authenticationservice.validateEmail(email)) {
        //TODO: Proper alert!!
        return alert("Not a valid email");
      }

      Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
          user => {
            this.$router.replace('/');
          },
          error => {
            alert(error.message);
          }
      );

    }
  }
}

</script>

<!-- Extra style -->
<style>
</style>