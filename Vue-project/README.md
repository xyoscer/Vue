## 从.vue到页面
*.vue -> webpack -> *.html,*.js(new Vue({})),*.css
## 数据渲染  
-  v-text, v-html,{{}}，

      
        在插值法只能，可以处理一些简单的js表达式，也可以使用过滤器，也可以多过滤器
-  v-modal

     
       表单的双向绑定使用v-model
       <textarea></textarea>的插值并不会生效，应该使用v-model来代替
-  v-if,v-show

       
       v-show的元素会始终渲染并保持在DOM中，v-if的会被移除DOM
       v-if有更高的切换消耗，v-show有更高的初始渲染消耗
       频繁切换使用v-show较好，运行时，条件不太可能改变使用v-if较好
-  v-for循环渲染列表

       
       v-for结合计算属性或者methods时可以做数据的过滤和排序
-  v-on:click事件绑定 <=>@click


      click既想传递参数又想传递事件对象，那么需要手动传入$event参数
      常用事件修饰符：
      v-on:click.stop 阻止事件冒泡
      v-on:submit.prevent 提交事件不再重载页面
      v-on:click.self
      v-on:click.once
-  v-bind属性操作，url class操作 对象，数组，<=>：class 

    
    为标签的属性赋值，要使用v-bind指令，v-bind绑定的属性必须是data属性里面定义的值
    ，如果想写固定的值加单引号。v-bind指令中不能使用过滤器，要实现过滤器的效果，在v-bind
    中使用计算属性
-  过滤器，computed属性
     
     
     计算属性出现是为了解决插值法中过多的逻辑操作，也是使用{{计算属性名}}
    
      计算属性与方法的区别：计算属性的依赖没有发生变化，当再次调用计算属性的时候，
      能够立即返回上次缓存的计算值，而不需要从新执行计算属性的方法，但是方法需要重新执行方法体
      
 - slot 
 
        使得子组件里面的数据可以通过作用域插槽用在父组件页面中的指定区域内


## vue实例 new Vue

- data 代表vue对象的数据
- methods 代表vue对象的方法
- watch 设置对象监听的方法
- 每个实例都实现了事件接口，
  （1）$on(eventName) 监听事件
  （2）$emit(eventName) 触发事件

Vue对象里的设置通过html指令进行关联
  
```
new Vue({
   data: {
     a:1,
     b:[]
     },
    methods: {
      dofun:function() {
         this.a++;
      }
    },
    watch: {
       'a': function(val,oldVal) {
          console.log(val,oldVal)
     }
    }
    
    })
  ```
  ## 组件
  - 每一个.vue文件就是一个组件，组件和组件的相互组合就构成一个应用
  - 在vue中，在一个组件中import引入另一个组件，这个组件就是父组件，被引入的组件就是
     子组件。
  - 父子组件之间的通信，在子组件中增加一个props，他是一个数组，专门用来接收父组件传递
    过来的数据，数组中定义的变量和父组件中定义的元素属性对应，v-model
  - 子组件向父组件传递数据需要自定义事件，在父组件上监听这个事件，就可以知道子组件向他传递的数据了
     子组件使用$emit(eventName)来触发事件，父组件在使用子组件的地方使用v-on来监听子组件触发的事件 
  - 兄弟组件，就需要状态管理，vuex 
   pros, bus ,slot 
   
  ### prop
    是单向绑定的，从父组件传递给子组件，子组件内部不能改变prop,
   ## 递归组件
   
   - name属性
   - 
   ## $nextTick
     
       等组件渲染完，才执行的操作，写在nextTick中
  - 全局注册
  
       Vue.component('my-component',{
           template: '<div></div>'
       })
       
  - 局部注册
  
       var child = {
         template: ''
       }
       在 使用时components : {child}引入组件
       
  ## vue-Resource与后台数据交互 axios
  
    就像jQuery里的$.ajax，用来和后台交互数据。
  ## 过滤器/计算属性
  ## vue 单文件 .vue
   - 包含html,js css，实现了对一个组件的封装
   
      <template></template> 默认是.html,每一个.vue文件最多一个它
      <script></script> 默认语言是js,最多一个，脚本必须导出vue.js对象
      <style></style> 默认是css，一个文件可以包含多个，可以有scoped和module属性
      
   - css中style<style>中使用 scoped表示该css样式只适用于该组件，没有则是所有组件，通过PostCSS转换
   
       css作用域
       
       css模块
       
       PostCSS  vue-loader处理css输出，都是通过PostCSS进行作用域重写
   - script中export default = {} 的对象就是new Vue()构造函数中接受的参数，在.vue组件中
     data要是一个函数，返回一个对象，供组件使用
     
 ## 购物车组件
 
    主组件
      引入组件: (1) 使用import 组件名 from './'
              (2) 在主组件内注册子组件 compoents:{引入进来的组件名}
             （3) 在模板中使用组件
    弹窗组件
    分页组件
    点击小图放大图组件
    
 ## vue的实例详解和生命周期
 ## vue路由
 ##
 ## 改造webpack实现vue的多页面效果
 
   多页面，就是webpack有多个入口文件
 - util.js进行改造
 
          添加一个getEntries，
  
  ## 问题
  
  （1）使用vue监听不存在的变量，vm.set
   (2) 使用$http.get('../')获得本地数据，数据应该放在static目录下


   ## 测试 demo
