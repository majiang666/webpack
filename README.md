# webpack
webpack demo

## 插件说明：

@babel/core babel核心库   
@babel/plugin-proposal-decorators 装饰器转换  
@babel/plugin-transform-arrow-functions 箭头函数转换  
@babel/plugin-transform-classes 类转换  
https://www.babeljs.cn/docs/plugins  

@babel/preset-env 直接转换es6、es5等所有属性  
@babel/plugin-transform-runtime   
https://www.cnblogs.com/ldq678/p/10448374.html  
 
@babel/polyfill 转换es6的方法兼容低版本浏览器（比如promise等）  
@babel/runtime 解决全局变量污染的问题  
@babel/runtime-corejs2 解决全局变量污染的问题  
https://www.cnblogs.com/sea-breeze/p/10490672.html  

cross-env 设置development和production环境来处理不同的逻辑  
https://www.jianshu.com/p/75b429e2c84b  

clean-webpack-plugin 打包前先清空  
html-webpack-plugin 自动处理把js和css等替换到html文件  
mini-css-extract-plugin 抽离css成单独文件，引入   
webpack-dev-server 启动webpack的本地服务  


style-loader css-loader  less-loader less（样式的执行顺序从有向左）  



