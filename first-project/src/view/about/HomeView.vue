<template>
  <div class="wrapper">
    <header>
      <div class="tittle">My personal costs</div>
    </header>
  
    <main>
      <AddPaymentForm />
      <PaymentDisplay :items="getPaymentsList" />
      <MyPagination :cur="cur" :length="getPaymentsList.length" :n="n" @changePage="changePage"/>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from '@/components/AddPaymentForm'
import PaymentDisplay from '@/components/PaymentDisplay'
import MyPagination from '@/components/MyPagination'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'



export default {

    name:"HomeView",
    components: {
        PaymentDisplay,
        AddPaymentForm,
        MyPagination,
    },

    data() {
        return {
        cur: 1, 
        n: 5,
        }
    },

    computed: {
        ...mapGetters([
        'getPaymentsList',
        ]),

        currentElements(){
        return this.getPaymentsList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
        }
    },

    methods: {
    ...mapMutations({
        updatePayments: 'setPaymentsListData',
    }),

    addNewPayment (data) {
        this.paymentsList.push(data);
    },

    changePage(p) {
        this.cur = p;
        this.$store.dispatch('fetchData', p);
    },

    created() {
        // this.paymentsList = this.fetchData();
        this.updatePayments('fetchData', this.cur)
        // this.$store.dispatch('fetchData', this.cur);
    },
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>