import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      countSum:0
    },mutations:{
      addNum(state,count){
        state.countSum+=count;
      }
    }

})


new Vue({
  render: h => h(App),
    store
}).$mount('#app')
