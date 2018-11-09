import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        pricesArray: [],
        cartCounter: 0,
        estimatedTime: 0,
        subtotal: 0.00,
        tax: 0.00,
        gratuity: 0.00,
        total: 0.00
    },
    getters: {
        cart: state => {
            return state.cart;
        }
    },
    actions: {
        writeCartToLocalStorage(){
            // save the cart to the local storage
            localStorage.setItem("cart", JSON.stringify(this.state.cart));
            localStorage.setItem("subtotal", JSON.stringify(this.state.subtotal));
        },
        assembleCart({dispatch, commit}, payload){
            var product = payload;
            commit('addProductToCart', product);
            commit('calculateQtyCounter');
            commit('setSubTotal');
            dispatch('writeCartToLocalStorage');
        },
        calculateTime(state, payload) { 
            // figure out a method for this.............
            if ( payload.ProductType == "Food" ) {
                return state.estimatedTime = 17 + state.estimatedTime;
            } else {
                return state.estimatedTime = 5 + state.estimatedTime;
            }
        }
    }, 
    mutations: {
        addProductToCart(state, payload) {
            state.cart.push(payload);
        },
        removeProductFromCart(state, payload) {
            state.cart.splice(payload, 0);
            this.dispatch('writeCartToLocalStorage');
        },
        calculateQtyCounter(state) {
            this.state.cartCounter = state.cart.length;
        },
        removeFromPriceArray(state, payload) {
            state.pricesArray.splice(payload, 1);
        }
    }
});
