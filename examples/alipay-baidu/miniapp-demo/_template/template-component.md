# 组件名称<script>//英文且是使用时的名称，如：scroll-view view</script>

功能描述。

- 也可以写个列表
- 列表
  > 注意事项可以写在这

使用高德地图 app 扫码预览
![组件名字](地址)

## 属性

| 属性名    | 类型   | 默认值      | 描述     | 最低版本 |
| :-------- | :----- | :---------- | :------- | :------- |
| open-type | String | navigate    | 跳转方式 | v8.90.0  |
| mode      | String | scaleToFill | 裁剪模式 | v8.90.0  |

> 如果有注意事项列在这里：
>
> 1. 注意事项 1
> 2. 注意事项 2

### open-type <script>//针对某个属性做单独的表格或说明</script>

open-type 有效值如下：

| 属性名       | 描述                        | 最低版本 |
| :----------- | :-------------------------- | :------- |
| navigate     | 对应 my.navigateTo 的功能   | v8.90.0  |
| redirect     | 对应 my.redirectTo 的功能   | v8.90.0  |
| switchTab    | 对应 my.switchTab 的功能    | v8.90.0  |
| navigateBack | 对应 my.navigateBack 的功能 | v8.90.0  |
| reLaunch     | 对应 my.reLaunch 的功能     | v8.90.0  |

### mode <script>//同一个属性被分成了 2 个类型的值</script>

> mode 有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式.

#### 缩放模式

| 属性名      | 描述                                                    |
| :---------- | :------------------------------------------------------ |
| scaleToFill | 不保持纵横比缩放，使图片的宽高完全拉伸至填满 image 元素 |

#### 裁剪模式

| 属性名 | 描述                       |
| :----- | :------------------------- |
| top    | 不缩放图片，只显示顶部区域 |

## 效果截图 <script>//非必填模块</script>

## 说明

<script>//非必填模块使用</script>

- 建议 1
- 建议 2

## 示例

```html
<view class="page"> </view>
```

```js
Page({
  onLoad(options) {
    console.log(options)
  },
  data: {
    text: '高德',
  },
})
```
