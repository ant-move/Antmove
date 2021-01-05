# 地图

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563452468073.png)

## my.createMapContext(mapId)

创建并返回一个 map 上下文对象  `mapContext`。

### MapContext.moveToLocation()

> 移动视野到定位点并恢复到默认缩放级别，需要配合 map 组件的 show-location 使用

```javascript
this.mapCtx.moveToLocation()
```

### MapContext.gestureEnable(Object)

> 设置所有手势是否可用，1：可用 ，0：不可用

```javascript
this.mapCtx.gestureEnable({ isGestureEnable: 1 })
```

### MapContext.showsScale(Object)

> 设置比例尺控件是否可见，1：可见 ，0：不可见

```javascript
this.mapCtx.showsScale({ isShowsScale: 1 })
```

### MapContext.showsCompass(Object)

> 设置指南针是否可见，1：可见 ，0：不可见

```javascript
this.mapCtx.showsCompass({ isShowsCompass: 1 })
```

### MapContext.showRoute(Object)

> 规划步行路线，只能显示一条<br />最低版本v9.10.0

```javascript
this.mapCtx.showRoute({
    searchType:"bus",                 // 搜索类型: 有"walk", "bus", "drive", "ride", 默认值为walk
    startLat: 39.908823,              // 起点纬度
    startLng: 116.397470,             // 起点经度
    endLat: 39.972499,                // 终点纬度
    endLng: 116.420929,               // 终点经度
    throughPoints: [{ lat: 39.920747, lng: 116.432846 }, { lat: 39.930686, lng: 116.446751 }],//途径点：仅驾车规划有效，searchType=“drive”
    iconPath: "/image/map_alr.png",   // 路线纹理  在3d地图下提供了默认的纹理图案。
    iconWidth:10,                     // 纹理宽度  在3d地图下提供了默认的纹理宽度。
    zIndex:4                          // 覆盖物 Z 轴坐标
    mode: 0                           // 只有驾车模式和公交模式支持，可选,具体值见下表
    city:'beijing',                   // 公交模式下必填
    destinationCity:'beijing',        // 公交跨城模式下必填
})
```

| mode | bus          | drive                                                  |
| ---- | ------------ | ------------------------------------------------------ |
| 0    | 最快捷模式   | 速度优先（时间）                                       |
| 1    | 最经济模式   | 费用优先（不走收费路段的最快道路）                     |
| 2    | 最少换乘模式 | 距离优先                                               |
| 3    | 最少步行模式 | 不走快速路                                             |
| 4    | 最舒适模式   | 结合实时交通（躲避拥堵）                               |
| 5    | 不乘地铁模式 | 多策略（同时使用速度优先、费用优先、距离优先三个策略） |
| 6    | -            | 不走高速                                               |
| 7    | -            | 不走高速且避免收费                                     |
| 8    | -            | 躲避收费和拥堵                                         |
| 0    | -            | 不走高速且躲避收费和拥堵                               |

### MapContext.clearRoute()

> 清除地图上的步行导航路线

```javascript
this.mapCtx.clearRoute();
```

### MapContext.getCenterLocation(Callback)

> 获取当前地图中心位置

```javascript
this.mapCtx.getCenterLocation(function(res) {
  console.log(res.longitude)
  console.log(res.latitude)
  console.log(res.scale)
})
```

### MapContext.updateComponents(Object)

> 增量更新地图接口

```javascript
this.mapCtx.updateComponents({
  scale: 14,
  longitude: 116.49462,
  latitude: 39.985028,
  command:{
      // marker动画
      markerAnim:[
          {
            type:0           // 跳动动画 10.1.35
            markerId:xxx,
          }
      ],
  },
  setting:{
      // 手势
      gestureEnable:0/1,
      // 比例尺
      showScale:0/1,
      // 指南针
      showCompass:0/1,
      // 双手下滑
      tiltGesturesEnabled:0/1,
      // 交通路况展示
      trafficEnabled:0/1,
      // 地图POI信息
      showMapText:0/1,
      // 高德地图logo位置
      logoPosition:{centerX:150, centerY:90},
  },
  markers:[{},{}],
  polylines:[{},{}],
  include-points:[{},{}],
  include-padding:{left:0, right:0, top:0, bottom:0},
})
```

### MapContext.translateMarker(Object)
平移marker接口<br />备注：对同一个markerId在translateMarker没animationEnd之前再次调动会被丢掉，下一次动画需要在animationEnd之后再调用才有效。<br />最低版本9.10.0
```javascript
this.mapCtx.translateMarker({
  markerId: xxx, // 必填
  destination: {
    longitude: xxx, // 必填
    latitude: xxx // 必填
  },
  autoRotate: true/false, // 选填，默认true
  rotate: xxx,  // 选填，在autoRotate为false的情况下才有效，不填默认是0
  duration: 1000,  // 选填，单位ms，默认1000ms
  animationEnd: xxx   //function 动画结束回调    
})
```

## Marker 图鉴

### Marker 样式优先级说明

