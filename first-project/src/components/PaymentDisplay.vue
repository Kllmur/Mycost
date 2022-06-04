<template>
    <div class="paymentDisplay"> 
        <div> Total cost = {{ getFPV }} </div>
    {{ items }}
    </div>
</template>

<script>
export default {
    name: "PaymentDisplay",
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    },

    computed: {
        getFPV () {
            return this.$store.getters.getFullPaymentValue
        }
    },
}
</script>

<style lang="scss" module>
</style>