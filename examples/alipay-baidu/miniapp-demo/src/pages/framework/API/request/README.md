# 网络

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563444101153.png)

## my.request

小程序网络请求。

支持版本：v9.10.0

### 注意

1. 高德端旧接口[my.httpRequest](request#my.httpRequest)将被废弃，请使用`my.request` 来代替。
1. 请预先在 **小程序管理后台小程序详情页** > **设置** > **开发设置** > **httpRequest接口请求域名白名单** 中配置域名白名单。小程序在以下API调用时只能与白名单中的域名进行通讯：HTTP请求（my.request）、上传文件（my.uploadFile）、下载文件（my.downloadFile) 和 WebSocket （my.connectSocket）。
1. 小程序开发过程中，可在开发工具内 **详情** > **域名信息** >**忽略 httpRequest 域名合法性检查** 中选择是否忽略域名合法性检查，如果选择忽略，则在模拟器、预览以及真机调试场景不会校验域名合法性，但小程序上线前必须确保通讯域名在白名单内，否则在正式版本无法调用。

> **重要**:`my.request` 的请求头默认值为 **{'content-type': 'application/json'}**，而不是{'content-type': 'application/x-www-form-urlencoded'}

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 目标服务器url | v9.10.0 |
| headers | Object | 否 | 设置请求的 HTTP 头，默认 {'content-type': 'application/json'} | v9.10.0 |
| method | String | 否 | 默认GET，目前支持GET/POST | v9.10.0 |
| data | Object | 否 | [请求参数](request#089c191d) | v9.10.0 |
| timeout | Number | 否 | 超时时间，单位ms，默认30000 | v9.10.0 |
| dataType | String | 否 | 期望返回的数据格式，默认json，支持json，text，base64 | v9.10.0 |
| success | Function | 否 | 调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

#### data参数说明

传给服务器的数据最终会是 String 类型，如果 data 不是 String 类型，会被转换成 String 。转换规则如下：

- 若方法为`GET`，会将数据转换成 query string： encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...
- 若方法为 `POST` 且 `headers['content-type']` 为 `application/json` ，会对数据进行 JSON 序列化
- 若方法为 `POST` 且 `headers['content-type']` 为 `application/x-www-form-urlencoded` ，会将数据转换成 query string： encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...

### success返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| data | String | 响应数据，格式取决于请求时的 dataType 参数 |
| status | Number | 响应码 |
| headers | Object | 响应头 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 无权跨域 |  |
| 12 | 网络出错 |  |
| 13 | 超时 |  |
| 14 | 解码失败 |  |
| 19 | HTTP错误 |  |
| 20 | 请求已被停止/服务端限流 |  |

> 当入参`dataType`值为`json`时，小程序框架会先对返回结果做`JSON.prase`操作，如果解析失败，则会返回`error`为14的错误。当入参`dataType`值为`text`时，如果返回的内容格式不符，也会返回`error`为14的错误。遇到此错误时，请先检查`dataType`的设置是否正确。

### 返回值

#### RequestTask

网络请求任务对象

#### 方法

RequestTask.abort()


### 代码示例

```javascript
my.request({
  url: 'https://httpbin.org/post',
  method: 'POST',
  data: {
    from: '高德',
    production: 'AlipayJSAPI',
  },
  dataType: 'json',
  success: function(res) {
    my.alert({content: 'success'});
  },
  fail: function(res) {
    my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    my.alert({content: 'complete'});
  }
});

// 返回RequestTask，可以调用abort方法取消请求
const task = my.request({url: 'https://httpbin.org/post'})
task.abort()
```

> 注意：如果 request 调用返回「无权调用该接口」时，则需要在[开放平台配置后台](https://openhome.alipay.com/platform/mini.htm#/app/2018041802579956/setting)的 request 中添加你需要访问的域名地址（小程序详情 > 设置 > 开发设置 > httpRequest接口请求域名白名单）：
> ![](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/71/1551430385440-558b7f24-dcd0-4800-8a9e-1e385269b1e6.png#align=left&display=inline&height=314&originHeight=314&originWidth=2313&status=done&width=2313)

## my.httpRequest
向指定服务器发起一个跨域 http 请求。<br />

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 目标服务器url | v8.90 |
| headers | Object | 否 | 设置请求的 HTTP 头，默认 {'Content-Type': 'application/x-www-form-urlencoded'} | v8.90 |
| method | String | 否 | 默认GET，目前支持GET，POST | v8.90 |
| data | Object | 否 | 请求参数 | v8.90 |
| timeout | Number | 否 | 超时时间，单位ms，默认30000 | v8.90 |
| dataType | String | 否 | 期望返回的数据格式，默认json，支持json，text，base64 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| data | String | 响应数据，格式取决于请求时的 dataType 参数 |
| status | Number | 响应码 |
| headers | Object | 响应头 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 无权跨域 |  |
| 12 | 网络出错 |  |
| 13 | 超时 |  |
| 14 | 解码失败 |  |
| 19 | HTTP错误 |  |

### 代码示例

```javascript
my.httpRequest({
  url: 'http://httpbin.org/post',
  method: 'POST',
  data: {
    from: '高德',
    production: 'AlipayJSAPI',
  },
  dataType: 'json',
  success: function(res) {
    my.alert({content: 'success'});
  },
  fail: function(res) {
    my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    my.alert({content: 'complete'});
  }
});
```
> 注意：如果 httpRequest 调用返回「无权调用该接口」时，则需要在[开放平台配置后台](https://openhome.alipay.com/platform/mini.htm#/app/2018041802579956/setting)的 httpRequest 中添加你需要访问的域名地址
