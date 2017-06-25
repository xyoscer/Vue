// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建一个vue实例，传入的参数包括：数据，模板，挂载元素，方法，生命周期钩子
new Vue({
  el: '#app', // vue模型监听的模型范围
  template: '<App/>', // 一个字符串模板作为Vue实例的标识使用,模板将会替换挂载的元素
  components: { App }
})
