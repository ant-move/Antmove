# map

页面链接。扫码体验：<br />![navigator.png](https://cache.amap.com/ecology/tool/miniapp/1563531364561.png)

## 介绍

该组件是地图组件。同一个页面需要展示多个 map 组件的话，需要使用不同的 ID 。

**相关API：**[my.createMapContext(mapId)](../api/map)

## 使用说明

- `map` 组件是由客户端创建的原生组件，原生组件的层级是最高的，所以页面中的其他组件无论设置 `z-index` 为多少，都无法在原生组件之上。
- 请勿在 `scroll-view` 中使用 `map` 组件。
- css 动画对 `map` 组件无效。
- 缩小或者放大了地图比例尺之后，请在 `onRegionChange` 函数中重新设置 `data` 的 `scale` 值，否则会出现拖动地图区域后，重新加载导致地图比例尺又变回缩放前的大小，具体请参照示例代码`regionchange` 函数部分。

<table border="1">
  <tr>
    <th>属性名</th>
    <th>类型</th>
    <th>默认值</th>
    <th>说明</th>
    <th>支持版本</th>
  </tr>
  <tr>
    <td>style</td>
    <td>String</td>
    <td> </td>
    <td>内联样式</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>class</td>
    <td>String</td>
    <td> </td>
    <td>样式名</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>longitude</td>
    <td>StriNumberng</td>
    <td> </td>
    <td>中心经度</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>latitude</td>
    <td>StriNumberng</td>
    <td> </td>
    <td>中心纬度</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>scale	</td>
    <td>Number</td>
    <td>16</td>
    <td>缩放级别，取值范围为 5-18</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>markers</td>
    <td>Array</td>
    <td> </td>
    <td>覆盖物，在地图上的一个点绘制图标</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>polyline</td>
    <td>Array</td>
    <td> </td>
    <td>覆盖物，多个连贯点的集合（路线）</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>circles</td>
    <td>Array</td>
    <td> </td>
    <td>覆盖物，圆</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>controls</td>
    <td>Array</td>
    <td> </td>
    <td>覆盖物，多边形</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>show-location</td>
    <td>Boolean</td>
    <td> </td>
    <td>是否显示带有方向的当前定位点</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>include-points</td>
    <td>Array</td>
    <td> </td>
    <td>
      视野将进行小范围延伸包含传入的坐标
      <pre>
        <code>
          [{
            latitude: 30.279383,
            longitude: 120.131441,
          }]
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>include-padding</td>
    <td>Object</td>
    <td> </td>
    <td>
      视野在地图padding范围内展示
      <pre>
        <code>
          {
            left:0, right:0,
            top:0, bottom:0
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>ground-overlays</td>
    <td>Array</td>
    <td> </td>
    <td>
      覆盖物，自定义贴图
      <pre>
        <code>
          [{
            // 右上，左下
            'include-points':[{
                latitude: 39.935029,
                longitude: 116.384377,
            },{
                latitude: 39.939577,
                longitude: 116.388331,
            }],
            image:'/image/overlay.png',
            alpha:0.25,
            zIndex:1
          }]
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>setting</td>
    <td>Object</td>
    <td> </td>
    <td>
      设置
      <pre>
        <code>
          {
            // 手势
            gestureEnable: 1,
            // 比例尺
            showScale: 1,
            // 指南针
            showCompass: 1,
            //双手下滑
            tiltGesturesEnabled: 1,
            // 交通路况展示
            trafficEnabled: 0,
            // 地图 POI 信息
            showMapText: 0,
            // 高德地图 logo 位置
            logoPosition: {
              centerX: 150,
              centerY: 90
            }
          }
        </code>
      </pre>
    </td>
    <td>v9.05.0</td>
  </tr>
  <tr>
    <td>onMarkerTap</td>
    <td>EventHandle</td>
    <td> </td>
    <td>
      点击Marker时触发
      <pre>
        <code>
          {
            markerId,
            latitude,
            longitude, 
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>onCalloutTap</td>
    <td>EventHandle</td>
    <td> </td>
    <td>
      点击Marker对应的callout时触发
      <pre>
        <code>
          {
            markerId,
            latitude,
            longitude, 
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>onControlTap</td>
    <td>EventHandle</td>
    <td> </td>
    <td>
      点击control时触发
      <pre>
        <code>
          {
            controlId
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>onRegionChange</td>
    <td>EventHandle</td>
    <td> </td>
    <td>
      视野发生变化时触发
      <pre>
        <code>
          {
            type: "begin/end", 
            latitude,
            longitude, 
            scale
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>onTap</td>
    <td>EventHandle</td>
    <td> </td>
    <td>
      点击地图时触发
      <pre>
        <code>
          {
            latitude,
            longitude, 
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
</table>

### markers
标记点，用于在地图上显示标记的位置。

<table  border="1">
  <tr>
    <th>属性名</th>
    <th>说明</th>
    <th>类型</th>
    <th>必填</th>
    <th>备注</th>
    <th>最低版本</th>
  </tr>
  <tr>
    <td>id</td>
    <td>标记点id</td>
    <td>Number</td>
    <td>否</td>
    <td>标记点 id，点击事件回调会返回此 id</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>latitude</td>
    <td>纬度</td>
    <td>Float</td>
    <td>是</td>
    <td>范围 -90 ~ 90</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>longitude</td>
    <td>经度</td>
    <td>Float</td>
    <td>是</td>
    <td>范围 -180 ~ 180</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>title</td>
    <td>标注点名</td>
    <td>String</td>
    <td>否</td>
    <td> </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>iconPath</td>
    <td>显示的图标</td>
    <td>String</td>
    <td>是</td>
    <td>项目目录下的图片路径，可以用相对路径写法，以'/'开头则表示相对小程序根目录</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>rotate</td>
    <td>旋转角度</td>
    <td>Number</td>
    <td>否</td>
    <td>顺时针旋转的角度，范围 0 ~ 360，默认为 0</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>alpha</td>
    <td>标注的透明度</td>
    <td>Number</td>
    <td>否</td>
    <td>是否透明，默认为 1</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>width</td>
    <td>标注图标宽度</td>
    <td>Number</td>
    <td>否</td>
    <td>默认为图片的实际宽度</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>height</td>
    <td>标注图标高度</td>
    <td>Number</td>
    <td>否</td>
    <td>默认为图片的实际高度</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>callout</td>
    <td>自定义标记点上方的气泡窗口</td>
    <td>Object</td>
    <td>否</td>
    <td>
      marker 上的气泡，地图上最多同时展示一个，绑定onCalloutTap
      <pre>
        <code>
          {
            content:"xxx"
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>anchorX</td>
    <td>经纬度在标注图标的锚点-横向值</td>
    <td>Double</td>
    <td>否</td>
    <td rowspan="2">
      这两个值需要成对出现，anchorX表示横向(0-1)，y表示竖向(0-1)，
      anchorX:0.5,
      anchorY:1
      表示底边中点
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>anchorY</td>
    <td>经纬度在标注图标的锚点-竖向值</td>
    <td>Double</td>
    <td>否</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>customCallout</td>
    <td>callout背景自定义目前只支持高德地图style</td>
    <td>Object</td>
    <td>否</td>
    <td>
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
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>fixedPoint</td>
    <td>基于屏幕位置扎点</td>
    <td>Object</td>
    <td>否</td>
    <td>
      基于屏幕位置扎点
      <pre>
        <code>
          {
            //距离地图左上角的像素数,Number
            originX:100, 
            originY:100  
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>markerLevel</td>
    <td>marker在地图上的绘制层级</td>
    <td>Number</td>
    <td>否</td>
    <td>与地图上其他覆盖物统一的 Z 坐标系</td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td>label</td>
    <td>marker 上的气泡</td>
    <td>Object</td>
    <td>否</td>
    <td>
      marker 上的气泡，地图上可同时展示多个，绑定onMarkerTap
      <pre>
        <code>
          {
            content:"Hello Label",
            color:"#000000",
            fontSize:12,
            borderRadius:3,
            bgColor:"#ffffff",
            padding:5,
          }
        </code>
      </pre>
    </td>
    <td>v8.90.0</td>
  </tr>
  <tr>
    <td rowspan="2">style</td>
    <td>自定义marker样式</td>
    <td>Object</td>
    <td>否</td>
    <td>自定义marker的样式和内容，IOS上icon1和icon2必填(仅支持本地图片，暂不支持网络图片)</td>
    <td rowspan="2">v8.90.0</td>
  </tr>
  <tr>
    <td colspan="4" align="center">
      <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1536638990818-45f93fb6-f74f-4038-8302-b45fee25b7f1.png#width=435">
    </td>
  </tr>
</table>

### polyline

用于指定一系列坐标点，从数组第一项连线至最后一项。

| 属性名     | 说明              | 类型    | 必填 | 备注                                                                                                                                                                                  | 支持程度 |
| :--------- | :---------------- | :------ | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| points     | 经纬度数组        | Array   | 是   | `[{latitude: 0,longitude: 0}]`                                                                                                                                                        | v.8.90.0 |
| color      | 线的颜色          | String  | 否   | 用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA                                                                                                                               | v.8.90.0 |
| width      | 线的宽度          | Number  | 否   |                                                                                                                                                                                       | v.8.90.0 |
| dottedLine | 是否虚线          | Boolean | 否   | 默认 false                                                                                                                                                                            | v.8.90.0 |
| iconWidth  | 使用纹理时的宽度  | Number  | 否   |                                                                                                                                                                                       | v.8.90.0 |
| zIndex     | 覆盖物的 Z 轴坐标 | Number  |      |                                                                                                                                                                                       | v.8.90.0 |
| colorList  | 彩虹线            | Array   |      | 彩虹线，分段依据 points。例如 points 有 5 个点，那么 colorList 就应该传 4 个颜色值，依此类推。如果 colorList 数量小于 4，那么剩下的线路颜色和最后一个颜色一样 `["#AAAAAA","#BBBBBB"]` | v.8.90.0 |


<div style="display: none;">
| iconPath | 纹理 | String | | 项目目录下的图片路径 | v.8.90.0 |

> 注意：
1. iconPath 的图片是本地的，且大小是 2 的 N 次幂，此外 iconPath 图片的宽高最好是 width 的 3 倍以上，否则会被拉伸变虚。
2. Android 上如果设置了 iconPath，会忽略 color，(可以用 marker style 的{type: 3}来设置，达到相同的效果)。
3. iconPath 可以和 colorList 联合使用，这样纹理会浮在彩虹线上方，为避免覆盖彩虹线，纹理图片背景色可以设置透明(支持程度： Android: v8.90.0, ios: v9.05.0)。
</div>

### polygon
用于构造多边形对象

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| points | 经纬度数组 | Array | 是 | [{latitude: 0, longitude: 0}] |
| color | 线的颜色 | String | 否 | 用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA |
| fillColor | 填充色 | String | 否 | 用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA |
| width | 线的宽度 | Number | 否 |  |

### circles
用于在地图上显示圆

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| latitude | 纬度 | Float | 是 | 范围 -90 ~ 90 |
| longitude | 经度 | Float | 是 | 范围 -180 ~ 180 |
| color | 描边的颜色 | String | 否 | 用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA |
| fillColor | 填充颜色 | String | 否 | 用 8 位十六进制表示，后两位表示 alpha 值，如：#eeeeeeAA |
| radius | 半径 | Number | 是 |  |
| strokeWidth | 描边的宽度 | Number | 否 |  |

### controls
用于在地图上显示控件，控件不随着地图移动

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| id | 控件id | Number | 否 | 控件 id,点击事件回调会返回此 id |
| position | 控件在地图的位置 | Object | 是 | 相对地图位置 |
| iconPath | 显示的图标 | String | 是 | 项目目录下的图片路径，可以用相对路径写法，以'/'开头则表示相对小程序根目录 |
| clickable | 是否可点击 | Boolean | 否 | 默认为false |

### position
控件在地图的位置，以及控件的大小

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| left | 距离地图的左边界多远 | Number | 否 | 默认为0 |
| top | 距离地图的上边界多远 | Number | 否 | 默认为0 |
| width | 控件宽度 | Number | 否 | 默认为图片宽度 |
| height | 控件高度 | Number | 否 | 默认为图片高度 |

### callout
自定义标记点上方的气泡窗口

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| content | 内容 | String | 否 | 默认为空（null） |

### customCallout
自定义 callout 背景。
目前只支持高德地图 style 。

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| type | 样式类型 | Number | 是 | 0为黑色style,1为白色style,2为背景+文本，见下图 |
| time | 时间 | String | 是 | 时间值 |
| descList | 描述数组 | Array | 是 | 描述数组 |

描述数组格式：
```json
{ 
  "type": 0,
  "time": "3",
  "descList": [{ 
    "desc": "点击立即打车",
    "descColor": "#ffffff" 
  }],
  "isShow": 1 
}
```

![](https://cdn.nlark.com/lark/0/2018/png/5797/1533049193312-8625a346-1eef-4bea-b861-cdc45e34ead2.png#align=left&display=inline&height=267&originHeight=738&originWidth=750&status=done&width=271)<br />
fixedPoint

| 属性名 | 说明 | 类型 | 必填 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| originX | 横向像素点 | Number | 是 | 距离地图左上角的像素数值，从0开始 |
| originY | 纵向像素点 | Number | 是 | 距离地图左上角的像素数值，从0开始 |

地图组件的经纬度是必填的, 如果不填经纬度默认是北京的经纬度。

## Marker 图鉴

### Marker 样式优先级说明

customcallout，callout 和 label 互斥，优先级：label > customcallout > callout<br />style 与 icon 互斥，优先级：style > iconAppendStr；style > icon

### style

 <table border="1">
  <tr>
    <th>结构</th>
    <th>图鉴</th>
    <th>支持版本</th>
  </tr>
  <tr>
    <td>
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
    <td>
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
  <tr>
    <td width="45%">
    <pre>
    <code>
    {
      type:3,
      icon:xxx,  //选填
      text:xxx,  //必填
      color:xxx,  //默认#33B276
      bgColor:xxx,  //默认#FFFFFF  
      gravity:"left/center/right", //默认 center
      fontType:"small/standard/large"  //默认standard
    }
    </code>
    </pre>
  </td>
    <td align="center">
    <img src="https://cdn.nlark.com/lark/0/2018/png/36245/1539856153541-8cecb299-4d29-4661-847b-8abe912081fc.png#width=200">
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



### Screenshot
![](https://zos.alipayobjects.com/rmsportal/OnLulyUGNioyTDmYrOnP.png#align=left&display=inline&height=906&originHeight=911&originWidth=750&status=done&width=746)

### 示例
```html
<view class="page">
  <view class="page-description">地图</view>
  <view class="page-section">
    <view class="page-section-demo">
      <map
        id="map"
        longitude="120.131441"
        latitude="30.279383"
        scale="{{scale}}"
        controls="{{controls}}"
        onControlTap="controltap"
        markers="{{markers}}"
        onMarkerTap="markertap"
        polyline="{{polyline}}"
        polygon="{{polygon}}"
        circles="{{circles}}"
        onRegionChange="regionchange"
        onCalloutTap="calloutTap"
        onTap="tap"
        show-location
        style="width: 100%; height: 300px;"
        include-points="{{includePoints}}"
        include-padding="{{includePading}}"
        ground-overlays="{{groundOverlays}}"
        setting="{{setting}}"
      >
      </map>
      <view class="page-section-btns">
        <view><button type="primary" plain onTap="addMarkers">添加Markers</button></view>
        <view><button type="primary" plain onTap="addPolyline">添加Polyline</button></view>
        <view><button type="primary" plain onTap="addCircles">添加Circles</button></view>
      </view>
      <view class="page-section-btns">
        <view><button type="primary" plain onTap="addPolygon">添加Polygon</button></view>
        <view><button type="primary" plain onTap="setting">setting</button></view>
        <view><button type="primary" plain onTap="addControls">controls</button></view>
      </view>
      <view class="page-section-btns">
        <view><button type="primary" plain onTap="includePoints">includePoints</button></view>
        <view><button type="primary" plain onTap="includePading">includePading</button></view>
        <view><button type="primary" plain onTap="groundOverlays">groundOverlays</button></view>
      </view>
      <view class="page-section-btns">
        <view><button type="primary" plain onTap="clearAll">全部清空</button></view>
      </view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    includePading: {},
    groundOverlays: [],
    setting: {},
    markers: [],
    polygon: [],
    includePoints: [],
    polyline: [],
    circles: [],
    controls: [],
  },
  controltap(e) {
    console.log('controltap', e)
  },
  tap(e) {
    console.log('tap', e)
  },
  markertap(e) {
    console.log('markertap', e)
  },
  calloutTap(e) {
    console.log('calloutTap', e)
  },
  regionchange(e) {
    console.log('regionchange', e)
  },
  addMarkers() {
    this.setData({
      markers: [{
        iconPath: '/image/mark_bs.png',
        id: 1,
        latitude: 30.279252,
        longitude: 120.124368,
        // width: 30,
        // height: 30,
        // title: '定位1',
        // rotate: 15,
        // alpha: 0.5,
        // callout: {
        //   content: '标记位置',
        // },
        // label: {
        //   content: 'Hello Label',
        //   color: '#000000',
        //   fontSize: 12,
        //   borderRadius: 3,
        //   bgColor: '#ffffff',
        //   padding: 5,
        // },
        // style: {
        //   type: 1,
        //   text1: '敌军呢',
        //   icon1: '/image/icon/map.png',
        //   icon2: '/image/icon/map.png',
        // },
        // anchorX: 0.5,
        // anchorY: 1,
        // markerLevel: 10,
        // customCallout: {
        //   type: 0,
        //   time: "3",
        //   descList: [{
        //     desc: "点击立即打车",
        //     descColor: "#ffffff",
        //   }],
        //   "isShow": 1,
        // },
        // fixedPoint: {
        //   originX: 100,
        //   originY: 100,
        // },
      },
      {
        iconPath: '/image/mark_bs.png',
        id: 1,
        latitude: 30.283830,
        longitude: 120.131441,
      }],
    })
  },
  addPolyline() {
    this.setData({
      polyline: [{
        points: [{
          longitude: 120.131441,
          latitude: 30.279383,
        }, {
          longitude: 120.128821,
          latitude: 30.278200,
        }, {
          longitude: 120.131618,
          latitude: 30.277600,
        }, {
          longitude: 120.132520,
          latitude: 30.279393,
        }, {
          longitude: 120.137517,
          latitude: 30.279383,
        }],
        color: '#ff0000dd',
        width: 5,
        dottedLine: false,
        iconWidth: 5,
        zIndex: 1,
        iconPath: '/image/map_alr.png',
        // colorList: ["#00ff00", "#0000ff"],
      }],
    })
  },
  addCircles() {
    this.setData({
      circles: [{
        latitude: 30.279383,
        longitude: 120.131441,
        color: '#000000aa',
        fillColor: '#000000aa',
        radius: 100,
        strokeWidth: 20,
      }],
    })
  },
  addPolygon() {
    this.setData({
      polygon: [{
        points: [{// 右上
          latitude: 30.279383,
          longitude: 120.131441,
        },
        {
          latitude: 30.283830,
          longitude: 120.131441,
        },
        {
          latitude: 30.283830,
          longitude: 120.139241,
        },
        {
          latitude: 30.279383,
          longitude: 120.139241,
        }],
        fillColor: '#BB0000DD',
        color: '#eeeeeeAA',
        width: 5,
      }],
    })
  },
  addControls() {
    this.setData({
      controls: [{
        id: 5,
        iconPath: '/image/map_alr.png',
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50,
        },
        clickable: true,
      }],
    })
  },
  includePoints() {
    this.setData({
      includePoints: [{
        latitude: 30.279252,
        longitude: 120.124368,
      },
      {
        longitude: 120.133441,
        latitude: 30.279383,
      }],
    })
  },
  includePading() {
    this.setData({
      includePading: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
    })
  },
  setting() {
    this.setData({
      setting: {
        // 手势
        gestureEnable: 1,
        // 比例尺
        showScale: 1,
        // 指南针
        showCompass: 1,
      },
    })
  },
  groundOverlays() {
    this.setData({
      groundOverlays: [
        {
          // 右上，左下
          'include-points': [{
            longitude: 120.131441,
            latitude: 30.279383,
          },
          {
            longitude: 120.133041,
            latitude: 30.281383,
          }],
          image: '/image/mark_bs.png',
          alpha: 0.5,
          zIndex: 1,
        },
      ],
    })
  },
  clearAll() {
    this.setData({
      scale: 14,
      longitude: 120.131441,
      latitude: 30.279383,
      includePading: {},
      groundOverlays: [],
      setting: {},
      markers: [],
      polygon: [],
      includePoints: [],
      polyline: [],
      circles: [],
      controls: [],
    })
  },
})
```

### Tips

- `map` 组件是由客户端创建的原生组件，它的层级是最高的。
- 请勿在 `scroll-view` 中使用 `map` 组件。
- css 动画对 `map` 组件无效。
- 如果缩小或者放大了地图比例尺以后，请在 `onRegionChange` 函数中重新设置 `data` 的 `scale` 值，否则会出现拖动地图区域后，重新加载导致地图比例尺又变回缩放前的大小，具体请参照上面的示例代码 `regionchange` 函数部分。
- `regionchange`返回值的`type`为`begin`类型时的经纬度， 不是本次设置的中心点经纬度， 返回值的`type`为`end`类型时的经纬度，是本次设置的中心点经纬度
