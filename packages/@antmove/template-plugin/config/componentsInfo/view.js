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
            alipay: 'https://docs.alipay.com/mini/component/movable-view'
        },
        desc: '在页面中可以拖拽滑动。movable-view必须在 movable-area 组件中，并且必须是直接子节点，否则不能移动。',
        props: {
            'direction': createSupportProp('movable-view的移动方向，属性值有all、vertical、horizontal、none'),
            'x': createSupportProp('定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画'),
            'y': createSupportProp('定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画'),
            'disabled': createSupportProp('是否禁用')
        }
    },
    'cover-image': {
        name: '覆盖在原生组件之上的图片视图',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html',
            alipay: 'https://docs.alipay.com/mini/component/cover-image'
        },
        desc: '可覆盖的原生组件同cover-view，支持嵌套在cover-view里。',
        props: {
            'src': createSupportProp('图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。')
        }
    },
    'cover-view': {
        name: '覆盖在原生组件之上的文本视图。',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html',
            alipay: 'https://docs.alipay.com/mini/component/cover-view'
        },
        desc: '可覆盖的原生组件包括 map、video、canvas、camera、live-player、live-pusher只支持嵌套 cover-view、cover-image，可在 cover-view 中使用 button。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
        }
    },
    'movable-area': {
        name: 'movable-view的可移动区域',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html',
            alipay: 'https://docs.alipay.com/mini/component/movable-area'
        },
        desc: 'movable-view的可移动区域。',
        props: {
        }
    },
    'scroll-view': {
        name: '可滚动视图区域',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html',
            alipay: 'https://docs.alipay.com/mini/component/scroll-view'
        },
        desc: '使用竖向滚动时，需要给scroll-view一个固定高度，通过 WXSS 设置 height。组件属性的长度单位默认为px，2.4.0起支持传入单位(rpx/px)。',
        props: {
            'scroll-x': createSupportProp('允许横向滚动'),
            'scroll-y': createSupportProp('允许纵向滚动'),
            'scroll-into-view': createSupportProp('值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素'),
            'scroll-with-animation': createSupportProp('在设置滚动条位置时使用动画过渡'),
            'enable-back-to-top': createSupportProp('当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向')
        }
    },
    'swiper': {
        name: '滑块视图容器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html',
            alipay: 'https://docs.alipay.com/mini/component/swiper'
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
            'next-margin': createSupportProp('后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值')
        },
    },
    'swiper-item': {
        name: '仅可放置在swiper组件中，宽高自动设置为100%',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/swiper-item.html',
            alipay: 'https://docs.alipay.com/mini/component/swiper-item'
        },
        desc: '仅可放置在swiper组件中，宽高自动设置为100%。',
        props: {
        }
    },
    'view': {
        name: '视图容器',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/view.html',
            alipay: 'https://docs.alipay.com/mini/component/view'
        },
        desc: '视图容器',
        props: {
            'hover-class': createSupportProp('指定按下去的样式类。当 hover-class="none" 时，没有点击态效果'),
            'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态')
        }
    }
};