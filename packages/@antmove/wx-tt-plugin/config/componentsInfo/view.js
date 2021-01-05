const { createSupportProp } = require('./utils.js')

/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 * 5 - wrapComponent - 使用自定义组件代替
 * 6 - diff tagName
 * 7 - equal - 完全支持
 * 
 * status - 支持程度
 * 0 - 完整支持
 * 1 - 部分支持
 * 2 - 不支持
 * 
 * desc - 组件或属性作用描述
 */
module.exports = {
  'movable-view': {
    name: '可移动的视图容器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。',
  },
  'cover-image': {
    name: '覆盖在原生组件之上的图片视图',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '可覆盖的原生组件同cover-view，支持嵌套在cover-view里。',
  },
  'cover-view': {
    name: '覆盖在原生组件之上的文本视图。',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html',
      target: 'https://docs.alipay.com/mini/component/cover-view',
    },
    type: 0,
    status: 2,
    desc: '可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
  },
  'movable-area': {
    name: 'movable-view的可移动区域',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html',
      target: 'https://docs.alipay.com/mini/component/movable-area',
    },
    type: 0,
    status: 2,
    desc: 'movable-view的可移动区域。',
  },
  'scroll-view': {
    name: '可滚动视图区域',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
      target: 'https://developer.toutiao.com/dev/miniapp/ucDMy4yNwIjL3AjM',
    },
    desc: '使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
    props: {
      'scroll-x': createSupportProp('允许横向滚动'),
      'scroll-y': createSupportProp('允许纵向滚动'),
      'upper-threshold': createSupportProp('距顶部/左边多远时，触发 scrolltoupper 事件'),
      'lower-threshold': createSupportProp('距底部/右边多远时，触发 scrolltolower 事件'),
      'scroll-top': {
        type: 3,
        status: 1,
        desc: '设置竖向滚动条位置',
        msg: '头条小程序只支持number类型',
      },
      'scroll-left': {
        type: 3,
        status: 1,
        desc: '设置横向滚动条位置',
        msg: '头条小程序只支持number类型',
      },
      'scroll-into-view': createSupportProp('值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素'),
      'scroll-with-animation': createSupportProp('在设置滚动条位置时使用动画过渡'),
      'enable-back-to-top': {
        type: 0,
        status: 2,
        desc: '当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向',
      },
      'enable-flex': {
        type: 0,
        status: 2,
        desc: '用 flexbox 布局。开启后，当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点',
      },
      'scroll-anchoring': {
        type: 0,
        status: 2,
        desc: '开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性',
      },
      bindscrolltoupper: createSupportProp('滚动到顶部/左边时触发'),
      bindscrolltolower: createSupportProp('滚动到底部/右边时触发'),
      bindscroll: createSupportProp('滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}'),
    },
  },
  swiper: {
    name: '滑块视图容器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uYDMy4iNwIjL2AjM',
    },
    desc: '其中只可放置swiper-item组件，否则会导致未定义的行为。',
    props: {
      'current-item-id': createSupportProp('当前选中滑块的组件id'),
      'indicator-dots': createSupportProp('是否显示面板指示点'),
      'indicator-color': createSupportProp('指示点颜色'),
      'indicator-active-color': createSupportProp('当前选中的指示点颜色'),
      autoplay: createSupportProp('是否自动切换'),
      current: createSupportProp('当前所在滑块的 index'),
      interval: createSupportProp('自动切换时间间隔'),
      duration: createSupportProp('滑动动画时长'),
      circular: createSupportProp('是否启用无限滑动'),
      vertical: createSupportProp('滑动方向是否为纵向'),
      'previous-margin': {
        type: 0,
        status: 2,
        desc: '前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值',
      },
      'next-margin': {
        type: 0,
        status: 2,
        desc: '后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值',
      },
      'display-multiple-items': {
        type: 0,
        status: 2,
        desc: '同时显示的滑块数量',
      },
      'skip-hidden-item-layout': {
        type: 0,
        status: 2,
        desc: '是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息',
      },
      'easing-function': {
        type: 0,
        status: 2,
        desc: '指定 swiper 切换缓动动画类型',
      },
      bindchange: createSupportProp('current 改变时会触发 change 事件，event.detail = {current, source}'),
      bindtransition: createSupportProp('swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}'),
      bindanimationfinish: {
        type: 0,
        status: 2,
        desc: '动画结束时会触发 animationfinish 事件，event.detail 同上',
      },
    },
  },
  'swiper-item': {
    name: '仅可放置在swiper组件中，宽高自动设置为100%',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uYDMy4iNwIjL2AjM',
    },
    desc: '仅可放置在swiper组件中，宽高自动设置为100%。',
    props: {
      'item-id': createSupportProp('该 swiper-item 的标识符'),
    },
  },
  view: {
    name: '视图容器',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uATMy4CMxIjLwEjM',
    },
    desc: '视图容器',
    props: {
      'hover-class': createSupportProp('指定按下去的样式类。当 hover-class="none" 时，没有点击态效果'),
      'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态'),
      'aria-role': {
        type: 0,
        status: 2,
        desc: '无障碍访问，（角色）标识元素的作用',
      },
      'aria-label': {
        type: 0,
        status: 2,
        desc: '无障碍访问，（属性）元素的额外描述',
      },
      'hover-start-time': createSupportProp('按住后多久出现点击态，单位毫秒'),
      'hover-stay-time': createSupportProp('手指松开后点击态保留时间，单位毫秒'),
    },
  },
}
