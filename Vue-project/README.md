# vue-project

> 易用，灵活，高效（虚拟dom）操作模型data,而不直接操作DOM

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 从.vue到页面
*.vue -> webpack -> *.html,*.js(new Vue({})),*.css
## 数据渲染  
-  v-text, v-html,{{}}，
-  v-modal
-  v-if,v-show,
-  v-for循环渲染列表
-  v-on:click事件绑定 <=>@click
-  v-bind属性操作，url class操作 对象，数组，<=>：class 
-  过滤器，computed属性


## vue实例 new Vue

- data 代表vue对象的数据
- methods 代表vue对象的方法
- watch 设置对象监听的方法

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
  ## vue-Resource与后台数据交互 axios
  
    就像jQuery里的$.ajax，用来和后台交互数据。
  ## 过滤器/计算属性
  
  
  ## 问题
  
  （1）使用vue监听不存在的变量，vm.set
   (2) 使用$http.get('../')获得本地数据，数据应该放在static目录下
