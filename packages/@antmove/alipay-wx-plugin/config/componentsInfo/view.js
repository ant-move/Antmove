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
  view: {
    name: '视图容器',
    url: {
      original: 'https://docs.alipay.com/mini/component/view',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
    },
    desc: '视图容器',
    props: {
      role: {
        type: 1,
        status: 0,
        desc: '无障碍访问，（角色）标识元素的作用',
        key: 'aria-role',
      },
      'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
      'disable-scroll': {
        type: 0,
        status: 2,
        desc: '是否阻止区域内滚动页面',
      },
      'hover-class': createSupportProp('点击时添加的样式类'),
      'hover-start-time': {
        type: 4,
        status: 0,
        desc: '按住后多久出现点击态，单位毫秒.',
        msg: '支付宝无, 微信默认值40',
      },
      'hover-stay-time': {
        type: 4,
        status: 0,
        desc: '手指松开后点击态保留时间，单位毫秒.',
        msg: '支付宝无, 微信默认值500',
      },
      hidden: createSupportProp('是否隐藏'),
      class: createSupportProp('自定义样式名'),
      style: createSupportProp('内联样式'),
      'hover-stop-propagation': createSupportProp('是否阻止当前元素的祖先元素出现点击态'),
      onAppear: {
        type: 0,
        status: 2,
        desc: '当前元素可见时触发',
      },
      onDisappear: {
        type: 0,
        status: 2,
        desc: '当前元素从可见变为不可见时触发',
      },
      'onFirstAppear ': {
        type: 0,
        status: 2,
        desc: '当前元素首次可见时触发',
      },
            
    },
  },
  swiper: {
    name: '滑块视图容器',
    url: {
      original: 'https://docs.alipay.com/mini/component/swiper',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
    },
    desc: '其中只可放置swiper-item组件，否则会导致未定义的行为。',
    props: {
      'indicator-dots': createSupportProp('是否显示面板指示点'),
      'indicator-color': createSupportProp('指示点颜色'),
      'indicator-active-color': createSupportProp('当前选中的指示点颜色'),
      autoplay: createSupportProp('是否自动切换'),
      current: createSupportProp('当前所在滑块的 index'),
      duration: createSupportProp('滑动动画时长'),
      interval: createSupportProp('自动切换时间间隔'),
      circular: createSupportProp('是否启用无限滑动'),
      vertical: createSupportProp('滑动方向是否为纵向'),
      'previous-margin': createSupportProp('前边距，单位px，1.9.0暂时只支持水平方向'),
      'next-margin': createSupportProp('后边距，单位px，1.9.0暂时只支持水平方向'),
      acceleration: {
        type: 0,
        status: 2,
        desc: '当开启时，会根据滑动速度，连续滑动多屏',
      },
      'disable-programmatic-animation': {
        type: 0,
        status: 2,
        desc: '是否禁用代码变动触发 swiper 切换时使用动画',
      },
      onChange: {
        type: 1,
        status: 1,
        desc: 'current 改变时会触发 change 事件，event.detail = {current, isChanging}',
        key: 'bindchange',
      },
      onTransition: {
        type: 1,
        status: 1,
        desc: 'swiper 中 swiper-item 的位置发生改变时会触发 transition 事件',
        key: 'bindtransition',
      },
      onAnimationEnd: {
        type: 1,
        status: 1,
        desc: '动画结束时会触发 animationEnd 事件',
        key: 'bindanimationfinish',
      },
      'disable-touch': {
        type: 0,
        status: 2,
        desc: '是否禁止用户 touch 操作',
      },
    },
  },
  'scroll-view': {
    name: '可滚动视图区域',
    url: {
      original: 'https://docs.alipay.com/mini/component/swiper',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
    },
    desc: '使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
    props: {
      class: createSupportProp('外部样式名'),
      style: createSupportProp('内联样式名'),
      'scroll-x': createSupportProp('允许横向滚动'),
      'scroll-y': createSupportProp('允许纵向滚动'),
      'upper-threshold': createSupportProp('距顶部/左边多远时（单位px），触发 scrolltoupper 事件'),
      'lower-threshold': createSupportProp('距底部/右边多远时（单位px），触发 scrolltolower 事件'),
      'scroll-top': createSupportProp('设置竖向滚动条位置'),
      'scroll-left': createSupportProp('设置横向滚动条位置'),
      'scroll-into-view': createSupportProp('值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素'),
      'scroll-with-animation': createSupportProp('在设置滚动条位置时使用动画过渡'),
      'scroll-animation-duration': {
        type: 0,
        status: 2,
        desc: '当 scroll-with-animation 设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位ms',
      },
      'enable-back-to-top': createSupportProp('当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向'),
      'trap-scroll': {
        type: 0,
        state: 2,
        desc: '纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动',
      },
      onScrollToUpper: {
        type: 1,
        status: 0,
        desc: '滚动到顶部/左边时触发',
        key: 'bindscrolltoupper',
      },
      onScrollToLower: {
        type: 1,
        status: 0,
        desc: '滚动到底部/右边时触发',
        key: 'bindscrolltolower',
      },
      onScroll: {
        type: 1,
        status: 0,
        desc: '滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}',
        key: 'bindscroll',
      },
      onTouchStart: {
        type: 1,
        status: 0,
        desc: '触摸动作开始',
        key: 'bindtouchstart',
      },
      onTouchMove: {
        type: 1,
        status: 0,
        desc: '触摸动作移动',
        key: 'bindtouchmove',
      },
      onTouchEnd: {
        type: 1,
        status: 0,
        desc: '触摸动作结束',
        key: 'bindtouchend',
      },
      'onTouchCancel	': {
        type: 1,
        status: 0,
        desc: '触摸动作被打断，如来电提醒，弹窗',
        key: 'bindtouchcancel',
      },
    },
  },
  'cover-view': {
    name: '覆盖在原生组件之上的文本视图。',
    url: {
      original: 'https://docs.alipay.com/mini/component/cover-view',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html',
    },
    desc: '可覆盖的原生组件包括 map、canvas',
    props: {
      onTap: {
        type: 1,
        status: 0,
        desc: '点击事件回调',
        key: 'bindtap',
      },
    },
  },
  'cover-image': {
    name: '覆盖在原生组件之上的图片视图',
    url: {
      original: 'https://docs.alipay.com/mini/component/cover-image',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
    },
    desc: '可覆盖的原生组件同cover-view，支持嵌套在cover-view里。',
    props: {
      src: createSupportProp('图片地址，支持的地址格式同 image 一致'),
      onTap: {
        type: 1,
        status: 0,
        desc: '点击事件回调',
        key: 'bindtap',
      },
    },
  },
  'movable-view': {
    name: '可移动的视图容器',
    url: {
      original: 'https://docs.alipay.com/mini/component/movable-view',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
    },
    desc: '在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。',
    props: {
      direction: createSupportProp('movable-view的移动方向，属性值有all、vertical、horizontal、none'),
      x: createSupportProp('定义 x 轴方向的偏移，会换算为 left 属性，如果 x 的值不在可移动范围内，会自动移动到可移动范围'),
      y: createSupportProp('	定义 y 轴方向的偏移，会换算为 top 属性，如果 y 的值不在可移动范围内，会自动移动到可移动范围'),
      disabled: createSupportProp('是否禁用'),
      bindchange: {
        type: 1,
        status: 0,
        desc: '拖动过程中触发的事件，event.detail = {x, y, source}',
        key: 'onChange',
      },
      onTouchStart: {
        type: 1,
        status: 0,
        desc: '触摸动作开始',
        key: 'bindtouchstart',
      },
      onTouchMove: {
        type: 1,
        status: 0,
        desc: '触摸动作移动',
        key: 'bindtouchmove',
      },
      onTouchEnd: {
        type: 1,
        status: 0,
        desc: '触摸动作结束',
        key: 'bindtouchend',
      },
      'onTouchCancel	': {
        type: 1,
        status: 0,
        desc: '触摸动作被打断，如来电提醒，弹窗',
        key: 'bindtouchcancel',
      },
      onChange: {
        type: 0,
        status: 2,
        desc: '拖动过程中触发的事件',
      },
      onChangeEnd: {
        type: 0,
        status: 2,
        desc: '拖动结束触发的事件',
      },
    },
  },
  'movable-area': {
    name: 'movable-view的可移动区域',
    url: {
      original: 'https://docs.alipay.com/mini/component/movable-area',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html',
    },
    desc: 'movable-area 必须设置 width 和 height 属性，不设置默认为 10px。',
  },
}
