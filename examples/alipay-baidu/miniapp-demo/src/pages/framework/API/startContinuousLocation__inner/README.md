# 持续定位 v10.00.0 以上版本支持

建议小程序在被其他页面覆盖时，停止持续定位。页面回到前台再开始定位，以减少耗电。

扫码预览：

![](https://cache.amap.com/ecology/tool/miniapp/1563454449090.png)

# 关于 JSAPI

持续定位共包含：startContinuousLocation 和 stopContinuousLocation，onContinuousLocation，offContinuousLocation。其中 start 和 stop 分别是开启和关闭持续定位功能的接口，on 和 off 是订阅和取消订阅持续定位消息的接口。如果没有调用 start 将不会触发 on 和 off。调用了 start，再调用 on 和 off，才会触发 on 的持续回调。off 的调用是由 appx 层统一进行处理的。具体调用方式如下：

```javascript
//开启持续定位
startContinuousLocation() {
  if (my.canIUse('startContinuousLocation')) {
    my.startContinuousLocation({
      ...param,
      success: (data) => {
        console.log('success', data)
      },
      fail: (data) => {
        console.log('fail', data)
        this.setData({ startResult: JSON.stringify(data) })
        my.alert({
          title: '失败',
          content: JSON.stringify(data),
        })
      },
    })
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
    my.alert({
      title: '提示',
      content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
    })
  }
},
 //停止持续定位
 stopContinuousLocation() {
   if (my.canIUse('startContinuousLocation')) {
     my.stopContinuousLocation({
       success: (data) => {
         console.log('success', data)
       },
       fail: (error) => {
         my.alert({
           title: '失败',
           content: JSON.stringify(error),
         })
       },
     })
   } else {
     // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
     my.alert({
       title: '提示',
       content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
     })
   }
 },
  //开启持续定位监听
  onContinuousLocation() {
    if (my.canIUse('onContinuousLocation')) {
      my.onContinuousLocation(this.continuousLocationCb)
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  //关闭持续定位监听
  offContinuousLocation() {
    if (my.canIUse('onContinuousLocation')) {
      my.offContinuousLocation(this.continuousLocationCb)
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  continuousLocationCb(res) {
    this.num ++ ;
    my.showToast({
      duration: 500,
      content: `第${this.num}次位置信息更新${JSON.stringify(res)}`
    });
  },
```

# 接口说明

## 1. startContinuousLocation--开始持续定位，持续产生位置信息

### 入参

| 名称             | 类型     | 描述                   | 是否必选 | 默认                                |
| :--------------- | :------- | :--------------------- | :------- | :---------------------------------- |
| callbackInterval | Number     | 持续回调间隔时间(毫秒) | N        | 默认是 2000 毫秒 最小值是 1000 毫秒 |
| success          | Function | 调用成功的回调函数。   | N        |
| fail             | Function | 调用失败的回调函数。   | N        |

### success 回调函数

出参为 Object 类型，属性如下：

| 参数    | 值   | 描述              |
| :------ | :--- | :---------------- |
| success | true | true 表示开始成功 |

### fail 回调函数

出参为  Object 类型，属性如下：

| **错误码** | **描述**  | **解决方案**  |
| :--- | :--- | :--- |
|   error  |    |    |
|  4  |   无权跨域调用    | 请用户申请权限  |
| 11  | 请确认定位相关权限已开启 高德定位未打开 返回文案：定位权限未开启 备注：Android 仅有部分机型可以有这种情况。绝大部分机型，未打开定位权限直接进不去高德。 | 请在设置中打开权限 |
| 2001 | 高德定位打开，在小程序中点击了不允许定位 返回文案：用户不允许授权 | 请在小程序右上角菜单里关于 -> 在关于页面点右上角设置，在设置页面打开权限 |

## 示例代码

```javascript
startContinuousLocation() {
  if (my.canIUse('startContinuousLocation')) {
    my.startContinuousLocation({
      ...param,
      success: (data) => {
        console.log('success', data)
      },
      fail: (data) => {
        console.log('fail', data)
        this.setData({ startResult: JSON.stringify(data) })
        my.alert({
          title: '失败',
          content: JSON.stringify(data),
        })
      },
    })
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
    my.alert({
      title: '提示',
      content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
    })
  }
}
```

## 2. stopContinuousLocation--停止持续获取位置信息

startContinuousLocation 配对使用, 单独使用没有效果, 且一定要先点击 启动持续定位，再点击停止持续定位才有效果。

### 入参

| 名称    | 类型     | 描述                 | 是否必选 | 默认 |
| :------ | :------- | :------------------- | :------- | :--- |
| success | Function | 调用成功的回调函数。 | N        |
| fail    | Function | 调用失败的回调函数。   | N        |

### success 回调函数

出参为 Object 类型，属性如下：

| 参数    | 值   | 描述              |
| :------ | :--- | :---------------- |
| success | true | true 表示停止成功 |

### fail 回调函数

出参为  Object 类型，属性如下：

| **错误码** | **描述**  | **解决方案**  |
| :--- | :--- | :--- |
|   error  |    |    |
|  4  |   无权跨域调用    | 请用户申请权限  |
| 11  | 请确认定位相关权限已开启 高德定位未打开 返回文案：定位权限未开启 备注：Android 仅有部分机型可以有这种情况。绝大部分机型，未打开定位权限直接进不去高德。 | 请在设置中打开权限 |
| 2001 | 高德定位打开，在小程序中点击了不允许定位 返回文案：用户不允许授权 | 请在小程序右上角菜单里关于 -> 在关于页面点右上角设置，在设置页面打开权限 |

## 示例代码

```javascript
stopContinuousLocation() {
  if (my.canIUse('startContinuousLocation')) {
    my.stopContinuousLocation({
      success: (data) => {
        console.log('success', data)
      },
      fail: (error) => {
        my.alert({
          title: '失败',
          content: JSON.stringify(error),
        })
      },
    })
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
    my.alert({
      title: '提示',
      content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
    })
  }
},

},
```

## 3. onContinuousLocation--订阅持续定位信息

### 入参

| 名称     | 类型     | 描述 | 是否必选 | 默认 |
| :------- | :------- | :--- | :------- | :--- |
| callBack | Function |      | N        |

### callBack 回调函数

出参为 Object 类型，属性如下：

| 名称      | 类型   | 描述           |
| :-------- | :----- | :------------- |
| latitude  | Nubmer | 纬度           |
| longitude | Number | 经度           |
| accurary  | Nubmer    | 精确度，单位 m |

异常时的处理：
如果在持续定位过程中，小程序的持续定位权限后者高德 app 的定位权限被关闭，那么将不会返回数据。

备注：
不调用时，要及时调用 stopContinuousLocation 停止持续定位。
由于计算机对浮点数的表示不精确，所以上述浮点数的精度有可能会出现表示不精确的情况，这时候可能会不止两位，比如可能会出现：0.02000000000000001 这种情况。
由于是否允许小程序使用用户位置在 getCurrentLocation 中也有，所以如果小程序在 getCurrentLocation 中已经授权了，那么再调用持续定位接口的时候就不会再次提醒了。

## 示例代码

```javascript
onContinuousLocation() {
  if (my.canIUse('onContinuousLocation')) {
    my.onContinuousLocation((res) => {
      console.log(res);
    });
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
    my.alert({
      title: '提示',
      content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
    })
  }
},
```

## 4. offContinuousLocation--取消订阅持续定位位置信息

### 入参

1、和注册监听调用 onContinuousLocation 时相同的 callBack，则取消相应 callBack 的监听

2、传空，则取消所有的监听

3、传没有传递给 onContinuousLocation 的 callBack，则不起作用

### callBack 回调函数

出参为 Object 类型，属性如下：

| 参数    | 值   | 描述              |
| :------ | :--- | :---------------- |
| success | true | true 表示停止成功 |

#### 注意事项

在调用 startContinuousLocation 之前请确保之前所有开启的持续定位都被关闭（即都被调用了 stopContinuousLocaiton）,否则之前持续定位消息源仍然会持续发送消息，之前的监听以及新的监听将会收到两个消息源发送的消息而引起错乱。同时如果之前的监听不想接收消息要及时取消监听，否则及时之前的消息源被 stop 掉了，在新的消息开始时其还会收到新的消息。

## 示例代码

```javascript
offContinuousLocation(){
  if (my.canIUse('onContinuousLocation')) {
    my.offContinuousLocation()
  } else {
    // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
    my.alert({
      title: '提示',
      content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
    })
  }
},
```
