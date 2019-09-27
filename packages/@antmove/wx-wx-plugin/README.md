# wx-compiler-plugin

<p><a class='readme-antmove-logo' href="https://github.com/ant-move/antmove" target="_blank" rel="noopener noreferrer"><img style='margin-left:0px;' width="200" src="https://img.alicdn.com/tfs/TB1ktoia.D1gK0jSZFGXXbd3FXa-765-765.png" alt="antmove logo"></a></p>

wx-compiler-plugin，Antmove工具下实现微信小程序输出干净代码的方案。
> 转换器的编译工作只能尽量的覆盖微信小程序项目代码，但微信小程序平台和支付宝小程序平台还是存在不少的差异化是转换工具难以处理的，比如登录、支付、地图特定 API。基于以上的考虑， antmove 提供了一种支付宝代码与微信小程序代码混合编写的方式来适配双端。wx-compiler方案可使微信小程序项目小程序输出干净代码，不再为重复开发而烦恼。

### 示例
```js
if (wx.__target__ === 'alipay') {
    // 支付宝小程序代码
    console.log('I am alipay mini-program.');
} else {
    // 微信小程序代码
    console.log('I am wechat mini-program.');
}
微信小程序代码（通过工具转换到微信平台）
console.log('I am wechat mini-program.');
```

* <a href='#安装'>安装</a>
    * <a href='#VsCode1'>VsCode 转换插件</a>
    * <a href='#VsCode'>VsCode 编译步骤</a>
    * <a href='#使用npm或yarn安装'>使用 npm 或 yarn 安装</a>
* <a href='#快速开始'>快速开始</a>
    * <a href='#命令行使用'>命令行使用</a> 
    * <a href='#命令行参数说明'>命令行参数说明</a> 
    * <a href='#Node.js'>Node.js 使用方式</a> 
* <a href='#API'>API</a>
    * <a href='#transformFramework'>transformFramework</a>
    * <a href='#App'>App</a>
* <a href='#贡献'>贡献</a>
* <a href='#协议'>协议</a>
* <a href='#联系'>联系</a>

<span id='安装'></span>
## 安装

<span id='VsCode1'></span>
### VsCode 转换插件

在 VsCode 扩展中搜索 `Antmove` 下载安装 Antmove vscode 转换插件实现一键转换。

<p>
    <img style='max-width: 800px;margin-left: 0;' src='https://img.alicdn.com/tfs/TB1KqazdhD1gK0jSZFyXXciOVXa-1154-516.png'>
</p>


<span id='VsCode'></span>
### VsCode 编译步骤

* 安装扩展（Antmove - antmove-vscode-plugin）
* 在 VsCode 中打开要转换的项目
* 打开 VsCode 命令面板
    * Mac: `command + shift + p`
    * Windows: `ctrl + shift + p`
* 输入 `Antmove`
* 运行 `Antmove: Run antmove wx-compiler` 命令，实现微信小程序转换支付宝小程序的转换
* 运行如上命令后会给出一个弹窗，选择转换后生成代码存储目录
* 转换完成

* [antmove-vscode-plugin](https://marketplace.visualstudio.com/items?itemName=antmove-app.antmove-vscode-plugin&ssr=false)

> 本插件依赖于 vscode 代码编辑器，安装了 vscode 的用户才能使用。


<span id='使用npm或yarn安装'></span>
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


<span id='快速开始'></span>
## 快速开始

<span id='命令行使用'></span>
### 命令行使用

> 通过 npm 或 yarn 全局安装才能使用如下命令行

提供两种可用的命令行调用方式

* `antmove wx-compiler`（使用前请将终端切换到需转换编译的微信小程序项目路径）

```bash
antmove wx-compiler ./dist/alipay-app
```

* `antmove` - 该命令更加灵活，可配置输出输出目录/编译模式等

```bash
antmove -i ./wechat-mini/project -o ./dist/wechat-mini/project --env development
```
> 如上的命令表示将 `./wechat-mini/project` 存在混合代码的小程序项目转换为微信小程序项目，转换到 `./dist/weichat-mini/project` 目录

### 命令行参数说明

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选（development/production），编译模式，生产模式代码会压缩，无编译日志及运行时日志
* `--component,-c`
    * 可选，组件维度转换，用来转换小程序的插件或组件
* `--type,-t`
    * 可选,(wx-alipay)，选择编译工具，此参数代表选择的微信转支付宝的工具

<span id='Node.js'></span>
### Node.js 使用方式

#### 示例
```js
const path = require('path');
const transformFramework = require('antmove');
const WechatPlugin = require('@antmove/wx-compiler');

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

<span id="API"></span>
## API

<span id="transformFramework"></span>
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

<span id="贡献"></span>
## 贡献

欢迎参与 Antmove 项目的开发建设和讨论。
> 提交 pull request 之前请先提 [Issue 讨论](https://github.com/ant-move/antmove/issues).

<span id="协议"></span>
## 协议
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

<span id="联系"></span>
## 联系

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助。

* 钉钉微信交流群： <img width='200px' src='https://ant-move.github.io/website/img/contact-dingding.jpg'/> <img width='200px' src='https://camo.githubusercontent.com/c0883a76f95af8fff7fce21d1395c1cdbaaa5c2b/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f5442317238536164695f31674b306a535a467158586370615858612d3735322d3937342e6a7067'/>
* 邮件：amap-appx@service.autonavi.com