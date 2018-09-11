<template>
  <div class="header">
    <h1>Martin Grove Golf Course</h1>
    <nav>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
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