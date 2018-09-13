<template>
  <div class="header">
    <div class="row masthead">
      <div class="col s8">
        <h1>Martin Grove Golf Course</h1>
      </div>
      <div class="col s4 cart">
        <h2 class="cartlabel" style="font-size: 16px;">My Order</h2>
        <h2 class="items">0</h2>
      </div>
    </div>
    <nav>
      <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`" class="nav-link">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
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
            page: '/food'
        },
        {
            id: 2,
            text: 'Drink',
            page: '/drink'
        }
      ]
    }
  }
}
</script>