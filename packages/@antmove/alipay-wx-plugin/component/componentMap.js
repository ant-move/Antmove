/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 */
module.exports = {
    sjs: {
        type: 1,
        tagName: 'wxs',
        props: {
            'from': {
                type: 1,
                desc: 'diff',
                key: 'src'
            },
            'name': {
                type: 1,
                desc: 'diff',
                key: 'module'
            }
        }
    },
    view: {
        props: {
            'disable-scroll': {
                type: 0,
                desc: 'Not support'
            },
            'hover-start-time': {
                type: 4,
                desc: 'missing default value.'
            },
            'hover-stay-time': {
                type: 4,
                desc: 'missing default value.'
            },
            'onAppear': {
                type: 0,
                desc: 'Not support'
            },
            'onDisappear': {
                type: 0,
                desc: 'Not support'
            },
            'onFirstAppear': {
                type: 0,
                desc: 'Not support'
            }
        }
    },
    'swiper': {
        props: {
            'active-class': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'changing-class': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'acceleration': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'disable-programmatic-animation': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'disable-touch': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            }
        }
    },
    'scroll-view': {
        props: {
            'scroll-animation-duration': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'enable-back-to-top': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'trap-scroll': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'onScrollToUpper': {
                type: 1,
                desc: 'diff',
                key: 'bindscrolltoupper',
                params: {
                    scrollToUp: {
                        type: 1,
                        desc: 'diff',
                        key: 'scrolltoup',
                    }
                }
            },
            'onScrollToLower': {
                type: 1,
                desc: 'diff',
                key: 'bindscrolltolower',
                params: {
                    scrollToLower: {
                        type: 1,
                        desc: 'diff',
                        key: 'scrolltolower',
                    }
                }
            },
            'onScroll': {
                type: 1,
                desc: 'diff',
                key: 'bindscroll'
            }
        },
    },
    'movable-view': {
        props: {
            'onChangeEnd': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            }
        }
    },
    'audio': {
        props: {
            'onError': {
                type: 1,
                desc: 'diff',
                key: 'binderror'
            },
            'onPlay': {
                type: 1,
                desc: 'diff',
                key: 'bindplay'
            },
            'onPause': {
                type: 1,
                desc: 'diff',
                key: 'bindpause'
            },
            'onTimeUpdate': {
                type: 1,
                desc: 'diff',
                key: 'bindtimeupdate'
            },
            'onEnded': {
                type: 1,
                desc: 'diff',
                key: 'bindended'
            }
        }
    },
    'image': {
        props: {
            'onError': {
                type: 1,
                desc: 'diff',
                key: 'binderror'
            },
            'onLoad': {
                type: 1,
                desc: 'diff',
                key: 'bindload'
            }
        }
    },
    'video': {
        props: {
            'objectFit': {
                type: 1,
                desc: 'diff',
                key: 'object-fit'
            },
            'show-mute-btn': {
                type: 4,
                desc: 'missing default value',
            },
            'show-thin-progress-bar': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'enableProgressGesture': {
                type: 1,
                desc: 'diff',
                key: 'enable-progress-gesture'
            },
            'mobilenetHintType': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'onLoading': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'onUserAction': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'onPlay': {
                type: 1,
                desc: 'diff',
                key: 'bindplay'
            },
            'onPause': {
                type: 1,
                desc: 'diff',
                key: 'bindpause'
            },
            'onEnded': {
                type: 1,
                desc: 'diff',
                key: 'bindended'
            },
            'onTimeUpdate': {
                type: 1,
                desc: 'diff',
                key: 'bindtimeupdate'
            },
            'onError': {
                type: 1,
                desc: 'diff',
                key: 'binderror'
            },
            'onFullScreenChange': {
                type: 1,
                desc: 'diff',
                key: 'bindfullscreenchange'
            },
        }

    },
    'camera': {
        props: {
            'onStop': {
                type: 1,
                desc: 'diff',
                key: 'bindstop'
            },
            'onError': {
                type: 1,
                desc: 'diff',
                key: 'binderror'
            }
        }
    },
    'web-view': {
        props: {
            'onMessage': {
                type: 1,
                desc: 'diff',
                key: 'bindmessage'
            }
        }
    },
};
