<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{name:'AddPaymentForm', 
    params: {
      section: 'AddPayment',
      category: 'Food'}, 
      query: {value:200}}"
      >Food 200</router-link>
      <router-link :to="{name:'AddPaymentForm', 
    params: {
      section: 'AddPayment',
      category: 'Transport'}, 
      query: {value:200}}"
      >Transport 200</router-link>
      <router-link :to="{name:'AddPaymentForm', 
    params: {
      section: 'AddPayment',
      category: 'Entertainment'}, 
      query: {value:200}}"
      >Entertainment 200</router-link>
  </div>
</template>


<script> 

export default {
    name:"AboutView",
}
</script>