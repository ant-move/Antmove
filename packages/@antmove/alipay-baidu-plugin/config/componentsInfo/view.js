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
    view: {
        name: '视图容器',
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#view/',
            original: 'https://docs.alipay.com/mini/component/view'
        },
        desc: '视图容器。相当于 web 的 div 或者 react-native 的 view。如果需要使用滚动视图，请使用 <scroll-view />',
        props: {
            'disable-scroll': createSupportProp('点击时添加的样式类',0),
            'hover-class': createSupportProp('点击时添加的样式类'), 
            'hover-start-time': createSupportProp("按住多久后出现点击状态，单位毫秒"),
            "hover-stay-time": createSupportProp("松开后点击状态保留时间，单位毫秒"),
            'hidden': createSupportProp("是否隐藏"),
            class: createSupportProp("自定义样式名"),
            style: createSupportProp("内联样式"),
            animation: createSupportProp("用于动画"),
            'hover-stop-propagation': createSupportProp("是否阻止当前元素的祖先元素出现点击态"),
            'onTap': createSupportProp("点击",1),
            'onTouchStart': createSupportProp("触摸动作开始",1),
            'onTouchMove': createSupportProp("触摸后移动",1),
            onTouchEnd: createSupportProp("触摸动作结束",1),
            onTouchCancel: createSupportProp("触摸动作被打断",1),
            onLongTap: createSupportProp("长按 500ms 之后触发,触发了长按事件后进行移动将不会触发屏幕的滚动",1),
            onTransitionEnd: createSupportProp("过渡（Transition）结束时触发",1),
            onAnimationIteration: createSupportProp("每开启一次新的动画过程时触发",1),
            onAnimationStart: createSupportProp("动画开始时触发",1),
            onAnimationEnd: createSupportProp("动画结束时触发",1),
            onAppear: createSupportProp("当前元素可见时触发",0),
            onDisappear: createSupportProp("当前元素从可见变为不可见时触发",0),
            onFirstAppear: createSupportProp("当前元素首次可见时触发",0)
        }
    },
    swiper: {
        name: "滑块视图容器",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#swiper/',
            original: 'https://docs.alipay.com/mini/component/swiper'
        },
        desc: '滑块视图容器。其中，只可放置 <swiper-item /> 组件，否则会导致未定义的行为',
        props: {
            'indicator-dots': createSupportProp("是否显示指示点"),
            'indicator-color': createSupportProp("指示点颜色"),
            'indicator-active-color': createSupportProp("当前选中的指示点颜色",4),
            'active-class': createSupportProp("swiper-item 可见时的 class",0),
            'changing-class': createSupportProp("acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的class",0),
            'autoplay': createSupportProp("是否自动切换"),
            current: createSupportProp("当前页面的 index"),
            duration: createSupportProp("滑动动画时长"),
            interval: createSupportProp("自动切换时间间隔"),
            circular: createSupportProp("是否启用无限滑动"),
            vertical: createSupportProp("滑动方向是否为纵向"),
            'previous-margin': createSupportProp("前边距，单位px，1.9.0暂时只支持水平方向"),
            'next-margin': createSupportProp("后边距，单位px，1.9.0暂时只支持水平方向"),
            acceleration: createSupportProp("当开启时，会根据滑动速度，连续滑动多屏",0),
            'disable-programmatic-animation': createSupportProp("是否禁用代码变动触发 swiper 切换时使用动画。",0),
            onChange: createSupportProp("当开启时，会根据滑动速度，连续滑动多屏",1),
            onTransition: createSupportProp("swiper 中 swiper-item 的位置发生改变时会触发 transition 事件",0),
            onAnimationEnd: createSupportProp("	动画结束时会触发 animationEnd 事件",1),
            'disable-touch': createSupportProp("是否禁止用户 touch 操作",0), 
        }
    },
    'swiper-item': {
        name: "swiper-item 滑块视图容器子项",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#swiper-item/',
            original: 'https://docs.alipay.com/mini/component/swiper-item'
        },
        desc: '仅可放置在 <swiper /> 组件中，宽高自动设置为 100%'
    },
    'scroll-view': {
        name: "可滚动视图区域",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#scroll-view/',
            original: 'https://docs.alipay.com/mini/component/scroll-view'
        },
        desc: '可滚动视图区域',
        props: {
            class: createSupportProp("滑动方向是否为纵向"),
            style: createSupportProp("内联样式名"),
            'scroll-x': createSupportProp("允许横向滚动"),
            'scroll-y': createSupportProp("允许纵向滚动"),
            'upper-threshold': createSupportProp("距顶部/左边多远时（单位px），触发 scrolltoupper 事件"),
            'lower-threshold': createSupportProp("距底部/右边多远时（单位px），触发 scrolltolower 事件"),
            'scroll-top': createSupportProp("设置竖向滚动条位置"),
            'scroll-left': createSupportProp("设置横向滚动条位置"),
            'scroll-into-view': createSupportProp("值应为某子元素 id，则滚动到该元素，元素顶部对齐滚动区域顶部"),
            'scroll-with-animation': createSupportProp("在设置滚动条位置时使用动画过渡"),
            'scroll-animation-duration': createSupportProp("当 scroll-with-animation 设置为 true 时，可以设置 scroll-animation-duration 来控制动画的执行时间，单位ms",0),
            'enable-back-to-top': createSupportProp("当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向",0),
            'trap-scroll': createSupportProp("纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发 scroll-view 自身的滚动",0),
            'onScrollToUpper': createSupportProp("滚动到顶部/左边，会触发 scrolltoupper 事件",1),
            'onScrollToLower': createSupportProp("滚动到底部/右边，会触发 scrolltolower 事件",1),
            'onScroll': createSupportProp("滚动时触发",1),
            'onTouchStart': createSupportProp("触摸动作开始",1),
            'onTouchMove': createSupportProp("触摸后移动",1),
            'onTouchEnd': createSupportProp("触摸动作结束",1),
            'onTouchCancel': createSupportProp("触摸动作被打断",1),
            
        },
       

    },
    'cover-view': {
        name: "覆盖在原生组件之上的文本视图",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#cover-view/',
            original: 'https://docs.alipay.com/mini/component/cover-view'
        },
        desc: '覆盖在原生组件之上的文本视图。可覆盖的原生组件包括 <map />、<canvas />',
        props: {
            onTap: createSupportProp("点击事件回调",1)
        }
    },
    'cover-image': {
        name: "覆盖在原生组件之上的图片视图",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#cover-image/',
            original: 'https://docs.alipay.com/mini/component/cover-view'
        },
        desc: '覆盖在原生组件之上的图片视图，可覆盖的原生组件同 <cover-view />，支持嵌套在 <cover-view /> 里。',
        props: {
            src: createSupportProp("图片地址，支持的地址格式同 image 一致"),
            onTap: createSupportProp("点击事件回调"),
        }
    },
    'movable-view': {
        name: "可移动视图容器",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#movable-view/',
            original: 'https://docs.alipay.com/mini/component/movable-view'
        },
        desc: '可移动的视图容器，在页面中可以拖拽滑动。movable-view 必须在 <movable-area /> 组件中，并且必须是直接子节点，否则不能移动。',
        props: {
            direction: createSupportProp("movable-view 的移动方向"),
            x: createSupportProp("定义 x 轴方向的偏移，会换算为 left 属性，如果 x 的值不在可移动范围内，会自动移动到可移动范围"),
            y: createSupportProp("定义 y 轴方向的偏移，会换算为 top 属性，如果 y 的值不在可移动范围内，会自动移动到可移动范围"),
            disabled: createSupportProp("是否禁用"),
            onTouchStart: createSupportProp("触摸动作开始",1),
            onTouchMove: createSupportProp("触摸后移动",1),
            onTouchEnd: createSupportProp("触摸动作结束",1),
            onTouchCancel: createSupportProp("触摸动作被打断",1),
            onChange: createSupportProp("拖动过程中触发的事件",1),
            onChangeEnd: createSupportProp("拖动结束触发的事件",1)
        }
    },
    'movable-area': {
        name: "movable-view 的可移动区域",
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/view/#movable-area/',
            original: 'https://docs.alipay.com/mini/component/movable-area'
        },
        desc: "movable-view 的可移动区域"
    }

    
};