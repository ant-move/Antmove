## 1.0.4(2019-09-26)
### Features

* alipay-wx:
	* 修复alipay-wx转换后didUpdate不执行的问题
	* 添加alipay-wx开启组件样式隔离的功能
	* 修复input的type属性转换后为undefined的问题
	* 添加alipay-wx对模版编译功能的支持
* wx-alipay:
	* 新增wx-alipay对模版编译功能的支持:(标签添加 is-alipay 属性即可)

### fix

	* 当转换的小程序某文件夹中只存在wxml一种文件格式时，输出后wxml还存在的问题

## 1.0.0(2019-09-26)
### Features

	* wx-baidu
		* 新建微信转百度一键转换功能
    * wx-tt
        * 微信小程序一键转字节跳动小程序（非正式版）
	* alipay-compiler	
		* antmove 转换后提供的组件库提供给支付宝小程序使用时，支付宝小程序需要使用 alipay-compiler 命令编译后才能正常使用。
	* antmove
		* 组件维度转换能力
			* polyfill 代码按需生成
    * 包更新检测功能添加

### Bugfix

	* wx-alipay
		* bindscoll 转换错误处理

## 0.3.0(2019-09-23)
* wx-alipay
	* 组件维度转换支持 
	* 运行时日志搜索功能优化
		* 当警告 `message` 存在逗号（`,`）时无法搜索成功，现已修复
	* 运行时日志模块引入方式改为相对路径
	* 内置 behavior 中 wx://field-form 加上警告工具
	* 更新配置文档中的分包功能配置
		* 原有配置为不支持，现改为部分支持
		* 不支持 `name` 属性作为预下载的标识
* alipay-baidu
  * 修复map组件对polygon属性支持失败的问题
  * 修复由由微信转为支付宝的小程序再二次转码时出现部分api不支持的问题
  	* 如支付宝的 `alert`，`canIuse` 等
  * 优化自定义组件回调函数的运行性能, 使没有定义在 `props` 上的回调函数也能像支付宝一样回调成功
  * 修复 mac 环境下项目输出目录会显示 '//' 的问题，以及由此造成的组件和图片的相对路径处理错误的问题
* alipay-wx
  * 修复微信小程序 `this.$id` 为空的问题
  * 修复微信小程序 `text` 组件默认值从转义符导致的样式问题
  * 修复组件内 `createSelectorQuery` 改为 `this` 调用
  * 添加对 `catch` 事件支持，如 `catchTouchMove`
  * 添加对 `sjs` 文件的处理
  	* sjs 编译为 es5 模块
  	* sjs 采用 `module.exports` 导出模块
  * 添加 `alipay-wx` 的readme文档
  * 添加js、css文件格式校验功能，格式错误文件编译时控制台会给出错误提示
  * 添加npm转换方案，例如: package.json文件中的微信端的 vant-weapp 包替换为 antmove 转换工具转换好的vant-aliapp


## 0.2.3(2019-09-12)

* wx-alipay
	* behavior 复用机制优化，新增 id 以区分 behavior 是否重复使用
	* 内置 behavior 添加
		* `wx://component-export` 添加
	* echart-Aliapp 支付宝小程序版本推出
		* Github: https://github.com/ant-move/echarts-Aliapp
	* vant-Aliapp 组件库 NPM 包 引用路径错误 bugfix
	* 运行时日志 UI 优化
* alipay-wx
	* 支付宝官方 demo 转换适配支持
* alipay-baidu
	* didUpdate 钩子函数支持
* wx-amap
	* 微信转高德转换插件描述配置文件优化
* antmove-vscode-plugin
	* 微信转支付宝功能升级为 `0.2.25` 最新版本
	* 新增支付宝转微信小程序功能
	* 新增支付宝转百度小程序功能
	* 增加转换输入目标目录是否为空检测提示功能，避免操作失误丢失代码的情况。