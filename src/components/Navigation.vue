<template>
  <div class="header">
    <div class="row masthead">
      <div class="col s8">
        <img src="../assets/mayfield_logo.jpeg" alt="The Felice Brothers" style="width:50%;">
      </div>
      <div class="col s4 cart">
        <router-link to="/cart"><h2 class="cartlabel" style="font-size: 16px;">My Order</h2>
        <!-- 
          We need to check items and constantly update this
        -->
        <h2 class="items">{{ cartCounter }}</h2></router-link>
      </div>
    </div>
    <nav>
      <!-- Add a settings link if the user is logged in or not -->
      <router-link class="nav-link" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`" :params="routes.text" exact>{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      links: [
        {
            id: 0,
            text: 'Home',
            page:'/'
        },
        {
            id: 1,
            text: 'Food',
            page: 'food'
        },
        {
            id: 2,
            text: 'Drink',
            page: '/drink'
        }
      ],
    } 
  },
  computed: {
    cartCounter() {
      return this.$store.state.cartCounter;
    }
  }
}
</script>