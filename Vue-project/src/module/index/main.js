// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false
// 定义一个路由，每一个路由映射一个组件
const routes = [{
  path: '/',
  component: App
  // component: function (resolve) {
  //   require(['./App.vue'], resolve)
  // }
}, {
  path: '/about',
  component: function (resolve) {
    require(['../about/address.vue'], resolve)
  }
}]
// 创建router实例，传入routes的配置
const router = new VueRouter({routes})

// 创建一个vue实例，传入的参数包括：数据，模板，挂载元素，方法，生命周期钩子
// 创建和挂载根实例，通过router配置参数注入路由
new Vue({
  router: router,
  render: h => h(App) // 可以直接给绑定节点渲染一个vue组件
}).$mount('#app')  // 将vue实例挂载到#app,并给这个绑定的节点渲染一个App组件
