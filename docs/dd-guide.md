## 介绍
钉钉小程序支持使用Vant-Aliapp,iView-Aliapp。

**由于relations 和 selectComponent 功能依赖 Antmove 编译时数据，需要使用[antmove-complier](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-polyfill-plugin/README.md)命令进行编译才能正常使用。钉钉小程序选择非 component2 模式，支付宝小程序使用 component2 模式**

## 安装
### 通过 npm 安装使用
```bash
npm i vant-aliapp -S --production 
```
或
```bash
npm i iview-aliapp -S --production
```
### 通过 yarn 安装使用
```bash
yarn add vant-aliapp --production
```
或
```bash
yarn add iview-aliapp --production
```
### 下载代码使用
直接通过 git 下载 Vant Aliapp 源代码，并将 dd/vant-app 目录拷贝到自己的项目中

```bash
git clone https://github.com/ant-move/Vant-Aliapp.git
```
或
```bash
git clone https://github.com/ant-move/iView-Aliapp
```
## 如何使用
第一步：下载 Vant/iView 的代码，将 dd/vant-app 或view-ddapp 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "i-button": "../../dd/vant-app/dist/button/index"
} 

/**
* npm方式引入
*/
"usingComponents": {
    "i-button": "vant-app/dist/button/index"
} 
```
或
```json
"usingComponents": {
    "i-button": "../../dd/view-ddapp/dist/button/index"
}

/**
* npm方式引入
*/
"usingComponents": {
    "i-button": "view-ddapp/dist/button/index"
}
```
在 axml 中使用组件：
```html
<i-button type="primary" onClick="handleClick">这是一个按钮</i-button>
```
