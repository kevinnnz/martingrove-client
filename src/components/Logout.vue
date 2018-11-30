<template>
<div>
  <div class="row">
    <div class="col s12 titlecard">
      <h1>{{ name }}</h1>
    </div>
  </div>

  <div class="row">
    <div class="col s12 loginCard">
     <h2>Logging out...</h2>
    </div>
  </div>

</div>
</template>

<script>
import authenticationservice from '@/services/authenticationservice';
import Firebase from "firebase";
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
      name: 'Logout'
    }
  },
  created() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    this.$router.replace('/');
  }).catch(function(error) {
    // An error happened
    alert(error);
  });

  }
}

</script>

<!-- Extra style -->
<style>
</style>