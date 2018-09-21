<template>
  <div class="row">
    <div class="col s12"> 
        <h2>{{ user }}</h2>
    </div>
    <div class="col s6">
      <p> Hello, world </p>
    </div>
    <div class="col s6"> 
      <p>What's going on?</p>
    </div>
  </div>
</template>

<script
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome!'
      }
    }
  }

</script>
