# OCR

使用之前请先阅读[权限说明](innerpermissiondescription)

## my.ocr(Object object)

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563446891945.png)

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| ocrType | String | 是 | 支持的 OCR 类型如下表 | v9.10.0 |
| path | String | 否 | 需要做 OCR 识别的图片路径：支持网络路径、apFilePath、包文件路径 | v9.10.0 |
| imageBase64 | String | 否 | 待识别图片的base64编码 | v9.10.0 |
| side | String | 否 | 当ocrType为 `ocr_idcard` 或者 `ocr_driver_license` 时，需传正反面参数：face/back 正/反 | v9.10.0 |
| success | Function | 否 | 调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

注：path 和 imageBase64 二选一

**支持的图片格式：**<br />Windows bitmaps - *.bmp

- JPEG 文件 - _.jpeg, _.jpg, *.jpe<br />
- JPEG 2000 文件 - *.jp2<br />
- Portable Network Graphics - *.png<br />
- TIFF 文件 - _.tiff, _.tif<br />

**支持的 ocrType 类型枚举**

| 名称 | 描述 | 备注 |
| --- | --- | --- |
| ocr_bank_card | 银行卡识别 |  |
| ocr_business_card | 名片识别 |  |
| ocr_business_license | 营业执照识别 |  |
| ocr_driver_license | 驾驶证识别 | face/back 主页/副页 |
| ocr_idcard | 身份证识别 | face/back 正/反 |
| ocr_passport | 护照识别 |  |
| ocr_train_ticket | 火车票识别 |  |
| ocr_vehicle | 行驶证识别 | face/back 主页/副页 |
| ocr_vehicle_plate | 车牌识别 |  |
| ocr_general | 通用文字识别 |  |
| ocr_vin | vin识别 |  |

### fail 返回值
| 名称 | 类型 | 描述 |
| --- | --- | --- |
| error | String | 错误码 |
| errorMessage | String | OCR 返回错误描述 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 1001 | path 和 imageBase64 不可同时为空 | |
| 1002 | 请检查图片大小是否超过 api 限制 | |
| 1003 | OCR 失败 | |
| 1004 | responsePB.errorMessage | |
| 1005 | 不支持的图片地址后缀名 | |
| 1006 | 读取图片内容失败 | |
| 1007 | 图片上传失败 | |
| 1008 | 图片下载文件失败 | |

### success 返回值
| 名称 | 类型 | 描述 |
| --- | --- | --- |
| result | Object | OCR 结果，入参不同的 type 类型，返回的结果内容结构不一致，详见 result 说明 |


**第一种 result 内容说明（卡片/证件类OCR识别结果）**

###### 符合此种result结构的 ocrType 包括

- ocr_bank_card<br />
- ocr_business_card<br />
- ocr_business_license<br />
- ocr_driver_license<br />
- ocr_idcard<br />
- ocr_passport<br />
- ocr_vehicle<br />
- ocr_vehicle_plate<br />

**result 返回结果**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| outputs | Array | OCR 输出内容 |

**outputs 结构说明**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| outputLabel | String | OCR识别结果对应ocrType类型 |
| outputMulti | Object | 其他内容 |
| outputValue | Object | OCR具体返回值 |

**outputValue 结构说明**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| dataType | Int | OCR识别结果返回数据类型 |
| dataValue | Object | OCR识别结果具体列表，不同ocrType对应的dataValue内容列表不一致，具体参考返回值示例打印结果 |

**返回值示例**<br />
**ocrType == ocr_idcard 的返回示例**<br />console.log(res.result.outputs[0].outputValue.dataValue)结果如下
```json
{
	"address": "浙江省杭州市西湖区",  // 地址
	"birth": "09910912",  // 生日
	"config_str": "{\"side\":\"face\"}", // 正面返回值
	"face_rect": { // 人脸位置，center表示人脸矩形中心坐标，size表示人脸矩形长宽，angle表示矩形顺时针旋转的度数。
		"angle": -90,
		"center": {
			"x": 357.5,
			"y": 145.5
		},
		"size": {
			"height": 95,
			"width": 87
		}
	},
	"name": "高德", // 姓名
	"nationality": "汉", // 民族
	"num": "822828099109120012", // 身份证号
	"request_id": "20180727163504_9e8c473016d9322414d4f5d4806cd375",
	"sex": "男", // 性别
	"success": true // 识别成功
}
```

**ocrType == ocr_bank_card 的返回示例**<br />console.log(res.result.outputs[0].outputValue.dataValue)结果如下
```json
{
	card_num: "8888888888888888888",
	request_id: "20180727153352_00575a4b9718254075f60056db7eba57",
	success: true
}
```
**ocrType == ocr_business_card 的返回示例**<br />console.log(res.result.outputs[0].outputValue.dataValue)结果如下

