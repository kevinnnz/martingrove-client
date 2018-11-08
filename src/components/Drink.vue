<template>
<div>
    <div class="row">
      <div class="col s12 titlecard">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="row" v-if="this.menus && this.menus.length">
      <div class="col s12 productCard" v-for="menu of this.menus" v-bind:key="menu.MenuId">
        <div class="row">
            <div class="col s12">
              <h2 class="menuTitle"><router-link :to="{ name: 'Menu', query: { menu: menu.MenuName }, params: { id: menu.MenuId }}">{{ menu.MenuName }}</router-link></h2>
            </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="errors && errors.length">
      <div class="col s12 productCard" v-for="error of errors" v-bind:key="error">
        {{error.message}}
      </div>
    </div>
  </div>
</template>

<script>
import apiservices from '@/services/apiservices';

export default {
  data() {
    return {
      name: "Drink",
      type: "Drink",
      menus: [],
      errors: []
    };
  },
  created() {
    //console.log("Drinks says hello!");
    //this returns a promise
    apiservices.getMenus().then(response =>{
      var menuTemp = [];
      menuTemp = response.data;
      for (let i = 0; i < menuTemp.length; i++) {
        const element = menuTemp[i];
        if( element.MenuType == this.type ) {
          this.menus.push(element);
        }
      }
    }).catch(error =>{
      // alerting an error went wrong
      this.errors = error;
      alert(error);
    });
  }
}
</script>