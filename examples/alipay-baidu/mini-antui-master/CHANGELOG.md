## 0.4.29

`2019-07-19`

- **Bug Fix**
  - 修复`list-item`下slot标签未闭合的问题。

## 0.4.28

`2019-07-05`

- **Bug Fix**
  - 修复`vtabs`在页面`allowsBounceVertical`时不能滚动的问题
  - 修复`search-bar`在`placeholder`很长的情况下点击无法清除内容的问题

## 0.4.27

`2019-05-24`

- **Bug Fix**
  - 修复`collapse`无法在钉钉小程序上展开的问题([#272](https://github.com/ant-mini-program/mini-antui/issues/272))
  - 修复`stepper` readOnly状态下按钮点击无效的问题

## 0.4.26

`2019-05-10`

- **Bug Fix**
  - 修复`vtabs`的语法错误([#264](https://github.com/ant-mini-program/mini-antui/issues/264))
  - 修复`am-icon`默认class为undefined的问题([#261](https://github.com/ant-mini-program/mini-antui/issues/261))
  - 修复`list-item`数字和英文不换行的问题

## 0.4.25

`2019-04-24`

- **Bug Fix**
  - 修复`badge`类型为text的情况下，文字换行的问题

## 0.4.23

`2019-04-11`

- **Enhancement**
  - `notice`样式写明box-sizing类型避免开发者全局css属性影响组件样式
  - `modal`新增`disableScroll`属性

## 0.4.22

`2019-03-29`

- **Bug Fix**
  - 修复`flex`没有justify-content:center的问题([#247](https://github.com/ant-mini-program/mini-antui/issues/247))

## 0.4.21

`2019-03-25`

- **Bug Fix**
  - 修复`list-item`在更新渲染时dataset不同步更新的问题

## 0.4.20

`2019-03-22`

- **Feature**
  - 新增`collapse`组件
  - `grid`支持slot

- **Enhancement**
  - 优化`picker-item`文字超出换行问题
  - `vtabs`组件activeTab属性变化重新计算高度

## 0.4.19

`2019-03-01`

- **Enhancement**
  - `amount-input`、`message`、`modal`1px问题优化

## 0.4.18

`2019-02-25`

- **Bug Fix**
  - 修复`notice`在text较短情况下设置loop为true时导致闪烁的问题

## 0.4.17

`2019-02-23`

- **Feature**
  - 新增`am-icon`组件


## 0.4.16

`2019-02-15`

- **Bug Fix**
  - 修复`notice`marqueeProps属性无默认参数导致动画无效的问题

## 0.4.15

`2019-02-01`

- **Enhancement**
  - 优化`notice`动画性能([#140](https://github.com/ant-mini-program/mini-antui/issues/140))
  - 修复`pagination`闪烁问题

## 0.4.14

`2019-01-25`

- **Enhancement**
  - `popup`组件兼容同层渲染模式

## 0.4.13

`2019-01-18`

- **Feature**
  - 新增`pagination`组件

## 0.4.12

`2019-01-04`

- **Bug Fix**
  - 修复`stepper`step属性设置小数时精度问题([#196](https://github.com/ant-mini-program/mini-antui/issues/196))

## 0.4.11

`2018-12-30`

- **Bug Fix**
  - 修复`notice`组件在IOS 9下高度塌陷的问题

## 0.4.10

`2018-12-21`

- **Bug Fix**
  - 修复`badge`组件宽度不自适应的问题

## 0.4.9

`2018-12-21`

- **Bug Fix**
  - 修复`badge`组件在安卓下文字垂直居中问题

## 0.4.8

`2018-12-19`

- **Feature**
  - 新增`flex`、`flex-item`布局组件

- **Enhancement**
  - `steps`支持自定义icon
  - `amount-input`支持`controlled`属性

## 0.4.7

`2018-12-07`

- **Enhancement**
  - `swipe-action`版本判断优化([#176](https://github.com/ant-mini-program/mini-antui/issues/176))
  - `stepper`value属性类型兼容字符串

## 0.4.6

`2018-11-28`

- **Enhancement**
  - `list-item`替换图片资源为base64

## 0.4.5

`2018-11-21`

- **Enhancement**
  - `popup`新增参数`zIndex`，用来指定组件层级

## 0.4.4

`2018-11-15`

- **Enhancement**
  - `notice`的mode参数为`link`时，onClick回调的触发区域为完整组件。

## 0.4.3

`2018-11-07`

- **Enhancement**
  - `tabs`新增`tabBarCls`tabBar自定义样式class
  - `tabs`新增`duration`控制滑动动画时长
  - `calendar`date参数兼容IOS格式要求

## 0.4.2

`2018-10-31`

- **Enhancement**
  - `amount-input`组件type属性新增`digit`类型
  - `vtabs`新增`activeTab`，`onTabClick`和`onChange`属性([#125](https://github.com/ant-mini-program/mini-antui/issues/125))

## 0.4.1

`2018-10-29`

- **Enhancement**
  - `notice`新增`enableMarquee`和`marqueeProps`属性([#140](https://github.com/ant-mini-program/mini-antui/issues/140))

- **Bug Fix**
  - 修复`message`type为`fail`时的白屏问题([#152](https://github.com/ant-mini-program/mini-antui/issues/152))

## 0.4.0

`2018-10-23`

- **Feature**
  - 新增`am-checkbox`组件
  - 新增`badge`组件

- **Enhancement**
  - `calendar`组件`tabs`属性新增`disable`字段，新增`onSelectHasDisableDat`属性([#108](https://github.com/ant-mini-program/mini-antui/issues/108))

- **Bug Fix**
  - 修复`vtabs`在安卓下出现滚动误差的问题
  - 修复`tabs`在`tabs`属性变化时没有重新计算宽度导致的滚动不正常问题

## 0.3.13

`2018-10-18`

- **Bug Fix**
  - 修复`swipe-action`在didUpdate时陷入死循环的问题
  - 修复`vtabs`tabs数据变化没有响应的问题

## 0.3.12

`2018-10-12`

- **Enhancement**
  - `vtabs`新增`badgeType`和`badgeText`属性([#92](https://github.com/ant-mini-program/mini-antui/issues/92))

## 0.3.11

`2018-10-10`

- **Bug Fix**
  - 修复`search-bar`在IPhone X下面出现滚动的问题([#113](https://github.com/ant-mini-program/mini-antui/issues/113))
  - 修复`stepper`在重置初始值时操作按钮状态不改变的bug([#111](https://github.com/ant-mini-program/mini-antui/issues/111))

- **Enhancement**
  - `page-result`图标升级到最新版本
  - `input-item`增大清除icon点击响应范围

## 0.3.10

`2018-10-08`

- **Enhancement**
  - 解决`list`，`input-item`在安卓下线条较粗的问题

## 0.3.9

`2018-09-27`

- **Bug Fix**
  - 修复`input-item`在失去焦点时清除按钮仍旧显示的问题

## 0.3.8

`2018-09-26`

- **Bug Fix**
  - 修复`filter`组件单选时需要反选取消选择的问题

- **Feature**
  - 新增`picker-item`组件

- **Enhancement**
  - `tabs`新增`activeCls`属性，用来表示激活tabbar的自定义class([#87](https://github.com/ant-mini-program/mini-antui/issues/87))
  - `input-item`新增`clear`、`onClear`属性，组件内支持清除输入功能([#84](https://github.com/ant-mini-program/mini-antui/issues/84))
  - `list-item` onClick回调新增target参数，用来支持自定义dataset([#85](https://github.com/ant-mini-program/mini-antui/issues/85))

## 0.3.7

`2018-09-25`

- **Bug Fix**
  - 修复了`input-item`组件在失去焦点等事件中无dataset的问题([#66](https://github.com/ant-mini-program/mini-antui/issues/66))
  - 修复`popup`组件mask定位为absolut导致的页面滚动时mask跟着滚动的bug

- **Enhancement**
  - `popup`新增disableScroll属性以适应不同业务场景
  - 完善`swipe-action`的示例代码
  - 文档更新，添加体验二维码

## 0.3.6

`2018-09-13`

- **Enhancement**
  - 新增tips组件的类型

## 0.3.5

`2018-08-29`

- **Bug Fix**
  - 修复`search-bar`点击icon无效的bug
  - 修复`search-bar`苹果输入法中间态无法清除placeholder的bug

- **Enhancement**
  - 优化`list`组件样式

## 0.3.4

`2018-08-16`

- **Enhancement**
  - 优化`tabs`组件闪烁问题
  - `face-detection`组件增加最小旋转角度属性

## 0.3.3

`2018-08-10`

- **Feature**
  - `tabs`组件新增`activeTab`属性，用来指定当前激活tab

## 0.3.2

`2018-08-07`

- **Feature**
  - 新增`popup`弹出菜单组件
  - `face-detection`组件新增活体检测功能

## 0.3.1

`2018-07-27`

- **Feature**
  - `face-detection`组件新增`appName`和`serviceName`字段

## 0.3.0

`2018-07-26`

- **Feature**
  - 新增`face-detection`组件
  - 新增`footer`组件
  - `page-result`组件增加slot，方便开发者个性化定制区域内容

- **Enhancement**
  - 优化`calendar`组件在初次渲染时的闪烁问题
  - 优化`swipe-action`右侧按钮宽度自适应文本内容


## 0.2.0

`2018-07-11`

- **Feature**

  - 新增`vtab组件`

- **Enhancement**

  - 优化`swipe-action`组件性能
  - 解决`tabs`组件在初次渲染时的页面闪烁问题

## 0.1.0

`2018-06-21`


- **Feature**

  - 新增`steps`、`popover`、`amount-input`、`calendar`组件；
  - `tabs`组件`tabs`属性新增`badgeType`属性、新增`showPlus`、`onPlusClick`属性
  - `modal`组件新增`closeType`属性，以适应不同的背景颜色

- **Bug Fix**

  - 修复`grid`、`modal`、`input-item`组件样式问题


## 0.0.13

`2018-05-09`

首次发布小程序版antui组件库
