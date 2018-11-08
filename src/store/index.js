import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        cartCounter: 0,
        estimatedTime: 0,
        subTotal: 0.00
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
        },
        assembleCart({dispatch, commit}, payload){
            var product = payload;
            commit('addProductToCart', product);
            commit('calculateQtyCounter');
            dispatch('writeCartToLocalStorage');
            dispatch('calculateTotal');
        },
        calculateTotal() {
            for (let i = 0; i < this.state.cart.length; i++) {
                const element = this.state.cart[i];
                this.state.subTotal = element + this.state.subTotal;
                this.dispatch('calculateTime', element);
            }
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
        },
        calculateQtyCounter(state) {
            this.state.cartCounter = state.cart.length;
        },
    }
});
