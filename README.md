# Antmove（蚂蚁搬家）

<p><a href="https://github.com/ant-move/antmove" target="_blank" rel="noopener noreferrer"><img width="200" src="https://ant-move.github.io/website/img/favicon.ico" alt="antmove logo"></a></p>

Antmove - 小程序转换器，基于支付宝/微信小程序转换为多端小程序，让小程序跨平台开发变得简单。
> 一键实现小程序转换迁徙，不再为重复开发而烦恼。

![antmove structure](https://img.alicdn.com/tfs/TB13u6Cb4z1gK0jSZSgXXavwpXa-3852-936.png)

## 目录

<ul class="toc-headings"><li><a href="#特性" class="active">特性</a></li><li><a href="#跨平台支持" class="">跨平台支持</a></li><li><a href="#文档">文档</a></li><li><a href="#安装">安装</a><ul class="toc-headings"><li><a href="#vscode-转换插件">vscode 转换插件</a></li><li><a href="#vscode-编译步骤">VsCode 编译步骤</a></li><li><a href="#使用-npm-或-yarn-安装">使用 npm 或 yarn 安装</a></li></ul></li><li><a href="#快速开始">快速开始</a><ul class="toc-headings"><li><a href="#命令行使用">命令行使用</a></li><li><a href="#命令行参数说明">命令行参数说明</a></li><li><a href="#nodejs-使用方式">Node.js 使用方式</a></li></ul></li><li><a href="#api">API</a><ul class="toc-headings"><li><a href="#transformframework"><code>transformFramework</code></a></li><li><a href="#app"><code>App</code></a></li></ul></li><li><a href="#谁在使用">谁在使用</a><ul class="toc-headings"><li><a href="#微信小程序">微信小程序</a></li><li><a href="#支付宝小程序">支付宝小程序</a></li><li><a href="#高德小程序">高德小程序</a></li></ul></li><li><a href="#贡献">贡献</a></li><li><a href="#协议">协议</a></li><li><a href="#联系">联系</a></li></ul>

## 特性

* 简单易使用，无学习成本，直接上手
* 转换覆盖率全面，及时跟进各小程序平台更新情况
* 配套详细的编译时日志/运行时日志工具
* 编译生成代码可读性强，可二次编程
* 二次编译支持
* 组件转换支持

## 跨平台支持

| # | 编译命令 | 描述 | 文档 | GitHub | Npm |
|--|--|--|--|--|--|
| 1 | wx-alipay | 微信小程序转支付宝小程序，支持阿里系其它平台小程序编译（如 钉钉小程序） | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-alipay-plugin/README.md)| [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-alipay-plugin) | [@antmove/wx-alipay - npm](https://www.npmjs.com/package/@antmove/wx-alipay) |
| 2 | wx-baidu | 微信小程序转百度智能小程序 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-baidu-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-baidu-plugin) | [@antmove/wx-baidu - npm](https://www.npmjs.com/package/@antmove/wx-baidu) |
| 3 | wx-tt （非正式版）| 微信小程序转字节跳动小程序 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-tt-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-tt-plugin) | [@antmove/wx-tt - npm](https://www.npmjs.com/package/@antmove/wx-tt)|
| 4 | alipay-wx | 支付宝小程序转微信小程序 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-wx-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/alipay-wx-plugin) | [@antmove/alipay-wx - npm](https://www.npmjs.com/package/@antmove/alipay-wx)|
| 5 | alipay-baidu | 支付宝小程序转百度智能小程序 |  [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-baidu-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/alipay-baidu-plugin) | [@antmove/alipay-baidu - npm](https://www.npmjs.com/package/@antmove/alipay-baidu)|
| 6 | wx-compiler | 对于有跨平台代码编写的，可以用该命令得到纯净的微信小程序代码 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/wx-wx-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/wx-wx-plugin)  | [@antmove/wx-wx - npm](https://www.npmjs.com/package/@antmove/wx-wx) |
| 7 | alipay-compiler | 原生支付宝小程序引用 Antmove 转换而来的组件库时，使用该命令对引用项目编译，以支持 relations 和 selectComponent 能力 | [README.md](https://github.com/ant-move/Antmove/blob/master/packages/%40antmove/alipay-polyfill-plugin/README.md) | [Github](https://github.com/ant-move/Antmove/tree/master/packages/%40antmove/alipay-polyfill-plugin)  | [@antmove/alipay-polyfill - npm](https://www.npmjs.com/package/@antmove/alipay-polyfill)|

## 文档
* [官方文档](https://ant-move.github.io/website/docs/readme.html)

## 安装

### vscode 转换插件

在 vscode 扩展中搜索 `Antmove` 下载安装 Antmove vscode 转换插件实现一键转换。

### VsCode 编译步骤

* 安装扩展（Antmove - antmove-vscode-plugin）
* 在 VsCode 中打开要转换的项目
* 打开 VsCode 命令面板
    * Mac: `command + shift + p`
    * Windows: `ctrl + shift + p`
* 输入 `Antmove`
* 运行 `Antmove: Run antmove` 命令
* 运行如上命令后会给出一个弹窗，选择转换后生成代码存储目录
* 转换完成

* [antmove-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=antmove-app.antmove-vscode-plugin&ssr=false)

> 本插件依赖于 vscode 代码编辑器，安装了 vscode 的用户才能使用。


### 使用 npm 或 yarn 安装

> 我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

* 全局安装

```bash
$ npm install antmove -g
```
或
```bash
$ yarn global add antmove
```

* 本地安装

```bash
$ npm install antmove --save
```
或
```bash
$ yarn add antmove
```


> 如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

## 快速开始

### 命令行使用

```bash
npm i -g antmove
```

> 通过 npm 或 yarn 全局安装才能使用如下命令行

提供两种可用的命令行调用方式（如下几个命令的参数是类似的）

* 微信小程序转支付宝小程序命令 - `wx-alipay`
* 支付宝小程序转微信小程序 - `alipay-wx`
* 支付宝小程序转百度智能小程序 - `alipay-baidu`

> 你可以通过微信转支付宝转百度的链路实现百度小程序的支持哦，Antmove 已经做二次转换的特别处理。

* `antmove wx-alipay`（使用前请将终端切换到需转换编译的微信小程序项目路径）

```bash
antmove wx-alipay -i ./ -o ./dist/alipay-app
```

或者
```bash
antmove wx-alipay
```

* `antmove` - 该命令更加灵活，可配置输出输出目录/编译模式等

```bash
antmove wx-alipay -i ./wechat-mini/project -o ./dist/alipay-mini/project --env development
```
> 如上的命令表示将 `./wechat-mini/project` 微信小程序项目转换为支付宝小程序项目，转换到 `./dist/alipay-mini/project` 目录
> 如果你不想输入参数，可以体验交互式的命令方式，执行 `antmove` 即可。

### 命令行参数说明 - [配置文件文档详情](./docs/antmove-config-js.md)

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选（development/production），编译模式，生产模式代码会压缩，无编译日志及运行时日志
> 更多配置项可参考[配置文件文档详情](./docs/antmove-config-js.md)。

### Node.js 使用方式

#### 示例
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
const transformFramework = require('antmove');
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
* `start` | `Function` - 开始编译操作

## 谁在使用

### 微信小程序

> 这里展示的微信小程序为原小程序应用，下面的其它平台小程序为基于这些微信小程序转换得到。

<img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/e-wx.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/qu-wx.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/wei-wx.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/werther-wx.jpg'>

### 支付宝小程序

<img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/e-alipay.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/wei-alipay.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/qu-alipay.jpg'>

### 高德小程序

<img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/e-amap.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/wei-amap.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/bus-amap.jpg'><img width='150' src='https://cache.amap.com/ecology/tool/antmove/web/assets/qr/custom/weather-amap.jpg'>

> 如果你的公司和产品使用了 [Antmove](https://ant-move.github.io/website/docs/readme.html)，欢迎到[这里](https://github.com/ant-move/antmove/issues/1)留言。

## 贡献

欢迎参与 Antmove 项目的开发建设和讨论。
> 提交 pull request 之前请先提 [Issue 讨论](https://github.com/ant-move/antmove/issues).

## 协议
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## 联系

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助。

* 钉钉微信交流群： 
    <img width='200px' src='https://ant-move.github.io/website/img/contact-dingding.jpg'/> <img width='200px' src='https://cache.amap.com/ecology/tool/antmove/web/assets/wx-qrcode.JPG'/>
* 邮件：amap-appx@service.autonavi.com
