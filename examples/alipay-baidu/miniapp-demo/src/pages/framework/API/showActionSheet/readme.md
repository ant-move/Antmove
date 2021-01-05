# 交互反馈
### 扫码预览
![showActionSheet.png](https://cache.amap.com/ecology/tool/miniapp/1563434829605.png)<br>

## my.showActionSheet
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 否 | 菜单标题 | v9.05 |
| items | String Array | 是 | 菜单按钮文字数组 | v9.05 |
| cancelButtonText | String | 否 | 取消按钮文案。默认为‘取消’。注：Android平台此字段无效，不会显示取消按钮。 | v9.05 |
| destructiveBtnIndex | Number | 是 | （iOS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色。（Android尚未支持） | v9.05 |
| badges | Object Array | 否 | 需飘红选项的数组，数组内部对象字段见下表。 （IOS尚未支持）| v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| index | Number | 需要飘红的选项的索引，从0开始 |
| type | String | 飘红类型，支持 none（无红点）/ point（纯红点） / num（数字红点）/ text（文案红点）/ more（...）  |
| text | String | 自定义飘红文案：<br />1、type为none/point/more时本文案可不填<br />2、type为num时本文案为小数或<=0均不显示, >100 显示"..." |
|  |  |  |

### 代码示例

```html
<view class="page">
  <view class="page-description">操作菜单</view>
  <view class="page-section">
    <view class="page-section-title">showActionSheet</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="showActionSheet">
        showActionSheet
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  showActionSheet() {
    my.showActionSheet({
      title: 'ActionSheet',
      items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
      badges: [
        { index: 0, type: 'none' },
        { index: 1, type: 'point' },
        { index: 2, type: 'num', text: '99' },
        { index: 3, type: 'text', text: '推荐' },
        { index: 4, type: 'more' }],
      cancelButtonText: '取消好了',
      destructiveBtnIndex: 2,
      success: (res) => {
        const btn = res.index === -1 ? '取消' : `第${res.index}个`
        my.alert({
          title: `你点了${btn}按钮`,
        })
      },
    })
  },
})
```
