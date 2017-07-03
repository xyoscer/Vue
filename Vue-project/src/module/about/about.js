// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Add from './address.vue'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [{
  path: '/',
  component: function (resolve) {
    require(['./address.vue'], resolve)
  }
}, {
  path: '/about',
  component: function (resolve) {
    require(['../../components/dialog.vue'], resolve)
  }
}]
const router = new VueRouter({routes})

/* eslint-disable no-new */
// 创建一个vue实例，传入的参数包括：数据，模板，挂载元素，方法，生命周期钩子
new Vue({
  router: router,
  render: h => h(Add)
}).$mount('#add')

