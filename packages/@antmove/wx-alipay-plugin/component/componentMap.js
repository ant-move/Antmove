/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 */
module.exports = {
    a: {
        type: 1,
        tagName: 'view'
    },
    wxs: {
        type: 1,
        tagName: 'import-sjs',
        props: {
            'src': {
                type: 1,
                desc: 'diff',
                key: 'from'
            },
            'module': {
                type: 1,
                desc: 'diff',
                key: 'name'
            }
        }
    },
    view: {
        props: {
            'aria-role': {
                type: 0,
                desc: 'missing'
            },
            'aria-label': {
                type: 0,
                desc: 'missing'
            },
            'hover-start-time': {
                type: 4,
                desc: 'missing default value.'
            },
            'hover-stay-time': {
                type: 4,
                desc: 'missing default value.'
            }
        }
    },
    'scroll-view': {
        props: {
            'aria-label': {
                type: 0,
                desc: 'missing'
            },
            'bindscrolltoupper': {
                type: 1,
                desc: 'diff',
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
                desc: 'diff',
                key: 'onScrollToLower',
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
                desc: 'diff',
                key: 'onScroll',
                params: {
                    deltaX: {
                        type: 0,
                        desc: 'missing'
                    },
                    deltaY: {
                        type: 0,
                        desc: 'missing'
                    }
                }
            }
        }
    },
    'swiper': {
        props: {
            'current-item-id': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'display-multiple-items': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'skip-hidden-item-layout': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'bindtransition': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'bindanimationfinish': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange',
                params: {
                    currentItemId: {
                        type: 0,
                        desc: 'missing'
                    },
                }
            },
            'indicator-color': {
                type: 4,
                desc: '#e8e8e8'
            },
            'indicator-active-color': {
                type: 4,
                desc: '#108ee9'
            }
        }
    },
    'movable-area': {
        props: {
            'scale-area': {
                type: 0,
                desc: 'missing'
            },
        }
    },
    'movable-view': {
        props: {
            'inertia': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'out-of-bounds': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'damping': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'friction': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'scale': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'scale-min': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'scale-max': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'scale-value': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'animation': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'bindscale': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'htouchmove': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'vtouchmove': {
                type: 0,
                desc: 'missing',
                msg: 'Not support'
            },
            'bindchange': {
                type: 1,
                desc: 'diff',
                key: 'onChange'
            }
        }
    },
    'cover-view': {
        props: {
            'scroll-top': {
                type: 0,
                desc: 'missing'
            },
            'aria-role': {
                type: 0,
                desc: 'missing'
            },
            'aria-label': {
                type: 0,
                desc: 'missing'
            }
        }
    },
    'cover-image': {
        props: {
            'bindload': {
                type: 0,
                desc: 'missing'
            },
            'binderror': {
                type: 0,
                desc: 'missing'
            },
            'aria-role': {
                type: 0,
                desc: 'missing'
            },
            'aria-label': {
                type: 0,
                desc: 'missing'
            }
        }
    },
    'navigator': {
        props: {
            'target': {
                type: 0,
                desc: 'missing'
            },
            'delta': {
                type: 0,
                desc: 'missing'
            },
            'app-id': {
                type: 0,
                desc: 'missing'
            },
            'path': {
                type: 0,
                desc: 'missing'
            },
            'extra-data': {
                type: 0,
                desc: 'missing'
            },
            'version': {
                type: 0,
                desc: 'missing'
            },
            'hover-stop-propagation': {
                type: 0,
                desc: 'missing'
            },
            'bindsuccess': {
                type: 0,
                desc: 'missing'
            },
            'bindfail': {
                type: 0,
                desc: 'missing'
            },
            'bindcomplete': {
                type: 0,
                desc: 'missing'
            },
            'aria-label': {
                type: 0,
                desc: 'missing'
            },
            'hover-start-time': {
                type: 4,
                desc: 'missing default value.'
            },
            'hover-stay-time': {
                type: 4,
                desc: 'missing default value.'
            },
            'open-type': {
                props: {
                    reLaunch: {
                        type: 0,
                        desc: 'missing'
                    },
                    exit: {
                        type: 0,
                        desc: 'missing'
                    }
                }
            }
        }
    },
    'functional-page-navigator': {
        type: 0,
        desc: 'missing'
    },
    'audio': {
        props: {
            'binderror': {
                type: 1,
                desc: 'diff',
                key: 'onError'
            },
            'bindplay': {
                type: 1,
                desc: 'diff',
                key: 'onPlay'
            },
            'bindpause': {
                type: 1,
                desc: 'diff',
                key: 'onPause'
            },
            'bindtimeupdate': {
                type: 1,
                desc: 'diff',
                key: 'onTimeUpdate'
            },
            'bindended': {
                type: 1,
                desc: 'diff',
                key: 'onEnded'
            }
        }
    },
    'image': {
        props: {
            'aria-label': {
                type: 0,
                desc: 'missing'
            },
            'binderror': {
                type: 1,
                desc: 'diff',
                key: 'onError'
            },
            'bindload': {
                type: 1,
                desc: 'diff',
                key: 'onLoad'
            }
        }
    },
    'video': {
        props: {
            'duration': {
                type: 0,
                desc: 'missing'
            },
            'danmu-list': {
                type: 0,
                desc: 'missing'
            },
            'danmu-btn': {
                type: 0,
                desc: 'missing'
            },
            'enable-danmu': {
                type: 0,
                desc: 'missing'
            },
            'loop': {
                type: 0,
                desc: 'missing'
            },
            'muted': {
                type: 0,
                desc: 'missing'
            },
            'initial-time': {
                type: 0,
                desc: 'missing'
            },
            'direction': {
                type: 0,
                desc: 'missing'
            },
            'show-progress': {
                type: 0,
                desc: 'missing'
            },
            'show-fullscreen-btn': {
                type: 0,
                desc: 'missing'
            },
            'show-play-btn': {
                type: 0,
                desc: 'missing'
            },
            'show-center-play-btn': {
                type: 0,
                desc: 'missing'
            },
            'enable-progress-gesture': {
                type: 0,
                desc: 'missing'
            },
            'show-mute-btn': {
                type: 0,
                desc: 'missing'
            },
            'title': {
                type: 0,
                desc: 'missing'
            },
            'play-btn-position': {
                type: 0,
                desc: 'missing'
            },
            'enable-play-gesture': {
                type: 0,
                desc: 'missing'
            },
            'auto-pause-if-navigate': {
                type: 0,
                desc: 'missing'
            },
            'auto-pause-if-open-native': {
                type: 0,
                desc: 'missing'
            },
            'vslide-gesture': {
                type: 0,
                desc: 'missing'
            },
            'vslide-gesture-in-fullscreen': {
                type: 0,
                desc: 'missing'
            },
            'bindfullscreenchange': {
                type: 0,
                desc: 'missing'
            },
            'bindwaiting': {
                type: 0,
                desc: 'missing'
            },
            'binderror': {
                type: 0,
                desc: 'missing'
            },
            'bindprogress': {
                type: 0,
                desc: 'missing'
            },
            'bindplay': {
                type: 1,
                desc: 'diff',
                key: 'onPlay'
            },
            'bindpause': {
                type: 1,
                desc: 'diff',
                key: 'onPause'
            },
            'bindended': {
                type: 1,
                desc: 'diff',
                key: 'onEnded'
            },
            'bindtimeupdate': {
                type: 1,
                desc: 'diff',
                key: 'onTimeUpdate'
            }
        }

    },
    'camera': {
        props: {
            'mode': {
                type: 0,
                desc: 'missing'
            },
            'flash': {
                type: 0,
                desc: 'missing'
            },
            'takePhoto': {
                type: 0,
                desc: 'missing'
            },
            'startRecord': {
                tyoe: 0,
                desc: 'missing'
            },
            'stopRecord': {
                tyoe: 0,
                desc: 'missing'
            },
            'bindstop': {
                type: 0,
                desc: 'missing'
            },
            'binderror': {
                type: 0,
                desc: 'missing'
            },
            'bindscancode': {
                type: 0,
                desc: 'missing'
            }
        }
    },
    'web-view': {
        props: {
            'bindload': {
                type: 0,
                desc: 'missing'
            },
            'binderror': {
                type: 0,
                desc: 'missing'
            },
            'bindmessage': {
                type: 1,
                desc: 'diff',
                key: 'onMessage'
            }
        }
    },
    'ad': {
        type: 0,
        desc: 'missing'
    },
    'official-account': {
        type: 0,
        desc: 'missing'
    }

};
