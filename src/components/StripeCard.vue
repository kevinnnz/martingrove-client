<template>
<div>
    <div ref="card"></div>
    &nbsp;
    &nbsp;
    <button class="buttonBigGreen" v-on:click="purchase">PURCHASE</button>
</div>
</template>

<script>
let stripe = Stripe(`pk_test_JVE5LDQpybJXr3glv3wM5Jim`),
    elements = stripe.elements(),
    card = undefined;

export default {
  mounted: function () {
    card = elements.create('card');
    card.mount(this.$refs.card);
  },

  purchase: function () {
        let self = this;

        stripe.createToken(card).then(function(result) {
            if (result.error) {
            self.hasCardErrors = true;
            self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
            return;
            }

        });
    }
};
</script>
