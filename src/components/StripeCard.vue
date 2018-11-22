<template>
<div>
    <div ref="card"></div>
    &nbsp;
    &nbsp;
    <button class="buttonBigGreen" v-on:click="stripeTokenHandler()">PURCHASE</button>
    &nbsp;
    &nbsp;
</div>
</template>

<script>
import Customer from '@/models/user';
import OrderRequest from '@/models/orderRequest';
import axios from 'axios';

let stripe = Stripe(`pk_test_JVE5LDQpybJXr3glv3wM5Jim`),
    elements = stripe.elements(),
    card = undefined;

let style = {
  base: {
    border: '1px solid #D8D8D8',
    borderRadius: '4px',
    color: "#000",
  },

  invalid: {
    // All of the error styles go inside of here.
  }

};

export default {
  mounted: function () {
    card = elements.create('card', style);
    card.mount(this.$refs.card);
  },
  methods: {
      purchase() {
        let self = this;

        stripe.createToken(card).then(function(result) {
            if (result.error) {
                self.hasCardErrors = true;
                self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                return;
            } else {
                // pass the card to the server
                this.stripeTokenHandler(result.token);
            }

        });
    },
    stripeTokenHandler(token) {
        let productIds = [];
        
        this.$store.cart.forEach(product => {
            productIds.push(product.ProductId);
        });
        // we will send what we need to the server based on this object
        let orderRequest = new OrderRequest({
            userId: 1,
            products: localStorage.getItem('cart'),
            subtotal: this.$store.state.subtotal, 
            tax: this.$store.state.tax, 
            gratuity: this.$store.state.gratuity,
            total: this.$store.state.total,
            token: "1825925"
        });
    }
  }
};
</script>
