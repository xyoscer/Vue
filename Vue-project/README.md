# vue-project

> 易用，灵活，高效（虚拟dom）操作模型data,而不直接操作DOM

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev  开发环境启动

# build for production with minification
npm run build 生产环境，打包压缩文件

- 压缩应用代码
- 使用vue.js指南，删除警告

# build for production and view the bundle analyzer report
npm run build --report 
```
##`vue项目开始
  - vue-cli构建vue项目
  
        npm  install -g vue-cli
        
        vue init webpack my-project
        
        cd my-project
        
        npm install
        
        npm run dev
        
  - vue自动生成的目录
  
  |---Vue-project
  
     |---build                    webpack相关的代码
         |---build.js             生产环境结构代码
         |---check-version.js     检查node.npm等版本
         |---dev-client.js        热加载相关代码
         |---dev-server.js        本地服务器
         |---util.js              构建工具
         |---vue-loader.config.js
         |---webpack.base.conf.js   webpack基本配置
         |---webpack.dev.conf.js    webpack开发环境配置
         |---webpack.prod.conf.js   webpack生产环境配置
     |---config                     项目开发环境配置
         |---dev.env.js             开发环境变量
         |---index.js              项目基本配置
         |---prod.env.js            生产环境变量
     |---dist                       build生成的生产环境下的项目
     |---node_modulse               
     |---src                       项目源代码目录
         |---components            组件目录
         |---assets                vue默认的logo文件
         |---App.vue               默认组件，入口文件
         |---main.js               程序入口文件，引用，加载各种组件
     |---static                    静态文件目录，比如css,图片，等
     |---.babelrc                  ES6语法编译配置
     |---.editorconfig             项目的编码规范
     |---.eslintignore
     |---.eslintrc.js
     |---.gitignore              git上传中需要忽略的文件
     |---.postcssrc.js
     |---index.html                入口文件
     |---package.json              项目的基本信息
     |---package-lock.json
     |---README.md
     
        

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
  - 每一个.vue文件就是一个组件，组件和组件的相互组合就构成一个应用
  - 在vue中，在一个组件中import引入另一个组件，这个组件就是父组件，被引入的组件就是
     子组件。
  - 父子组件之间的通信，在子组件中增加一个props，他是一个数组，专门用来接收父组件传递
    过来的数据，数组中定义的变量和父组件中定义的元素属性对应
  - 子组件向父组件传递数据需要自定义事件，在父组件上监听这个事件，就可以知道子组件向他传递的数据了
  - 兄弟组件，就需要状态管理，vuex
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
  
  ## 问题
  
  （1）使用vue监听不存在的变量，vm.set
   (2) 使用$http.get('../')获得本地数据，数据应该放在static目录下
