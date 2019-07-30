const { createSupportProp } = require('./utils.js');
const Config = require('../../config.js');
const customComponentPrefix = Config.library.customComponentPrefix;
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
    'map': {
        name: '地图',
        type: 5,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/map.html',
            alipay: 'https://docs.alipay.com/mini/component/map'
        },
        tagName: 'custom-map',
        path: customComponentPrefix + '/__component/custom-map/custom-map',
        desc: 'use custom map component instead default map component.',
        props: {
            'longitude': createSupportProp('中心经度'),
            'latitude': createSupportProp('中心纬度'),
            'scale': createSupportProp('缩放级别'),
            'markers': {
                name: '标记点',
                type: 5,
                status: 1,
                desc: '标记点用于在地图上显示标记的位置',
                props: {
                    'id': createSupportProp('marker 点击事件回调会返回此 id。建议为每个 marker 设置上 number 类型 id，保证更新 marker 时有更好的性能。'),
                    'latitude': createSupportProp('浮点数，范围 -90 ~ 90'),
                    'longitude': createSupportProp('浮点数，范围 -180 ~ 180'),
                    'title': createSupportProp('点击时显示，callout存在时将被忽略'),
                    'zIndex': {
                        type: 0,
                        status: 2,
                        desc: '显示层级',
                    },
                    'iconPath': createSupportProp('项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径和网络图片（2.3.0）'),
                    'rotate': createSupportProp('顺时针旋转的角度，范围 0 ~ 360，默认为 0'),
                    'alpha': createSupportProp('默认 1，无透明，范围 0 ~ 1'),
                    'width': createSupportProp('默认为图片实际宽度'),
                    'height': createSupportProp('默认为图片实际高度'),
                    'callout': {
                        name: '自定义标记点上方的气泡窗口',
                        desc: '支持的属性见下表，可识别换行符。',
                        type: 5,
                        status: '1',
                        props: {
                            'content': createSupportProp('文本'),
                            'color': {
                                type: 0,
                                status: 2,
                                desc: '文本颜色',
                            },
                            'fontSize': {
                                type: 0,
                                status: 2,
                                desc: '文字大小',
                            },
                            'borderRadius': {
                                type: 0,
                                status: 2,
                                desc: '边框圆角',
                            },
                            'borderWidth': {
                                type: 0,
                                status: 2,
                                desc: '边框宽度',
                            },
                            'borderColor': {
                                type: 0,
                                status: 2,
                                desc: '边框颜色',
                            },
                            'bgColor': {
                                type: 0,
                                status: 2,
                                desc: '背景色',
                            },
                            'padding': {
                                type: 0,
                                status: 2,
                                desc: '文本边缘留白',
                            },
                            'display': {
                                type: 0,
                                status: 2,
                                desc: "BYCLICK':点击显示; 'ALWAYS':常显",
                            },
                            'textAlign': {
                                type: 0,
                                status: 2,
                                desc: '文本对齐方式',
                            }
                        }
                    },
                    'label': {
                        name: '为标记点旁边增加标签',
                        desc: '支持的属性见下表，可识别换行符。',
                        type: 5,
                        status: 1,
                        props: {
                            'content': createSupportProp('文本'),
                            'color': createSupportProp('文本颜色'),
                            'fontSize': createSupportProp('文字大小'),
                            'x': {
                                type: 0,
                                status: 2,
                                desc: 'label的坐标（废弃）',
                            },
                            'y': {
                                type: 0,
                                status: 2,
                                desc: 'label的坐标（废弃）',
                            },
                            'anchorX': {
                                type: 0,
                                status: 2,
                                desc: 'label的坐标，原点是 marker 对应的经纬度',
                            },
                            'anchorY': {
                                type: 0,
                                status: 2,
                                desc: 'label的坐标，原点是 marker 对应的经纬度',
                            },
                            'borderWidth': {
                                type: 0,
                                status: 2,
                                desc: '边框宽度',
                            },
                            'borderColor': {
                                type: 0,
                                status: 2,
                                desc: '边框颜色',
                            },
                            'borderRadius': createSupportProp('边框圆角'),
                            'bgColor': createSupportProp('背景色'),
                            'padding': createSupportProp('文本边缘留白'),
                            'textAlign': {
                                type: 0,
                                status: 2,
                                desc: '文本对齐方式。有效值: left, right, center',
                            },
                        }
                    },
                    'anchor': {
                        type: 1,
                        status: 0,
                        desc: '{x, y}，x 表示横向(0-1)，y 表示竖向(0-1)。{x: .5, y: 1} 表示底边中点',
                        key: 'anchorX,anchorY',
                    },
                    'aria-label': {
                        type: 0,
                        status: 2,
                        desc: '无障碍访问，（属性）元素的额外描述',
                    }
                }
            },
            'covers': {
                type: 0,
                status: 2,
                desc: '即将移除，请使用 markers',
            },
            'polyline': {
                name: '路线',
                desc: '指定一系列坐标点，从数组第一项连线至最后一项',
                type: '5',
                status: 1,
                props: {
                    'points': createSupportProp('经纬度数组'),
                    'color': createSupportProp('线的颜色'),
                    'width': createSupportProp('线的宽度'),
                    'dottedLine': createSupportProp('是否虚线'),
                    'arrowLine': {
                        type: 0,
                        status: 2,
                        desc: '带箭头的线',
                    },
                    'arrowIconPath': {
                        type: 0,
                        status: 2,
                        desc: '更换箭头图标',
                    },
                    'borderColor': {
                        type: 0,
                        status: 2,
                        desc: '线的边框颜色',
                    },
                    'borderWidth': {
                        type: 0,
                        status: 2,
                        desc: '线的厚度',
                    }
                }
            },
            'circles': {
                name: '圆',
                desc: '在地图上显示圆',
                status: 0,
                props: {
                    'latitude': createSupportProp('纬度'),
                    'longitude': createSupportProp('经度'),
                    'color': createSupportProp('描边的颜色'),
                    'fillColor': createSupportProp('填充颜色'),
                    'radius': createSupportProp('半径'),
                    'strokeWidth': createSupportProp('描边的宽度')
                }
            },
            'controls': {
                name: '控件',
                desc: '控件（即将废弃，建议使用 cover-view 代替在地图上显示控件，控件不随着地图移动。即将废弃，请使用 cover-view',
                type: 5,
                status: 0,
                props: {
                    'id': createSupportProp('在控件点击事件回调会返回此id'),
                    'position': createSupportProp('控件相对地图位置'),
                    'iconPath': createSupportProp('项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径'),
                    'clickable': createSupportProp('默认不可点击'),
                }
            },
            'include-points': createSupportProp('缩放视野以包含所有给定的坐标点'),
            'show-location': createSupportProp('显示带有方向的当前定位点'),
            'polygons': {
                name: '多边形',
                desc: '指定一系列坐标点，根据 points 坐标数据生成闭合多边形',
                type: 5,
                status: 1,
                props: {
                    'points': createSupportProp('显示带有方向的当前定位点'),
                    'strokeWidth': {
                        type: 0,
                        status: 2,
                        desc: '描边的宽度',
                    },
                    'strokeColor': {
                        type: 0,
                        status: 2,
                        desc: '描边的颜色',
                    },
                    'fillColor': createSupportProp('显示带有方向的当前定位点'),
                    'zIndex': {
                        type: 0,
                        status: 2,
                        desc: '设置多边形Z轴数值',
                    }
                }
            },
            'subkey': {
                type: 0,
                status: 2,
                desc: '个性化地图使用的key',
            },
            'layer-style': {
                type: 0,
                status: 2,
                desc: '个性化地图配置的 style，不支持动态修改',
            },
            'rotate': {
                type: 0,
                status: 2,
                desc: '旋转角度，范围 0 ~ 360, 地图正北和设备 y 轴角度的夹角',
            },
            'skew': {
                type: 0,
                status: 2,
                desc: '倾斜角度，范围 0 ~ 40 , 关于 z 轴的倾角',
            },
            'enable-3D': {
                type: 0,
                status: 2,
                desc: '展示3D楼块(工具暂不支持）',
            },
            'show-compass': {
                type: 0,
                status: 2,
                desc: '显示指南针',
            },
            'enable-overlooking': {
                type: 0,
                status: 2,
                desc: '开启俯视',
            },
            'enable-zoom': {
                type: 0,
                status: 2,
                desc: '是否支持缩放',
            },
            'enable-rotate': {
                type: 0,
                status: 2,
                desc: '是否支持旋转',
            },
            'enable-satellite': {
                type: 0,
                status: 2,
                desc: '是否开启卫星图',
            },
            'enable-traffic': {
                type: 0,
                status: 2,
                desc: '是否开启实时路况',
            },
            'bindupdated': {
                type: 0,
                status: 2,
                desc: '在地图渲染更新完成时触发',
                key: 'onUpdated',
            },
            'bindpoitap': {
                type: 0,
                status: 2,
                desc: '点击地图poi点时触发',
                key: 'onPoitap',
            },
            'bindmarkertap': {
                type: 1,
                status: 0,
                desc: '点击标记点时触发，会返回marker的id',
                key: 'onMarkerTap',
            },
            'bindcallouttap': {
                type: 1,
                status: 0,
                desc: '点击标记点对应的气泡时触发，会返回marker的id',
                key: 'onCalloutTap',
            },
            'bindcontroltap': {
                type: 1,
                status: 0,
                desc: '点击控件时触发，会返回control的id',
                key: 'onControlTap',
            },
            'bindregionchange': {
                type: 1,
                status: 0,
                desc: '视野发生变化时触发',
                key: 'onRegionChange',
                params: {
                    'type': createSupportProp(''),
                    'causedBy': {
                        type: 0,
                        status: 2,
                        desc: '拖动地图导致(drag)、缩放导致(scale)、调用接口导致(update)',
                    }
                }
            },
            'bindtap': {
                type: 1,
                status: 0,
                desc: '点击地图时触发',
                key: 'onTap',
            }
        }
    }
};