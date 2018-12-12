<template>
<div>
    <div ref="card"></div>
    &nbsp;
    &nbsp;
    <button class="buttonBigGreen" v-on:click="purchase()">PURCHASE</button>
    &nbsp;
    &nbsp;
</div>
</template>

<script>
import Customer from '@/models/customer';
import OrderRequest from '@/models/orderRequest';
import axios from 'axios';

let stripe = Stripe('pk_test_JVE5LDQpybJXr3glv3wM5Jim'),
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
    card = elements.create('card', style, {
        hidePostalCode: true
    });
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
                console.log(result.token);
                self.stripeTokenHandler(result.token);
            }

        });
    },
    stripeTokenHandler(stripeToken) {
        let completedPayment = false;

        let productIds = []; 
        let orderId = 0;
        const orderTotal = (parseFloat(this.$store.state.total) * 100).toFixed(0);

        for (let i = 0; i < this.$store.state.cart.length; i++) {
            const prod = this.$store.state.cart[i];
            productIds.push(prod.productId);
        }

        let requestBody = {
            total: orderTotal,
            token: stripeToken.id
        }

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        axios.post('https://mayfieldgolfapi.azurewebsites.net/api/OrderRequests/Post', requestBody, config)
        .then(response => {

            return axios({
                method: 'post',
                url: 'https://mayfieldgolfapi.azurewebsites.net/api/Orders/',
                data : {
                    CustId: 3,
                    OrderStatus: 1
                }
            }).then(orderResponse => { 
                return axios({
                    method: 'post',
                    url: 'https://mayfieldgolfapi.azurewebsites.net/api/Invoices',
                    data : {
                        UserId: 3,
                        OrderId: orderResponse.OrderId,
                        PaymentStatus: "Completed",
                        DateCreated: new Date(),
                        TotalBeforeTax: this.$store.state.subtotal,
                        Tax: this.$store.state.tax,
                        Fees: this.$store.state.gratuity,
                        TotalAfterTax: orderTotal,
                        EstimatedTime: this.$store.state.estimatedTime
                    }
                }).then(invoiceResponse => {
                    for (let i = 0; i < productIds.length; i++) {
                        axios({
                            method: 'post',
                            url: 'https://mayfieldgolfapi.azurewebsites.net/api/OrderItems',
                            data : {
                                OrderId : invoiceResponse.orderId,
                                ProductId : productIds[i]
                            }
                        }).catch(error => { alert(error)}); 
                    }
                    const orderToBeCompleted =  {
                        userId : this.$store.state.customer.id,
                        products : this.$store.state.cart,
                        subtotal : this.$store.state.subtotal, 
                        tax : this.$store.state.tax, 
                        gratuity : this.$store.state.gratuity,
                        total : this.$store.state.subtotal + this.$store.state.tax + this.$store.state.gratuity,
                        orderId : invoiceResponse.orderId
                    };
                    this.$store.commit('setOrder', orderToBeCompleted);
                    this.$store.state.cart = [];
                    this.$store.state.pricesArray = [];
                    this.$store.state.openOrders = [];
                    this.$store.state.cartCounter = 0;
                    this.$store.state.estimatedTime = 0;
                    this.$store.state.subtotal = 0.00;
                    this.$store.state.tax = 0.00;
                    this.$store.state.gratuity = 0.00;
                    this.$store.state.total = 0.00;
                    localStorage.removeItem("cart");
                    localStorage.removeItem("subtotal");
                    this.$router.replace('/');
                }).catch(error => alert(error));
            }).catch(error => alert(error));
        }).catch(error => {
            alert(error);
        });

        /*
        axios.post('https://mayfieldgolfapi.azurewebsites.net/api/Invoices', this.invoiceRequestBody, config).then(response => {
            return response;
        }).catch(error => {
            alert(error);
        });

        axios.post('https://mayfieldgolfapi.azurewebsites.net/api/OrderItems', this.orderItemsRequestBody, config).then( response => {
            // reset values
            this.$store.state.cart = [];
            this.$store.state.pricesArray = [];
            this.$store.state.openOrders = [];
            this.$store.state.cartCounter = 0;
            this.$store.state.estimatedTime = 0;
            this.$store.state.subtotal = 0.00;
            this.$store.state.tax = 0.00;
            this.$store.state.gratuity = 0.00;
            this.$store.state.total = 0.00;
            this.$router.replace('/');
        }).catch(error => {
            alert(error);
        }); */
        
    }
  }
};
</script>
