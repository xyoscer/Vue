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

# build for production and view the bundle analyzer report
npm run build --report 
```
##`vue项目开始
  - vue-cli构建vue项目
  
        npm  install -g vue-cli  // 全局安装vue-cli
        
        vue init webpack my-project // 初始化一个webpack全功能包的vue项目
        
        cd my-project   // 切换到当前的项目目录
        
        npm install    // 安装所有依赖的包
        
        npm run dev   // 本地启动
        
  - vue自动生成的目录介绍
  
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
     
  - 本项目目录介绍
  
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
           |---module                 多页面模块目录
              |--- about             地址选项目录
                  |---about.html
                  |---about.js
                  |---address.vue
              |--- index             购物车页面目录
                  |---index.html
                  |---main.js
                  |---App.vue
       |---static                    静态文件目录，比如css,图片，等
       |---.babelrc                  ES6语法编译配置
       |---.editorconfig             项目的编码规范
       |---.eslintignore
       |---.eslintrc.js
       |---.gitignore              git上传中需要忽略的文件
       |---.postcssrc.js
       |---package.json              项目的基本信息
       |---package-lock.json
       |---README.md
       
## Vue基本的思想

- MVVM框架

     一个模型对应一个界面，界面的状态和显示的内容完全取决于它对应的模型。
- 双向数据绑定

  数据劫持: vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持
  各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
  
  - 实现一个数据监听器Observer,对数据对象的所有属性进行监听，有变动的新值并通过更新函数
  - 实现一个指令解析器Compile,对每个元素节点的指令进行扫描和解析
  - 实现一个Watcher,作为连接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知
## 动态数据绑定分析
 > 给定一个对象，如何监听其属性的读取与变化？
  
  - 首先,当对象的某个属性变化时，要触发自定义的回调函数
  
       使用Object.defineProperty()来监听属性的变动，
  - 第二，对象是一个深层次的结构，使用递归
  
## webpack整理

> webpack 打包模块化的js工具，通过loader转转文件，通过plugin扩展功能。
- webpack的几大模块

     -  entry   
   
     -  chunk
   
     -  loader: 处理单一文件的输入与输出,进行各类资源转换，将其转换为js模块，style-loader/css-loader/less-loader
   
     -  plungin：插件的实体
   
- webpack构建流程

    - 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生成最后的配置结果，
  options作为最后返回结果， 
    - 注册所有配置的插件，让插件监听webpack构建生命周期的事件节点，以做出对应的处理，
  Compiler(),Run(),run一旦运行，就开始进行编译和构建、
  
     **几个重要的webpck事件节点**
       
          （1）compiler 开始编译
          （2）make从入口点分析模块及其依赖的模块，创建这些模块对象
          （3）build-module 构建模块
          （4）after-compiler 完成构建
          （5）seal 封装构建结果
          （6）emit  把各个chunk输出到结果文件
          （7）after-emit 完成输出
          
    - 从配置的entry入口文件开始解析文件，构建AST语法树，找出每个节点所依赖的文件，递归下去
   
    - 在解析文件递归过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换
   
    - 递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk
   
    - 输出所有chunk到文件系统
  

