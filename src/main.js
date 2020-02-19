import Vue from 'vue'
import App from './App.vue'
import router from './router'
import facstclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
facstclick.attach(document.body)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')