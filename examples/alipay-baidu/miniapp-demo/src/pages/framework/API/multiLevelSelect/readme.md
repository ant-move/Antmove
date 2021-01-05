# 级联选择
### 扫码预览
![multiLevelSelect.png](https://cache.amap.com/ecology/tool/miniapp/1563435058446.png)
## my.multiLevelSelect(Object)
级联选择功能主要使用在于多级关联数据选择，比如说省市区的信息选择。

### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 否 | 标题 | v9.05 |
| list |  | 是 | 选择数据列表 | v9.05 |
| name | String | 是 | 条目名称 | v9.05 |
| subList | JsonArray | 否 | 子条目列表 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 出参说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| success | Boolean | 是否选择完成,取消返回false |
| result | JsonArray | 选择的结果，如[{“name”:”杭州市”},{“name”:”上城区”},{“name”:”古翠街道”}] |

### 代码示例

```html
<view class="page">
  <view class="page-description">加速度计</view>
  <view class="page-section">
    <view class="page-section-title">multiLevelSelect</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="multiLevelSelect">
        multiLevelSelect
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  multiLevelSelect() {
    my.multiLevelSelect({
      title: 'nihao',
      list: [
        {
          name: '杭州市',
          subList: [
            {
              name: '西湖区',
              subList: [
                {
                  name: '古翠街道',
                },
                {
                  name: '文新街道',
                },
              ],
            },
            {
              name: '上城区',
              subList: [
                {
                  name: '延安街道',
                },
                {
                  name: '龙翔桥街道',
                },
              ],
            },
          ],
          success(res) {
            my.alert({
              content: `您当前的选择为${JSON.stringify(res)}`,
            })
          },
        },
      ],
    })
  },
})
```
