const Config = require('../config.js');

const customComponentPrefix = Config.library.customComponentPrefix;
const customComponentNamePrefix = Config.library.customComponentNamePrefix;
/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 * 5 - wrapComponent - 使用自定义组件代替
 * 6 - diff tagName
 */

module.exports = {
    'icon': {
        props: {
            'aria-label': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'size': {
                type: 3,
                desc: 'diffType',
                msg: '支付宝小程序只支持数值类型'
            },
        }
    },
    'rich-text': {
        props: {
            'space': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'nodes': {
                type: 3,
                desc: 'diffType',
                msg: '支付宝小程序只支持Array类型'
            }
        }
    },

    'text': {
        props: {
            'hidden': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },

    'progress': {
        props: {
            'border-radius': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'font-size': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'color': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'active-mode': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'bindactiveend': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'activeColor': {
                type: 1,
                desc: 'diff',
                key: 'active-color'
            },
            'backgroundColor': {
                type: 1,
                desc: 'diff',
                key: 'background-color'
            },
            'stroke-width': {
                type: 3,
                desc: 'diffType',
                msg: '支付宝小程序只支持Number类型'
            },
        }
    },
    // use custom button instead of primitive button
    // 'button': {
    //     props: {
    //         'lang': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'bindgetuserinfo': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'session-from': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'send-message-title': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'send-message-path': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'send-message-img': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'show-message-card': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'bindcontact': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'bindgetphonenumber': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'app-parameter': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'binderror': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'bindlaunchapp': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'bindopensetting': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         },
    //         'aria-label': {
    //             type: 0,
    //             desc: 'missing',
    //             key: 'Not support'
    //         }
    //     }
    // },
    page: {
        tagName: 'view',
        type: 6
    },
    
    'checkbox-group': {
        props: {
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            }
        }
    },
    'form': {
        props: {
            'bindsubmit': {
                type: 1,
                desc: 'diff',
                key: 'onSubmit'
            },
            'bindreset': {
                type: 1,
                desc: 'diff',
                key: 'onReset'
            },
            'report-submit-timeout':
            {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'input': {
        props: {
            'cursor-spacing': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'adjust-position': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'bindinput': {
                type: 1,
                desc: 'diff',
                key: 'onInput'
            },
            'bindfocus': {
                type: 1,
                desc: 'diff',
                key: 'onFocus'
            },
            'bindblur': {
                type: 1,
                desc: 'diff',
                key: 'onBlur'
            },
            'bindconfirm': {
                type: 1,
                desc: 'diff',
                key: 'onConfirm'
            },
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
        }
    },
    'picker': {
        props: {
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            },
            'bindcancel': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'picker-view': {
        props: {
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            },
            'bindpickstart': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'bindpickend': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'radio-group': {
        props: {
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            }
        }
    },
    'radio': {
        props: {
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'slider': {
        props: {
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            },
            'backgroundColor': {
                type: 1,
                desc: 'diff',
                key: 'background-color'
            },
            'activeColor': {
                type: 1,
                desc: 'diff',
                key: 'active-color'
            },
            'block-size': {
                type: 1,
                desc: 'diff',
                key: 'handle-size'
            },
            'block-color': {
                type: 1,
                desc: 'diff',
                key: 'handle-color'
            },
            'bindchanging': {
                type: 1,
                desc: 'diff',
                key: 'onChanging'
            },
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'switch': {
        props: {
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            },
            'type': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'textarea': {
        props: {
            'auto-focus': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'fixed': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'cursor-spacing': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'cursor': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'show-confirm-bar': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'selection-start': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'selection-end': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'adjust-position': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'aria-label': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'bindlinechange': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'bindfocus': {
                type: 1,
                desc: 'diff',
                key: 'onFocus'
            },
            'bindblur': {
                type: 1,
                desc: 'diff',
                key: 'onBlur'
            },
            'bindconfirm': {
                type: 1,
                desc: 'diff',
                key: 'onConfirm'
            },
            'bindinput': {
                type: 1,
                desc: 'diff',
                key: 'onInput'
            }
        }
    },
    'map': {
        type: 5,
        originName: 'custom-map',
        tagName: customComponentNamePrefix + 'custom-map',
        path: customComponentPrefix + '/__component/custom-map/custom-map',
        desc: 'use custom map component instead default map component.',
        props: {
            'subkey': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'enable-3D': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'show-compass': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'enable-overlooking': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'enable-zoom': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'enable-scroll': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'enable-rotate': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'bindupdated': {
                type: 0,
                desc: 'missing',
                key: 'onUpdated'
            },
            'bindpoitap': {
                type: 0,
                desc: 'missing',
                key: 'onPoitap'
            },
            'bindmarkertap': {
                type: 1,
                desc: 'diff',
                key: 'onMarkerTap'
            },
            'bindcallouttap': {
                type: 1,
                desc: 'diff',
                key: 'onCalloutTap'
            },
            'bindcontroltap': {
                type: 1,
                desc: 'diff',
                key: 'onControlTap'
            },
            'bindregionchange': {
                type: 1,
                desc: 'diff',
                key: 'onRegionChange'
            },
            'bindtap': {
                type: 1,
                desc: 'diff',
                key: 'onTap'
            }
        }
    },
    'modal': {
        type: 5,
        originName: 'custom-modal',
        tagName: customComponentNamePrefix + 'custom-modal',
        path: customComponentPrefix + '/__component/custom-modal/custom-modal',
        props: {
            "bindconfirm": {
                type: 1,
                desc: 'diff',
                key: 'onModalClick'
            },
            "bindcancel": {
                type: 1,
                desc: 'diff',
                key: 'onModalClose'
            }
        }
    },
    'button': {
        type: 5,
        originName: 'btn',
        tagName: customComponentNamePrefix + 'btn',
        path: customComponentPrefix + '/__component/btn/btn',
        props: {
            "catchTap": {
                type: 1,
                desc: 'diff',
                key: 'onCatchTap'
            },
            'catchtap': {
                type: 1,
                desc: 'diff',
                key: 'onCatchTap'
            },
            "bindgetuserinfo": {
                type: 1,
                desc: 'diff',
                key: 'onGetuserInfo'
            },
            "bindopensetting": {
                type: 1,
                desc: 'diff',
                key: 'onOpenSetting'
            },
            "bindgetphonenumber": {
                type: 1,
                desc: 'diff',
                key: 'onGetPhoneNumber'
            }
        }
    },
    'toast': {
        type: 5,
        originName: 'custom-toast',
        tagName: customComponentNamePrefix + 'custom-toast',
        path: customComponentPrefix + '/__component/custom-toast/custom-toast',
        props: {
            "bindchange": {
                type: 1,
                desc: 'diff',
                key: 'onTostChange'
            }
        }
    },
    'loading': {
        type: 5,
        originName: 'custom-loading',
        tagName: customComponentNamePrefix + 'custom-loading',
        path: customComponentPrefix + '/__component/custom-loading/custom-loading',
        props: {
            "bindchange": {
                type: 1,
                desc: 'diff',
                key: 'onLoadChange'
            }
        }
    },

    'action-sheet': {
        type: 5,
        originName: 'custom-action-sheet',
        tagName: customComponentNamePrefix + 'custom-action-sheet',
        path: customComponentPrefix + '/__component/custom-action-sheet/custom-action-sheet',
        props: {
            "bindchange": {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            }
        }
       
    },

    'action-sheet-item': {
        type: 5,
        originName: 'action-sheet-item',
        tagName: customComponentNamePrefix + 'action-sheet-item',
        path: customComponentPrefix + '/__component/action-sheet-item/action-sheet-item',
        props: {
            "bindtap": {
                type: 1,
                desc: 'diff',
                key: 'onTap'
            }
        }
    },

    "action-sheet-cancel": {
        type: 5,
        originName: 'action-sheet-cancel',
        tagName: customComponentNamePrefix + 'action-sheet-cancel',
        path: customComponentPrefix + '/__component/action-sheet-cancel/action-sheet-cancel'
    },
    
    'canvas': {
        props: {
            'canvas-id': {
                type: 1,
                desc: 'diff',
                key: 'id'
            },
            'bindtouchstart': {
                type: 1,
                desc: 'diff',
                key: 'onTouchStart'
            },
            'bindtouchmove': {
                type: 1,
                desc: 'diff',
                key: 'onTouchMove'
            },
            'bindtouchend': {
                type: 1,
                desc: 'diff',
                key: 'onTouchEnd'
            },
            'bindtouchcancel': {
                type: 1,
                desc: 'diff',
                key: 'onTouchCancel'
            },
            'bindlongtap': {
                type: 1,
                desc: 'diff',
                key: 'onLongTap'
            },
            'binderror': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    }
};
