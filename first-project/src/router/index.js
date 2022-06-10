import Vue from 'vue'
import Router from 'vue-router'


import AboutView from '../view/about/AboutView.vue'
import HomeView from '../view/about/HomeView.vue'

Vue.use(Router)

const routes = [
    {
        path: "/",
        name:"Dashboard",
        component: HomeView
    },
    {
        path: "/about",
        name:"About",
        component: AboutView
    }
]

export default new Router({
    mode: "history",
    routes
})