```json
{
	addr: ["广东省深圳市南山区高新南一道", "大庆A座7楼"]
	company: ["TRC通讯科技控股有限公司"]
	department: []
	email: ["10000@qq.com"]
	name: "支小宝"
	request_id: "20180727153634_a094d52fea7138b5b238da43ab6b04b0"
	success: true
	tel_cell: ["13900000000"]
	tel_work: []
	title: ["城市经理"]
}
```
**ocrType == ocr_business_license 的返回示例**<br />console.log(res.result.outputs[0].outputValue.dataValue)结果如下
```json
{
	address: "杭州市万塘路18号黄龙时代广场"
	angle: 0
	business: "数字电影放映;预包装食品兼散装食品零售。(按许证所列范围和期限经营)(依法须经批准的项目,经相关部门批准后方可开展经营活动)"
	capital: "100万元整"
	captial: "100万元整"
	elbem: {height: 121, left: 242, top: 5, width: 114}
	emblem: {height: 121, left: 242, top: 5, width: 114}
	establish_date: "20201212"
	name: "支小宝有限责任公司"
	person: "支小宝"
	qrcode: {height: 120, left: 44, top: 626, width: 118}
	reg_num: "123456789123456"
	request_id: "20180727153950_00e74fb0726e567f36431a18abc4d08e"
	stamp: {height: 138, left: 381, top: 647, width: 141}
	success: true
	title: {height: 72, left: 123, top: 139, width: 351}
	type: "有限责任公司"
	valid_period: "20311211"
}
```

**ocrType == ocr_driver_license 的返回示例**<br />console.log(res.result.outputs[0].outputValue.dataValue)结果如下
```json
{
	addr: "浙江省杭州市西湖区"
	config_str: "{\"side\":\"face\"}"
	end_date: "10"
	name: "张三"
	num: "441900197807291074"
	request_id: "20180727154128_d09a47966e6b70ebf5569765f971b018"
	sex: "女"
	start_date: "20110915"
	success: true
	vehicle_type: "C1"
}
```

**ocrType == ocr_vehicle_plate 的返回示例**<br />console.log(res.result.outputs[0].outputValue.dataValue)结果如下
```json
{
	config_str: "{\"multi_crop\":false}"
	plates:  {detail: "", prob: 0.999997615814209, roi: Object, txt: "粤N02181"}
	request_id: "20180727160431_31540c6e1ed3dc1d3e2354d0eaf9b47c"
	success: true
}
```

**第二种 result 内容说明（车架识别结果）**

###### 符合此种result结构的 ocrType 包括

- ocr_vin<br />

**result 返回结果**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| request_id | String | OCR 请求Id |
| success | BOOL | OCR结果布尔值，true代表成功，false则失败 |
| vin | String | OCR具体返回值 |


**返回值示例**<br />
**ocrType == ocr_vin 的返回示例**<br />console.log(res.result.vin)
```json
{
	request_id: "20180727161151_5a53be2aad8f6a732e39c87af8e7a841",
	success: true,
	vin: "LFVBA14B3K3014078"
}
```

**第三种 result 内容说明（通用类识别结果）**

###### 符合此种result结构的 ocrType 包括

- ocr_general<br />

**result 返回结果**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| request_id | String | OCR 请求Id |
| success | BOOL | OCR结果布尔值，true代表成功，false则失败 |
| text | Array | OCR具体返识别内容数组 |


**返回值示例**<br />
**ocrType == ocr_general 的返回示例**<br />console.log(res.result)
```json
{
	request_id: "20180727161151_5a53be2aad8f6a732e39c87af8e7a841",
	success: true,
	text: ["你好", "高德"]
}
```

**第四种 result 内容说明 （票类识别结果，如车票）**

###### 符合此种result结构的 ocrType 包括

- ocr_train_ticket<br />

**result 返回结果**

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| request_id | String | OCR 请求Id |
| success | BOOL | OCR结果布尔值，true代表成功，false则失败 |
| date | String | 火车票日期 |
| destination | String | 火车票目的地 |
| level | String | 当前火车票座位类型（硬卧、硬座等） |
| number | String | 当前火车票车次 |
| origin | String | 当前火车票起始站 |
| place | String | 当前火车票车厢信息 |
| price | String | 当前火车票价格 |

**返回值示例**<br />**ocrType == ocr_train_ticket 的返回示例**
```json
{
  "date": "2013年10月07日10:43",
  "destination": "潍坊",
  "level": "新空调硬座",
  "number": "K970",
  "origin": "高密",
  "place": "16车无座",
  "price": 14.5,
  "request_id": "20170720134032_416f8b6b6a13b69647e4dc9fdc696ecd",
  "success": true
}
```

### 示例代码
```javascript
my.call('ocr', {
	ocrType: 'ocr_idcard',
	side: 'face',
	path: url,
	success: res => {
		let data = JSON.parse(res.result.outputs[0].outputValue.dataValue);
		console.log(res)
		let { name, sex, nationality, birth, address, num } = data;
		this.setData({
			imgUrl: url,
			textArry: [
				{ title: '姓名', message: name },
				{ title: '性别', message: sex },
				{ title: '民族', message: nationality },
				{ title: '出生', message: this.reData(birth) },
				{ title: '地址', message: address },
				{ title: '身份号码', message: num },
			],
		});
		my.hideLoading();
	},
	fail: res => {
 	my.hideLoading();
	my.alert({
		title: 'fail',
		content: JSON.stringify(res),
		});
	},
});
```
