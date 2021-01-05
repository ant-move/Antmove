# 选择城市

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563445207009.png)

## my.chooseCity
打开城市选择列表。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| showLocatedCity | Boolean | 否 | 是否显示当前定位城市，默认 false | v8.90.0 |
| showHotCities | Boolean | 否 | 是否显示热门城市，默认 true | v8.90.0 |
| cities | Object Array | 否 | 自定义城市列表，列表内对象字段见下表 | v8.90.0 |
| hotCities | Object Array | 否 | 自定义热门城市列表，列表内对象字段见下表 | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

城市对象

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| city | String | 是 | 城市名 |
| adCode | String | 是 | 行政区划代码 |
| spell | String | 是 | 城市名对应拼音拼写，方便用户搜索 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| city | String | 城市名 |
| adCode | String | 行政区划代码 |
| longitude | number | 经度(仅支持Android) | v9.05.0 |
| latitude | number | 纬度(仅支持Android) | v9.05.0 |

> 注意:

> 如果用户没有选择任何城市直接点击了返回，将不会触发回调函数。

> 只有选中当前城市时才会返回用户所在位置的经纬度，选中其它城市时不返回。

## my.onLocatedComplete

自定义 onLocatedComplete 函数，可以监听该页面地理位置定位完的回调，只针对setLocatedCity为true的情况。<br />扫码体验：

| 名称 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| longitude | Number | 当前定位城市经度 | v9.10.0 |
| latitude | Number | 当前定位城市经度 | v9.10.0 |
| locatedCityId | String | 当前定位城市id，setLocatedCity的时候带上 | v9.10.0 |

## my.setLocatedCity

修改当前定位城市的名称。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| locatedCityId | String | 是 | 当前定位城市id，my.chooseCity接口的onLocatedComplete返回 | v9.10.0 |
| locatedCityName | String | 是 | 当前定位城市的名称 | v9.10.0 |
| locatedCityAdCode | String | 否 | 当前定位城市的行政区划代码，不传以控件默认拿到的为准 | v9.10.0 |
| locatedCityPinyin | String | 否 | 当前定位城市的拼音，不传以控件默认拿到的为准 | v9.10.0 |
| success | Function | 否 | 调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 调用失败的回调函数 | v9.10.0 |

### fail 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| error | String | 错误码 |
| errorMessage | String | 错误描述 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 参数类型错误 | |
| 12 | 必填参数为空 | |
| 13 | locatedCityId不匹配 | |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| locatedCityName | String | 当前定位城市的名称 |

### 示例代码

```html
<view class="page">
  <view class="page-description">选择城市</view>
  <view class="page-section">
    <view class="page-section-title">chooseCity</view>
    <view class="page-section-demo">
      <button type="primary" onTap="chooseCity">选择城市</button>
      <button type="primary" onTap="noChooseCity">没有热门/当前城市</button>
      <button type="primary" onTap="selfChooseCity">自定义选择的城市</button>
      <button type="primary" onTap="self_chooseCity">自定义选择的城市</button>
      <button type="primary" onTap="setLocatedCity">setLocatedCity</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    localcity: '天津',
  },
  chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      success: (res) => {
        my.alert({ title: `chooseAlipayContact response: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  noChooseCity() {
    my.chooseCity({
      showLocatedCity: false,
      showHotCities: false,
      success: (res) => {
        my.alert({ title: `操作成功: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
    })
  },
  selfChooseCity() {
    my.chooseCity({
      cities: [
        {
          city: '朝阳区',
          adCode: '110105',
          spell: 'chaoyang',
        },
        {
          city: '海淀区',
          adCode: '110108',
          spell: 'haidian',
        },
        {
          city: '丰台区',
          adCode: '110106',
          spell: 'fengtai',
        },
        {
          city: '东城区',
          adCode: '110101',
          spell: 'dongcheng',
        },
        {
          city: '西城区',
          adCode: '110102',
          spell: 'xicheng',
        },
        {
          city: '房山区',
          adCode: '110111',
          spell: 'fangshan',
        },
      ],
      hotCities: [
        {
          city: '朝阳区',
          adCode: '110105',
        },
        {
          city: '海淀区',
          adCode: '110108',
        },
        {
          city: '丰台区',
          adCode: '110106',
        },
      ],
      success: (res) => {
        my.alert({ title: `操作成功: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
    })
  },

  self_chooseCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      cities: [
        {
          city: '朝阳区',
          adCode: '110105',
          spell: 'chaoyang',
        },
        {
          city: '海淀区',
          adCode: '110108',
          spell: 'haidian',
        },
        {
          city: '丰台区',
          adCode: '110106',
          spell: 'fengtai',
        },
        {
          city: '东城区',
          adCode: '110101',
          spell: 'dongcheng',
        },
        {
          city: '西城区',
          adCode: '110102',
          spell: 'xicheng',
        },
      ],
      hotCities: [
        {
          city: '朝阳区',
          adCode: '110105',
        },
        {
          city: '海淀区',
          adCode: '110108',
        },
        {
          city: '丰台区',
          adCode: '110106',
        },
      ],
      success: (res) => {
        my.alert({ title: `操作成功: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
    })
  },

  multiLevelSelect() {
    my.multiLevelSelect({
      title: '请选择城市', // 级联选择标题
      list: [
        {
          name: '杭州市', // 条目名称
          subList: [
            {
              name: '西湖区',
              subList: [
                {
                  name: '文一路',
                },
                {
                  name: '文二路',
                },
                {
                  name: '文三路',
                },
              ],
            },
            {
              name: '滨江区',
              subList: [
                {
                  name: '滨河路',
                },
                {
                  name: '滨兴路',
                },
                {
                  name: '白马湖动漫广场',
                },
              ],
            },
          ], // 级联子数据列表
        },
      ],
      success: (result) => {
        console.log(result)
        my.alert({ content: `级联${JSON.stringify(result)}` })
      },
      fail: (error) => {
        my.alert({ content: `调用失败${JSON.stringify(error)}` })
      },
    })
  },

  setLocatedCity() {
    my.chooseCity({
      showLocatedCity: true,
      showHotCities: true,
      setLocatedCity: true,
      success: (res) => {
        this.setData({
          localcity: res.city,
        })
        my.alert({ title: `chooseAlipayContact response: ${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `选择失败${JSON.stringify(error)}` })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
    my.onLocatedComplete({
      success: (res) => {
        my.setLocatedCity({
          locatedCityId: res.locatedCityId,
          locatedCityName: this.data.localcity,
          success: (result) => {
            console.log(result)
          },
          fail: (error) => {
            my.alert({
              content: `修改当前定位城市失败${JSON.stringify(error)}`,
            })
          },
        })
      },
      fail: (error) => {
        my.alert({
          content: `onLocatedComplete失败${JSON.stringify(error)}`,
        })
      },
    })
  },
})
```