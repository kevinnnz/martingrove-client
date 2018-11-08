import axios from 'axios';

export default {
    // getting products from the database
    getProducts() {
        return axios.get("https://mayfieldgolfapi.azurewebsites.net/api/products");
    },
    // getting categories from the database
    getMenus(){
        return axios.get("http://mayfieldgolfapi.azurewebsites.net/api/menus");
    },
    getOpenOrder() {
        return axios.get("openOrder");
    }
}