const { createSupportProp } = require('./utils.js');
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
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/movable-view.html#movable-view'
        },
        desc: '在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。',
        props: {
            'direction': createSupportProp('movable-view的移动方向，属性值有all、vertical、horizontal、none'),
            'inertia': createSupportProp('movable-view是否带有惯性'),
            'out-of-bounds': createSupportProp('超过可移动区域后，movable-view是否还可以移动'),
            'x': createSupportProp('定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画'),
            'y': createSupportProp('定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画'),
            'damping': createSupportProp('阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快'),
            'friction': createSupportProp('摩擦系数，用于控制惯性滑动的动画，值越大摩擦力越大，滑动越快停止；必须大于0，否则会被设置成默认值'),
            'disabled': createSupportProp('是否禁用'),
            'scale': createSupportProp('是否支持双指缩放，默认缩放手势生效区域是在movable-view内'),
            'scale-min': createSupportProp('定义缩放倍数最小值'),
            'scale-max': createSupportProp('定义缩放倍数最大值'),
            'scale-value': createSupportProp('定义缩放倍数，取值范围为 0.5 - 10'),
            'animation': createSupportProp('是否使用动画'),
            'bindchange': createSupportProp('拖动过程中触发的事件'),
            'bindscale': createSupportProp('缩放过程中触发的事件'),
            'htouchmove': {
                type: 0,
                status: 2,
                desc: '初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch'
            },
            'vtouchmove': {
                type: 0,
                status: 2,
                desc: '初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch'
            }
        }
    },
    'cover-image': {
        name: '覆盖在原生组件之上的图片视图',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/cover.html#cover-image'
        },
        desc: '可覆盖的原生组件同cover-view，支持嵌套在cover-view里。',
        props: {
            'src': createSupportProp('图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。'),
            'bindload': createSupportProp('图片加载成功时触发'),
            'binderror': createSupportProp('图片加载失败时触发')
        }
    },
    'cover-view': {
        name: '覆盖在原生组件之上的文本视图。',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/cover.html#cover-view'
        },
        desc: '可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'scroll-top': createSupportProp('设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效')
        }
    },
    'movable-area': {
        name: 'movable-view的可移动区域',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/movable-view.html#movable-area'
        },
        desc: 'movable-view的可移动区域。',
        props: {
            'scale-area': createSupportProp('当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area')
        }
    },
    'scroll-view': {
        name: '可滚动视图区域',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/scroll-view.html'
        },
        desc: '使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'scroll-x': createSupportProp('允许横向滚动'),
            'scroll-y': createSupportProp('允许纵向滚动'),
            'upper-threshold': createSupportProp('距顶部/左边多远时，触发 scrolltoupper 事件'),
            'lower-threshold': createSupportProp('距底部/右边多远时，触发 scrolltolower 事件'),
            'scroll-top': createSupportProp('设置竖向滚动条位置'),
            'scroll-left': createSupportProp('设置横向滚动条位置'),
            'scroll-into-view': createSupportProp('值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素'),
            'scroll-with-animation': createSupportProp('在设置滚动条位置时使用动画过渡'),
            'enable-back-to-top': createSupportProp('当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向'),
            'enable-flex': {
                type: 0,
                status: 2,
                desc: '当前节点声明了 display: flex 就会成为 flex container，并作用于其孩子节点'
            },
            'scroll-anchoring': {
                type: 0,
                status: 2,
                desc: '开启 scroll anchoring 特性，即控制滚动位置不随内容变化而抖动，仅在 iOS 下生效，安卓下可参考 CSS overflow-anchor 属性'
            },
            'bindscrolltoupper': createSupportProp('滚动到顶部/左边时触发'),
            'bindscrolltolower': createSupportProp('滚动到底部/右边时触发'),
            'bindscroll': createSupportProp('滚动时触发')
        }
    },
    'swiper': {
        name: '滑块视图容器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/swiper.html'
        },
        desc: '其中只可放置swiper-item组件，否则会导致未定义的行为。',
        props: {
            'indicator-dots': createSupportProp('是否显示面板指示点'),
            'indicator-color': createSupportProp('指示点颜色'),
            'indicator-active-color': createSupportProp('当前选中的指示点颜色'),
            'autoplay': createSupportProp('是否自动切换'),
            'current': createSupportProp('当前所在滑块的 index'),
            'interval': createSupportProp('自动切换时间间隔'),
            'duration': createSupportProp('滑动动画时长'),
            'circular': createSupportProp('是否启用无限滑动'),
            'vertical': createSupportProp('滑动方向是否为纵向'),
            'previous-margin': createSupportProp('前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值'),
            'next-margin': createSupportProp('后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值'),
            'display-multiple-items': createSupportProp('同时显示的滑块数量'),
            'skip-hidden-item-layout': createSupportProp('是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息'),
            'easing-function': {
                type: 0,
                status: 2,
                desc: '指定 swiper 切换缓动动画类型'
            },
            'bindchange': createSupportProp('current 改变时会触发 change 事件'),
            'bindtransition': createSupportProp('swiper-item 的位置发生改变时会触发 transition 事件'),
            'bindanimationfinish': createSupportProp('动画结束时会触发')
        },
    },
    'swiper-item': {
        name: '仅可放置在swiper组件中，宽高自动设置为100%',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/swiper.html'
        },
        desc: '仅可放置在swiper组件中，宽高自动设置为100%。',
        props: {
            'item-id': createSupportProp('该 swiper-item 的标识符')
        }
    },
    'view': {
        name: '视图容器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
            alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/view-container/view.html'
        },
        desc: '视图容器',
        props: {
            'hover-class': createSupportProp('指定按下去的样式类。当 hover-class="none" 时，没有点击态效果'),
            'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态'),
            'hover-start-time': createSupportProp('按住后多久出现点击态，单位毫秒'),
            'hover-stay-time': createSupportProp('手指松开后点击态保留时间，单位毫秒')
        }
    }
};