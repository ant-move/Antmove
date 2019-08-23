# Antmove（蚂蚁搬家）

<p><a href="https://github.com/ant-move/antmove" target="_blank" rel="noopener noreferrer"><img width="200" src="https://img.alicdn.com/tfs/TB1ktoia.D1gK0jSZFGXXbd3FXa-765-765.png" alt="antmove logo"></a></p>

Antmove - 小程序转换器，基于支付宝/微信小程序转换为多端小程序，让小程序跨平台开发变得简单。
> 一键实现微信小程序项目到支付宝小程序的迁徙，不再为重复开发而烦恼。

![antmove structure](https://img.alicdn.com/tfs/TB13u6Cb4z1gK0jSZSgXXavwpXa-3852-936.png)

## 特性

* 简单易使用，无学习成本，直接上手
* 转换覆盖率全面，及时跟进各小程序平台更新情况
* 配套详细的编译时日志/运行时日志工具
* 编译生成代码可读性强，可二次编程
* 二次编译支持

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

* 本地安装

```bash
$ npm install antmove --save
```

> 如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。


## 快速开始

### 命令行使用

```bash
npm i -g antmove-cli
```

> 通过 npm 或 yarn 全局安装才能使用如下命令行

提供两种可用的命令行调用方式（如下几个命令的参数是类似的）

* 微信小程序转支付宝小程序命令 - `wx-alipay`
* 支付宝小程序转微信小程序 - `alipay-wx`
* 支付宝小程序转百度智能小程序 - `alipay-baidu`

> 你可以通过微信转支付宝转百度的链路实现百度小程序的支持哦，Antmove 已经做二次转换的特别处理。

* `antmove-cli wx-alipay`（使用前请将终端切换到需转换编译的微信小程序项目路径）

```bash
antmove wx-alipay ./dist/alipay-app
```

* `antmove-cli` - 该命令更加灵活，可配置输出输出目录/编译模式等

```bash
antmove-cli -t wx-alipay -i ./wechat-mini/project -o ./dist/alipay-mini/project --env development
```
> 如上的命令表示将 `./wechat-mini/project` 微信小程序项目转换为支付宝小程序项目，转换到 `./dist/alipay-mini/project` 目录
> 如果你不想输入参数，可以体验交互式的命令方式，执行 `antmove-cli` 即可。

### 命令行参数说明

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选（development/production），编译模式，生产模式代码会压缩，无编译日志及运行时日志

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

## 内测中（即将推出）

* 支付宝转头条能力支持
* 页面/组件维度转换能力支持

## 谁在使用

* [e代驾](http://www.edaijia.cn/)
* [微代驾](http://www.weidaijia.cn/)
* [趣满满](http://www.piaofer.cn/)
* [天气通](http://tianqitong.sina.cn/)

> 如果你的公司和产品使用了 [Antmove](https://ant-move.github.io/website/docs/readme.html)，欢迎到[这里](https://github.com/ant-move/antmove/issues/1)留言。

## 贡献

欢迎参与 Antmove 项目的开发建设和讨论。
> 提交 pull request 之前请先提 [Issue 讨论](https://github.com/ant-move/antmove/issues).

## 协议
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## 联系

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助。

* 钉钉微信交流群： <img width='200px' src='https://ant-move.github.io/website/img/contact-dingding.jpg'/> <img width='200px' src='https://cache.amap.com/ecology/tool/antmove/web/assets/02.JPG'/>
* 邮件：amap-appx@service.autonavi.com