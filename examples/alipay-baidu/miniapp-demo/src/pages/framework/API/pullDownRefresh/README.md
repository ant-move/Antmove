# 下拉刷新

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563528155565.png)

## onPullDownRefresh
在 Page 中自定义 onPullDownRefresh 函数，可以监听该页面用户的下拉刷新事件。

- 需要在页面对应的 `.json` 配置文件中配置 `"pullRefresh": true` 选项，才能开启下拉刷新事件。
- 当处理完数据刷新后，调用 `my.stopPullDownRefresh` 可以停止当前页面的下拉刷新。
## 入参

Object 类型，属性如下：

| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.1.0 |
| fail | Function | 否 | 调用失败的回调函数 | v9.1.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.1.0 |

### 示例代码：
`pull-down-refresh.json` 配置文件中的代码配置如下：

```json
{
    "pullRefresh": true
}
```
Page 中定义 onPullDownRefresh 处理函数。
## my.stopPullDownRefresh
停止当前页面的下拉刷新。

### 示例代码：
```html
<view class="page">
  <view class="page-description">下拉刷新</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">
        pullDownRefresh
      </view>
      下滑页面即可刷新
    </view>
    <view class="page-section-demo">
      <button type="primary" onTap="stopPullDownRefresh">停止刷新</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh() {
    my.stopPullDownRefresh({
      complete() {
        console.log(new Date())
      },
    })
  },
})
```
