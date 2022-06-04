<template>

    <div>

    <button @click="isHidden=!isHidden">ADD NEW COST</button>

    <div class="paymentForm" v-show="isHidden" > 

        <input placeholder="Date" v-model="date" />
        <select v-model="category" v-if="categoryList">
            <option v-for="(value, idx) in categoryList" :key="idx">{{ value }}</option>
        </select>
        <input placeholder="Value" v-model.number="value" />
        <button @click="onSaveClick">Save!</button>

    </div>

    </div>

</template>

<script>

export default {
    name:"AddPaymentForm",
    data() {
        return {
            date: '',
            category: '',
            value: '',
            isHidden: false,
        }
    },

    computed: {

        // getCurrentDate() {
        //     const today = new Date();
        //     const day = today.getDate();
        //     const month = today.getMonth() + 1;
        //     const year = today.getFullYear();
        //     return `${day}.${month}.${year}`;
        // },

        currentDate() {
            let data = new Date();
            const today = new Intl.DateTimeFormat("ru").format(data);
            return `${today}`;
        },

        categoryList() {
            return this.$store.getters.getCategoryList
        }
    },

    methods: {
        onSaveClick() {
            const data = {
                date: this.date || this.currentDate,
                category: this.category,
                value: this.value,
            }
            this.$store.commit('addDataToPaymentsList', data)
        }
    },

    created() {
        this.$store.dispatch('fetchCategoryList')
    }
}
</script>

<style lang="scss">

</style>