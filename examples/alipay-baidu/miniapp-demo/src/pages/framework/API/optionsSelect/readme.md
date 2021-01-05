# 选项选择
### 扫码预览
![optionsSelect.png](https://cache.amap.com/ecology/tool/miniapp/1563435193007.png)
## my.optionsSelect(Object)

类似于safari原生select的组件，但是功能更加强大 一般用来替代select，或者2级数据的选择，注意不支持2级数据之间的联动。

## 入参说明

| 名称 | 类型 | 描述 | 必选 | 默认值 | 最低版本 |
| --- | --- | --- | --- | --- | --- |
| title | string | 头部标题信息 | 否 |  | v9.05 |
| optionsOne | string[] | 选项一列表 | 是 |  | v9.05 |
| optionsTwo | string[] | 选项二列表 | 否 |  | v9.05 |
| selectedOneIndex | number | 选项一默认选中 | 否 | 0 | v9.05 |
| selectedTwoIndex | number | 选项二默认选中 | 否 | 0 | v9.05 |
| positiveString | string | 确定按钮文案 | 否 | 确定 | v9.05 |
| negativeString | string | 取消按钮文档 | 否 | 取消 | v9.05 |
| success | Function | 否 | 接口调用成功的回调函数。 ||v9.05|
| fail | Function | 否 | 接口调用失败的回调函数。 ||v9.05|
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 ||v9.05|


## 出参说明

回调 success 函数参数为对象

| 名称 | 类型 | 描述 | 备注 |
| --- | --- | --- | --- |
| selectedOneIndex | number | 选项一选择的值 | 取消为”” |
| selectedOneOption | string | 选项一选择的内容 | 取消为”” |
| selectedTwoIndex | number | 选项二选择的值 | 取消为”” |
| selectedTwoOption | string | 选项二选择的值 | 取消为”” |


## 代码示例

```html
<view class="page">
  <view class="page-description">选项选择</view>
  <view class="page-section">
    <view class="page-section-title">optionsSelect</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="optionsSelect1">单列</button>
      <button size="default" type="primary" onTap="optionsSelect2">多列</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  optionsSelect1() {
    my.optionsSelect({
      title: '还款日选择',
      optionsOne: ['每周一', '每周二', '每周三', '每周四', '每周五', '每周六', '每周日'],
      selectedOneIndex: 2,
      positiveString: 'sure',
      negativeString: 'no',
      success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2),
        })
      },
    })
  },
  optionsSelect2() {
    my.optionsSelect({
      title: '出生年月选择',
      optionsOne: ['2014年', '2013年', '2012年', '2011年', '2010年', '2009年', '2008年'],
      optionsTwo: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      selectedOneIndex: 3,
      selectedTwoIndex: 5,
      positiveString: 'sure',
      negativeString: 'no',
      success(res) {
        my.alert({
          content: JSON.stringify(res, null, 2),
        })
      },
    })
  },
})
```
