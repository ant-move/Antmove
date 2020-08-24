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
            'inertia': {
                type: 7,
                status: 2,
                desc: 'movable-view是否带有惯性',
            },
            'out-of-bounds': {
                type: 7,
                status: 2,
                desc: '超过可移动区域后，movable-view 是否还可以移动。',
            },
            'x': createSupportProp('定义x轴方向的偏移，如果x的值不在可移动范围内，会自动移动到可移动范围；改变x的值会触发动画'),
            'y': createSupportProp('定义y轴方向的偏移，如果y的值不在可移动范围内，会自动移动到可移动范围；改变y的值会触发动画'),
            'damping': {
                type: 0,
                status: 2,
                desc: '阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快',
            },
            'friction': {
                type: 0,
                status: 2,
                desc: '阻尼系数，用于控制x或y改变时的动画和过界回弹的动画，值越大移动越快',
            },
            'disabled': createSupportProp('是否禁用'),
            'scale': {
                type: 7,
                status: 2,
                desc: '是否支持双指缩放，默认缩放手势生效区域是在movable-view内',
            },
            'scale-min': {
                type: 7,
                status: 2,
                desc: '定义缩放倍数最小值',
            },
            'scale-max': {
                type: 7,
                status: 2,
                desc: '定义缩放倍数最大值',
            },
            'scale-value': {
                type: 7,
                status: 2,
                desc: '定义缩放倍数，取值范围为 0.5 - 10',
            },
            'animation': {
                type: 0,
                status: 2,
                desc: '是否使用动画',
            },
            'bindchange': {
                type: 7,
                status: 0,
                desc: '拖动过程中触发的事件，event.detail = {x, y, source}',
                key: 'onChange',
            },
            'bindscale': {
                type: 7,
                status: 2,
                desc: '缩放过程中触发的事件，event.detail = {x, y, scale}，x和y字段在2.1.0之后支持',
            },
            'htouchmove': {
                type: 0,
                status: 2,
                desc: '初次手指触摸后移动为横向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
            },
            'vtouchmove': {
                type: 0,
                status: 2,
                desc: '初次手指触摸后移动为纵向的移动时触发，如果catch此事件，则意味着touchmove事件也被catch',
            }
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
            'src': createSupportProp('图标路径，支持临时路径、网络地址（1.6.0起支持）、云文件ID（2.2.3起支持）。暂不支持base64格式。'),
            'bindload': {
                type: 0,
                status: 2,
                desc: '图片加载成功时触发',
            },
            'binderror': {
                type: 0,
                status: 2,
                desc: '图片加载失败时触发',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
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
            'scroll-top': {
                type: 0,
                status: 2,
                desc: '设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            }
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
            'scale-area': {
                type: 0,
                status: 2,
                desc: '当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area',
            }
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
            'scroll-top': {
                type: 3,
                status: 1,
                desc: '设置竖向滚动条位置',
                msg: '支付宝小程序只支持number类型'
            },
            'scroll-left': {
                type: 3,
                status: 1,
                desc: '设置横向滚动条位置',
                msg: '支付宝小程序只支持number类型'
            },
            'scroll-into-view': createSupportProp('值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素'),
            'scroll-with-animation': createSupportProp('在设置滚动条位置时使用动画过渡'),
            'enable-back-to-top': createSupportProp('当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向'),
            'bindscrolltoupper': {
                type: 1,
                status: 0,
                desc: '滚动到顶部/左边时触发',
                key: 'onScrollToUpper',
                params: {
                    scrolltoup: {
                        type: 1,
                        desc: 'diff',
                        key: 'scrollToUp',
                    }
                }
            },
            'bindscrolltolower': {
                type: 1,
                status: 0,
                desc: '滚动到底部/右边时触发',
                key: 'onScrollToUpper',
                params: {
                    scrolltolower: {
                        type: 1,
                        desc: 'diff',
                        key: 'scrollToLower',
                    }
                }
            },
            'bindscroll': {
                type: 1,
                status: 0,
                desc: '滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}',
                key: 'onScroll',
                params: {
                    deltaX: {
                        type: 0,
                        status: 2,
                    },
                    deltaY: {
                        type: 0,
                        status: 2,
                    }
                }
            }
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
            'current-item-id': {
                type: 0,
                status: 2,
                desc: 'missing',
            },
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
            'bindchange': {
                type: 1,
                status: 1,
                desc: 'current 改变时会触发 change 事件，event.detail = {current, source}',
                key: 'onChange',
                params: {
                    currentItemId: {
                        type: 0,
                        status: 2,
                        desc: 'missing'
                    },
                }
            },
            'bindtransition': {
                type: 1,
                status: 0,
                desc: 'swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}',
                key: "onTransition"
            },
            'bindanimationfinish': {
                type: 1,
                status: 0,
                desc: '动画结束时会触发 animationfinish 事件，event.detail 同上',
                key: "onAnimationEnd"
            }
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
            'item-id': {
                type: 0,
                status: 2,
                desc: '该 swiper-item 的标识符',
            }
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
            'hover-start-time': {
                type: 4,
                status: 0,
                desc: '按住后多久出现点击态，单位毫秒.',
                msg: '微信默认值40，支付宝无'
            },
            'hover-stay-time': {
                type: 4,
                status: 0,
                desc: '手指松开后点击态保留时间，单位毫秒.',
                msg: '微信默认值500，支付宝无'
            }
        }
    }
};