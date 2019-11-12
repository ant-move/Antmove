// const Config = require('../config.js');

// const customComponentPrefix = Config.library.customComponentPrefix;
// const customComponentNamePrefix = Config.library.customComponentNamePrefix;
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
    'text': {
        props: {
            'number-of-lines': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            }
        }
    },
    'progress': {
        props: {
            'percent': {
                type: 3,
                desc: 'diffType',
                key: '支付宝小程序是Float类型,微信是Number类型'
            },
            'active-color': {
                type: 1,
                desc: 'diff',
                key: 'activeColor'
            },
            'background-color': {
                type: 1,
                desc: 'diff',
                key: 'backgroundColor'
            }
        }
    },
    'button': {
        props: {
            'scope': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'app-parameter': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'public-id': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'open-type': {
                props: {
                    'getAuthorize': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'contactShare': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'lifestyle': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    }
                }
            },
            onTap: {
                type: 1,
                desc: 'diff',
                key: 'bindtap'
            }
        }
    },
    'form': {
        props: {
            'onSubmit': {
                type: 1,
                desc: 'diff',
                key: 'bindsubmit'
            },
            'onReset': {
                type: 1,
                desc: 'diff',
                key: 'bindreset'
            }
        }
    },
    'input': {
        props: {
            'type': {
                props: {
                    'numberpad': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'digitpad': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'idcardpad': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                }
            },
            'reandomNumber': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'controlled': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'onInput': {
                type: 1,
                desc: 'diff',
                key: 'bindinput'
            },
            'onFocus': {
                type: 1,
                desc: 'diff',
                key: 'bindfocus'
            },
            'onBlur': {
                type: 1,
                desc: 'diff',
                key: 'bindblur'
            },
            'onConfirm': {
                type: 1,
                desc: 'diff',
                key: 'bindconfirm'
            }
        }
    },
    'textarea': {
        props: {
            'show-count': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'controlled': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'onFocus': {
                type: 1,
                desc: 'diff',
                key: 'bindfocus'
            },
            'onBlur': {
                type: 1,
                desc: 'diff',
                key: 'bindblur'
            },
            'onConfirm': {
                type: 1,
                desc: 'diff',
                key: 'bindconfirm'
            },
            'onInput': {
                type: 1,
                desc: 'diff',
                key: 'bindinput'
            }
        }
    },
    'radio-group': {
        props: {
            'onChange': {
                type: 1,
                desc: 'diff',
                key: 'bindchange'
            }
        }
    },
    'checkbox-group': {
        props: {
            'onChange': {
                type: 1,
                desc: 'diff',
                key: 'bindchange'
            }
        }
    },
    'switch': {
        props: {
            'controlled': {
                type: 0,
                desc: 'diff',
                key: 'Not support'
            },
            'onChange': {
                type: 1,
                desc: 'diff',
                key: 'bindchange'
            }
        }
    },
    'slider': {
        props: {
            'onChange': {
                type: 1,
                desc: 'diff',
                key: 'bindchange'
            },
            'background-color': {
                type: 1,
                desc: 'diff',
                key: 'backgroundColor'
            },
            'active-color': {
                type: 1,
                desc: 'diff',
                key: 'activeColor'
            },
            'handle-size': {
                type: 1,
                desc: 'diff',
                key: 'block-size'
            },
            'handle-color': {
                type: 1,
                desc: 'diff',
                key: 'block-color'
            },
            'onChanging': {
                type: 1,
                desc: 'diff',
                key: 'bindchanging'
            }
        }
    },
    'picker': {
        props: {
            'onChange': {
                type: 1,
                desc: 'diff',
                key: 'bindchange'
            }
        }
    },
    'picker-view': {
        props: {
            'onChange': {
                type: 1,
                desc: 'diff',
                key: 'bindchange'
            }
        }
    },
    'canvas': {
        props: {
            'id': {
                type: 1,
                desc: 'diff',
                key: 'canvas-id'
            },
            'width': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'height': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'onTouchStart': {
                type: 1,
                desc: 'diff',
                key: 'bindtouchstart'
            },
            'onTouchMove': {
                type: 1,
                desc: 'diff',
                key: 'bindtouchmove'
            },
            'onTouchEnd': {
                type: 1,
                desc: 'diff',
                key: 'bindtouchend'
            },
            'onTouchCancel': {
                type: 1,
                desc: 'diff',
                key: 'bindtouchcancel'
            },
            'onLongTap': {
                type: 1,
                desc: 'diff',
                key: 'bindlongtap'
            }
        }
    },
    'map': {
        props: {
            'include-padding': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'ground-overlays': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'title-overlay': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'setting': {
                type: 0,
                desc: 'missing',
                key: 'Not support'
            },
            'markers': {
                props: {
                    'customCallout': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'iconAppendStr': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'iconAppendStrColor': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'fixedoint': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'markerLevel': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'style': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                }
            },
            'polyline': {
                props: {
                    'iconPath': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'iconWidth': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'zIndex': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    },
                    'colorList': {
                        type: 0,
                        desc: 'missing',
                        key: 'Not support'
                    }
                }
            },
            'onMarkerTap': {
                type: 1,
                desc: 'diff',
                key: 'bindmarkertap'
            },
            'onCalloutTap': {
                type: 1,
                desc: 'diff',
                key: 'bindcallouttap'
            },
            'onControlTap': {
                type: 1,
                desc: 'diff',
                key: 'bindcontroltap'
            },
            'onRegionChange': {
                type: 1,
                desc: 'diff',
                key: 'bindregionchange'
            },
            'onTap': {
                type: 1,
                desc: 'diff',
                key: 'bindtap'
            }
        }
    }
};