customcallout，callout 和 label 互斥，优先级：label > customcallout > callout<br />style 与 icon 互斥，优先级：style > iconAppendStr；style > icon

# Marker.callout

#### marker 上的气泡 callout
| 属性 | 说明 | 类型 | 默认值 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| content | 文本 | string |  | v9.20 |
| color | 文本颜色 | string | #7c7c7c | v9.20 |
| fontSize | 文字大小 | number | 11 | v9.20 |
| borderRadius | 边框圆角 | number | 6 | v9.20 |
| borderWidth | 边框宽度 | number | 0 | v9.20 |
| borderColor | 边框颜色 | string |  | v9.20 |
| bgColor | 背景色 | string | #FFFFFF | v9.20 |
| padding | 文本边缘留白 | number | 10 | v9.20 |
| display | 'BYCLICK':点击显示; 'ALWAYS':常显 | string | BYCLICK | v9.20 |
| textAlign | 文本对齐方式。有效值: left, right, center | string | left | v9.20 |

### style

 <table border="1">
  <tr>
    <th>结构</th>
    <th>图鉴</th>
    <th>支持版本</th>
  </tr>
  <tr>
    <td width="38%">
    <pre>
    <code>
    {
      type:1,
      text1:"Style1",
      icon1:'xxx',
      icon2:'xxx'
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1537428922033-7f44ea7c-6f28-43cc-a5d0-80cc4cf0213b.png">
    </td>
    <td width="12%" align="center">v8.90 </td>
  </tr>
  <tr>
    <td width="38%">
    <pre>
    <code>
    {
      type:2,
      text1:"Style2",
      icon1:'xxx',
      icon2:'xxx'
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1537428730637-bd21f41b-3352-4c42-a2ba-0dca4012b0e3.png">
    </td>
    <td width="12%" align="center">v8.90 </td>
  </tr>
</table>

### customcallout

<table border="1">
  <tr>
    <th>结构</th>
    <th>图鉴</th>
    <th>支持版本</th>
  </tr>
  <tr>
    <td width="38%">
    <pre>
    <code>
    {
      "type": 0,
      "time": "3",
      "descList": [{
        "desc": "点击立即打车",
        "descColor": "#ffffff"
      }],
      "isShow": 1
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1537429397117-959401db-99f0-48b1-a15d-9817d441d978.png">
    </td>
    <td width="12%" align="center">v8.90 </td>
  </tr>
  <tr>
    <td width="38%">
    <pre>
    <code>
    {
      "type": 1,
      "time": "3",
      "descList": [{
          "desc": "点击立即打车",
          "descColor": "#333333"
      }],
      "isShow": 1
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1537429638548-7a7dd421-7bc7-4849-8498-e8a9a3381618.png">
    </td>
    <td width="12%" align="center">v8.90 </td>
  </tr>
  <tr>
    <td width="38%">
    <pre>
    <code>
    {
      "type": 2,
      "descList": [{
        "desc": "预计",
        "descColor": "#333333"
      }, {
        "desc": "5分钟",
        "descColor": "#108EE9"
      }, {
        "desc": "到达",
        "descColor": "#333333"
      }],
      "isShow": 1
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1537429958605-eff755af-bc25-40bd-b697-1d4c2e1be712.png">
    </td>
    <td width="12%" align="center">v8.90 </td>
  </tr>
</table>

### label

- content：必填
- color：选填，默认"#000000"
- fontsize：选填，默认 14
- borderRadius：选填，默认 20
- bgColor：选填，默认"#FFFFFF"
- padding：选填，默认 10

<table border="1">
  <tr>
    <th>结构</th>
    <th>图鉴</th>
    <th>支持版本</th>
  </tr>
  <tr>
    <td width="38%">
    <pre>
    <code>
    {
      content:"Hello Label",
      color:"#000000",
      fontSize:16,
      borderRadius:5,
      bgColor:"#ffffff",
      padding:12,
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1537430323991-11bf3fb8-58e7-4416-be4c-2700cdc8f3ec.png">
    </td>
    <td width="12%" align="center">v8.90 </td>
  </tr>
</table>

### MapContext.getRegion(Object)

> 获取当前地图的视野范围，最低版本 v10.00.0

入参:

| 属性     | 类型     | 默认值    | 必须参数 | 描述                                             |
| -------- | -------- | --------- | -------- | ------------------------------------------------ |
| success  | function |  | 否       | 接口调用成功的回调函数                           |
| fail     | function |  | 否       | 接口调用失败的回调函数                           |
| complete | function |  | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

success 返回值：

| 属性      | 类型   | 描述         |
| --------- | ------ | ------------ |
| southwest | Object | 西南角经纬度 |
| northeast | Object | 东北角经纬度 |

southwest 和 northeast 类型定义：

| 属性      | 类型   | 描述 |
| --------- | ------ | ---- |
| longitude | number | 经度 |
| latitude  | number | 纬度 |

fail 返回值：

| 错误码     |  描述   | 解决方案 |
| ---------  | ------ | ----   |
| error       |       |        |
| 3          | 其它错误 |       |

使用举例：

```javascript
if (this.mapCtx.getRegion) {
  this.mapCtx.getRegion({
    success: (res) => {
      console.log('success')
      console.log(res.southwest)
      console.log(res.northeast)
      my.alert({
        title: 'success',
        content: JSON.stringify(res),
      })
    },
    fail: (error) => {
      console.log('fail')
      my.alert({
        title: 'fail',
        content: JSON.stringify(error),
      })
    },
    complete: () => {
      console.log('complete')
    },
  })
} else {
  my.alert({
    title: '提示',
    content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
  })
}
```

### MapContext.screenToMap(Object)

> 屏幕坐标转经纬度，最低版本 v10.00.0

入参:

| 属性     | 类型     | 默认值    | 必须参数 | 描述                                             |
| -------- | -------- | --------- | -------- | ------------------------------------------------ |
| x        | number   |  | 是       | 屏幕水平方向 x 轴坐标                            |
| y        | number   |  | 是       | 屏幕水平方向 y 轴坐标                            |
| success  | function |  | 否       | 接口调用成功的回调函数                           |
| fail     | function |  | 否       | 接口调用失败的回调函数                           |
| complete | function |  | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

success 返回值：

| 属性      | 类型   | 描述 |
| --------- | ------ | ---- |
| longitude | number | 经度 |
| latitude  | number | 纬度 |

fail 返回值：

| 错误码    |  描述                     | 解决方案              |
| --------- | ------                   | ----                  |
| error     |                          |                       |
| 2         | 输入参数不正确(类型、范围) |  提示用户输入正确的参数 |
| 3         | 其它错误                  |                       |

使用举例：

```javascript
if (this.mapCtx.screenToMap) {
  this.mapCtx.screenToMap({
    x: 10,
    y: 20,
    success: (res) => {
      console.log('success')
      console.log(res.longitude)
      console.log(res.latitude)
      my.alert({
        title: 'success',
        content: JSON.stringify(res),
      })
    },
    fail: (error) => {
      my.alert({
        title: 'fail',
        content: JSON.stringify(error),
      })
    },
    complete: () => { console.log('complete') },
  })
} else {
  my.alert({
    title: '提示',
    content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
  })
}
```

### MapContext.mapToScreen(Object)

> 经纬度转屏幕坐标，最低版本 v10.00.0

入参:

| 属性      | 类型     | 默认值    | 必须参数 | 描述                                             |
| --------- | -------- | --------- | -------- | ------------------------------------------------ |
| longitude | number   |  | 是       | 经度                                             |
| latitude  | number   |  | 是       | 纬度                                             |
| success   | function |  | 否       | 接口调用成功的回调函数                           |
| fail      | function |  | 否       | 接口调用失败的回调函数                           |
| complete  | function |  | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

success 返回值：

| 属性 | 类型   | 描述                  |
| ---- | ------ | --------------------- |
| x    | number | 屏幕水平方向 x 轴坐标 |
| y    | number | 屏幕水平方向 y 轴坐标 |

fail 返回值：

| 错误码      | 描述   | 解决方案 |
| --------- | ------ | ---- |
| error     |       |                |
| 2  | 输入参数不正确(类型、范围) | 提示用户输入正确的参数 |
| 3 | 其它错误                 |                        |

使用举例：

```javascript
if (this.mapCtx.mapToScreen) {
  this.mapCtx.mapToScreen({
    latitude: 39.903823,
    longitude: 116.392470,
    success: (res) => {
      console.log('success')
      console.log(res.x)
      console.log(res.y)
      my.alert({
        title: 'success',
        content: JSON.stringify(res),
      })
    },
    fail: (error) => {
      console.log('fail')
      my.alert({
        title: 'fail',
        content: JSON.stringify(error),
      })
    },
    complete: () => { console.log('complete') },
  })
} else {
  my.alert({
    title: '提示',
    content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
  })
}
```

### MapContext.getScale(Object)

> 获取当前地图的 scale，最低版本 v9.10.0

入参:

| 属性     | 类型     | 默认值    | 必须参数 | 描述                                             |
| -------- | -------- | --------- | -------- | ------------------------------------------------ |
| success  | function |  | 否       | 接口调用成功的回调函数                           |
| fail     | function |  | 否       | 接口调用失败的回调函数                           |
| complete | function |  | 否       | 接口调用结束的回调函数（调用成功、失败都会执行） |

success 返回值：

| 属性  | 类型   | 描述         |
| ----- | ------ | ------------ |
| scale | number | 地图的 scale |

fail 返回值：

| 错误码      | 描述   | 解决方案 |
| --------- | ------ | ---- |
| error     |       |       |
| 3        | 其它错误 |  |

使用举例：

```javascript
if (this.mapCtx.getScale) {
  this.mapCtx.getScale({
    success(res) {
      console.log('获取成功')
      console.log(res)
      my.alert({
        title: 'success',
        content: JSON.stringify(res),
      })
    },
    fail(error) {
      my.alert({
        title: 'fail',
        content: JSON.stringify(error),
      })
    },
    complete() {
      console.log('complete')
    },
  })
}
```
