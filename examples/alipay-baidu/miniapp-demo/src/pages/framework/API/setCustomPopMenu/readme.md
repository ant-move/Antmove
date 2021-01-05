# 菜单
### 扫码预览
![setCustomPopMenu.png](https://cache.amap.com/ecology/tool/miniapp/1563435269814.png)
## my.setCustomPopMenu(Object)

右上角更多中，支持插入自定义菜单，需要权限。<br />自定义菜单点击事件通过页面 `page.onPopMenuClick(Object)`事件回调。

### 入参说明

| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| menus | JsonArray<Object(customMenuItem)> | 是 | 自定义菜单列表 | v9.05 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### customMenuItem 对象

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| name | String | 是 | 自定义菜单名称 |

### 出参说明

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| success | Boolean | 设置结果 |


### 代码示例

```html
<view class="page">
  <view class="page-description">插入自定义菜单</view>
  <view class="page-section">
    <view class="page-section-title">setCustomPopMenu</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="setCustomPopMenu">
        setCustomPopMenu
      </button>      
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  setCustomPopMenu() {
    my.setCustomPopMenu({
      menus: [{ name: '新增0' }, { name: '新增1' }, { name: '新增2' }, { name: '新增3' }, { name: '新增4' }],
      success: (res) => {
        my.alert({
          content:
            JSON.stringify(res),
        })
      },
      fail: (error) => {
        my.alert({
          content:
            JSON.stringify(error),
        })
      },
      complete: () => {
        my.alert({ title: 'complete回调' })
      },
    })
  },
  onPopMenuClick(data) {
    my.alert({
      content: JSON.stringify(data),
    })
  },
})
```
