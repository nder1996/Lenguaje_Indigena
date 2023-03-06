import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueSweetalert2 from 'vue-sweetalert2'
import VueRouter from 'vue-router'
import { Bar } from 'vue-chartjs'


Vue.config.productionTip = false

Vue.use(VueSweetalert2);
Vue.use(VueRouter)
Vue.use(Bar)

new Vue({
    router,
    store,
    vuetify,
    VueSweetalert2,
    VueRouter,
    Bar,
    render: h => h(App)
}).$mount('#app')