<h1 align="center">蚂蚁搬家（antmove） 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.2.0-blue.svg?cacheSeconds=2592000" />
</p>

> 蚂蚁搬家工具，一种小程序跨平台开发解决方案。

## 安装
* 全局安装

```sh
$ npm install antmove -g
```

* 本地安装

```sh
$ npm install antmove --save
```

## 快速开始

### 命令行编译

```bash
antmove -i inputpath -o outputpath --env development
```

* `--input,-i`
    * 可选，编译源码目录，如果不传则是当前目录
* `--output,-o`
    * 必传，编译输出目录
* `--env,-e`
    * 可选，编译模式，生产模式代码会压缩，无编译日志及运行时日志

### Node.js

```js
const path = require('path');
const transformFramework = require('antmove');
const WechatPlugin = require('transform-wechat-alipay');

let outputPath = path.join(__dirname, '../../dist');
let inputDirPath = path.join(__dirname, '../../examples/wx-zhihu');

transformFramework({
    entry: inputDirPath,
    options: {
        exclude: [
            /^\.\w+/,                                         // 匹配到的文件将不会编译处理
            'project.config.json'
        ]
    },
    plugins: [
        {
            plugin: WechatPlugin,
            options: {
                dist: path.join(outputPath , 'ali-zhihu')     // 编译输出目录地址
            }
        }
    ]
});

```

## API

### `transformFramework`

* obj | `Object`
  * `entry` | `String` : 待编译小程序源码目录
  * `options` | `Object` : 编译配置项
    * `exclude` | `Array` : 编译忽略文件（忽略的文件不会进行编译处理）
  * `plugins` | `Array`: 编译插件引入（如微信转支付宝小程序插件）


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Show your support

Give a ⭐️ if this project helped you!
