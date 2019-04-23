import Vue from 'vue'
import App from './App.vue'
import User from "./components/User";
import Test from "./components/Test";


import VueResource from "vue-resource";
Vue.use(VueResource);

import VueRouer from "vue-router";
Vue.use(VueRouer);

const router = new VueRouer({
  mode: "history",
  base : "__dirname",
  routes : [
    {
      path : "/",
      component : User
    },
    {
      path : "/test",
      component : Test
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')