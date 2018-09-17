<template>
  <div class="row">
    <div class="col s12 titlecard">
      <h1>Drink</h1>
    </div>
    <p>Here is some information. This is the food page</p>
  </div>
</template>

<script>
  export default {
    name: 'Drink', //this is the name of the component
    data() {
      return {
        drinks: [],
        subMenu: [
          {
            id: 1,
            text: 'Soft Drinks',
            page:'/drinks/softdrinks'
          },
          {
            id: 2,
            text: 'Alcohol',
            page: '/drinks/alchol'
          },
          {
            id: 3,
            text: 'Coffee & Tea',
            page: '/drinks/coffeeandtes'
          }
        ]
      }
    }
  }
</script>

<!-- Extra styling that's used for this view only -->
<style>
</style>