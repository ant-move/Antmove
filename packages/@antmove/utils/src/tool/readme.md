# 小程序转换差异描述转换工具

* cd 到ant-move-utiles 
* 执行 npm link
* cd 到你要执行的项目中
* 执行 npm link ant-move-utils
* 在config目录新建index.js文件 并复制以下代码 ( 注:type参数需要手动配置，例: 微信转支付宝为'wechat-alipay' )   
   * 目前可供选择的为'wechat','alipay','toutiao','baidu'
```javascript
    const ComponentInfo = require('./componentsInfo');      
    const ApiInfo =require('./apiInfo');  
    const LifeInfo = require('./lifeCycleInfo');  
    const JsonInfo = require('./jsonInfo');  
    const config = {  
           ComponentInfo,  
           ApiInfo,  
           LifeInfo,  
           JsonInfo  
    }  
    const antMoveUtils = require('ant-move-utils')  
    antMoveUtils.transformDoc(config,type) 
 ```   
* package.json中在"scripts"下添加以下命令
```javascript
   "transformDoc": "node config/index" 
```
* 最后执行 npm run transformDoc就可以生成想要的文档啦！