import axios from "axios";

let errors = [];
let products = [];
let productFoods = [];
let food = [];
let drink = [];

function getProducts() { 
    axios
        .get(`https://mayfieldgolf.azurewebsites.net/api/products`)
        .then(response => {
            products = response.data;
          deleteDrinks(products, productFoods);
        })
        .catch(e => {
          errors.push(e);
        });
}

function getProductFoods() {
    axios
        .get(`https://mayfieldgolf.azurewebsites.net/api/productfoods`)
        .then(response => {
          this.productFoods = response.data;
        })
        .catch(e => {
          this.errors.push(e);
        });
}

function deleteDrinks(array, array2) {
    for (let index = 0; index < array.length; index++) {
      for (let index2 = 0; index2 < array2.length; index2++) {
        if (array[index].ProductId == array2[index2].ProductId) {
          this.pFood.push(array[index]);
        }
      }
    }
}

export default {
    food,
    drink,
    getProducts,
    getProductFoods,
}