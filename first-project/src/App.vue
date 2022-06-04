<template>
  <div class="wrapper">
    <header>
      <div class="tittle">My personal costs</div>
    </header>
  
    <main>
      <AddPaymentForm />
      <PaymentDisplay :items="getPaymentsList" />
      <MyPagination :cur="cur" :length="12" :n="n" @changePage="changePage"/>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm'
import PaymentDisplay from './components/PaymentDisplay'
import MyPagination from './components/MyPagination'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'


export default {

  components: {
    PaymentDisplay,
    AddPaymentForm,
    MyPagination,
  },

  data() {
    return {
      cur: 1, 
      n: 3,
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

    // fetchData() {
    //   return [
    //     {
    //       date: '28.03.2020',
    //       category: 'Food',
    //       value: 169,
    //       },
    //       {
    //       date: '24.03.2020',
    //       category: 'Transport',
    //       value: 360,
    //       },
    //       {
    //       date: '24.03.2020',
    //       category: 'Food',
    //       value: 532,
    //       },
    //   ]
    // },

  addNewPayment (data) {
    this.paymentsList.push(data);
  },

  changePage(p) {
    this.cur = p;
    this.$store.dispatch('fetchData', p);
  }

},

  created() {
    // this.paymentsList = this.fetchData();
    // this.updatePayments(this.fetchData())
    this.$store.dispatch('fetchData', this.cur)
  },
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
