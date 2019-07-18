<h1 align="center">蚂蚁搬家（antmove)</h1>

> 蚂蚁搬家工具，让小程序跨平台开发变得简单。

* [官方文档](https://ant-move.github.io/website/docs/readme.html)

## 安装
* 全局安装

```bash
$ npm install antmove -g
```

* 本地安装

```bash
$ npm install antmove --save
```

## 快速开始

### 命令行使用

```bash
antmove -i ./wechat-mini/project -o ./dist/alipay-mini/project --env development
```
> 将 `./wechat-mini/project` 微信小程序项目转换为支付宝小程序项目，转换到 `./dist/alipay-mini/project` 目录

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选，编译模式，生产模式代码会压缩，无编译日志及运行时日志

### Node.js 使用方式

```js
const path = require('path');
const transformFramework = require('antmove');
const WechatPlugin = require('@antmove/wx-alipay');

let outputPath = path.join(__dirname, '../../dist');
let inputDirPath = path.join(__dirname, '../../examples/miniprogram-demo/miniprogram');

const App = transformFramework();

App.use(
    WechatPlugin, 
    {
        entry: inputDirPath,
        dist: outputPath + '/alipaymini-demo',
        env: 'development'
    })
    .start();
```

## API

### `transformFramework`

工具实例生成函数。

```js
const App = transformFramework();   // 得到的 app 实例即可进行转换处理操作
```

### `App`

* `use` | `Function` - `App.use(plugin, pluginOptions)` - 挂载插件到实例上，可挂载多个，按挂载顺序执行
    *  `plugin`: 转换插件
    * `pluginOptions`: 转换插件配置项
        * `entry` | `String` - 转换源码目录
        * `dist` | `String` - 转换后代码输出目录
        * `env` | `String` - 编译环境设置（env/prod）
            * 默认值为生产环境
        * `remote` | `Boolean` - 是否拉去远程差异化抹平代码
            * 默认开启
* `start` | `Function` - 开始编译操作

## 计划（进行中）

* 支付宝转百度能力支持
* 支付宝转微信能力支持
* 支付宝转头条能力支持
* 页面/组件维度转换能力支持


## 贡献

欢迎参与蚂蚁搬家项目的开发建设和讨论。
> 提交 pull request 之前请先提 [Issue 讨论](https://github.com/ant-move/antmove/issues).

## 协议
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## 联系

* 钉钉交流群： <img width='200px' src='https://ant-move.github.io/website/img/contact-dingding.jpg'/>
* 邮件：amap-appx@service.autonavi.com