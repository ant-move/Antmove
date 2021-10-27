## Antmove 编译配置文件文档

* input - (`--input/-i`)
	* 类型 - String
	* 编译输入路径地址
	* 是否必须 - 是
	* 默认值
		* 命令行模式 - 命令行执行路径
		* 其它执行模式 - 无
* output - (`--output/-o`)
	* 类型 - String
	* 编译输出路径地址
	* 是否必须 - 是
	* 默认值
		* 命令行模式 - 命令行执行路径/out
		* 其它执行模式 - 无
* type - (`--type/-t`)
	* 类型 - String
	* 编译方案
	* 是否必须 - 是
	* 默认值 - 无
* component - (`--component/-c`)
	* 类型 - String
	* 是否进行组件维度转换
	* 是否必须 - 否
	* 默认值 - `false`
* env - (`--env/-e`)
	* 类型 - String
	* 编译环境
	* 是否必须 - 否
	* 默认值  - `production`
* scope ( wx-alipay单独使用 ) - (`--scope/-s`)
	* 类型 - String
	* 组件添加样式作用域 
	* 是否必须 - 否
	* 默认值 - `true`
* component2 ( wx-alipay单独使用 ) - (`--component2`)
	* 类型 - String
	* wx-alipay 编译输出 component2 版本的支付宝小程序
	* 是否必须 - 否
	* 默认值 - `true`
* platform ( wx-alipay单独使用 ) - (`--platform`)
	* 类型 - String
	* wx-alipay 编译输出其它平台的支付宝小程序（如: 钉钉）
	* 是否必须 - 否
	* 默认值 - `alipay`

## 示例

```js
module.exports = {
    "input": "./wx/vant-app",
    "output": "./alipay/vant-app/",
    "env": "production",
    "component2": false,
    "platform": "alipay",
    "scope": false,
    "type": "wx-alipay",
    "component": false,
    "npm": {
        "vant-weapp": {
            "name": "vant-aliapp",
            "version": "1.0.13"
        }
    }
}
```