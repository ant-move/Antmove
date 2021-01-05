const _Page = require("../../../__antmove/component/componentClass.js")("Page");
import { filterPage } from "../../../util/debounce";
const basicContainers = [
    {
        scopes: ["view"],
        name: "基础视图",
        // thumb: '/image/icon/view.png',
        // nameEn: 'View',
        path: "/page/component/view/view"
    },
    {
        scopes: ["scroll-view"],
        name: "滚动视图",
        // thumb: '/image/icon/scroll-view.png',
        // nameEn: 'ScrollView',
        path: "/page/component/scroll-view/scroll-view"
    },
    {
        scopes: ["swiper"],
        name: "滑动视图",
        // thumb: '/image/icon/swiper.png',
        // nameEn: 'Swiper',
        path: "/page/component/swiper/swiper"
    },
    {
        scopes: ["cover-view"],
        name: "cover-view(image)",
        // thumb: '/image/icon/swiper.png',
        // nameEn: 'Swiper',
        path: "/page/component/cover-view/cover-view"
    }
];
const basicBasics = [
    {
        scopes: ["text"],
        name: "文字",
        // thumb: '/image/icon/text.png',
        // nameEn: 'Text',
        path: "/page/component/text/text"
    },
    {
        scopes: ["icon"],
        name: "图标",
        // thumb: '/image/icon/icon.png',
        // nameEn: 'Icon',
        path: "/page/component/icon/icon"
    }
];
const basicFeedBacks = [
    {
        scopes: ["progress"],
        name: "进度条",
        // thumb: '/image/icon/progress.png',
        // nameEn: 'Progress',
        path: "/page/component/progress/progress"
    }
];
const basicForms = [
    {
        scopes: ["button"],
        name: "按钮",
        // thumb: '/image/icon/button.png',
        // nameEn: 'Button',
        path: "/page/component/button/button"
    },
    {
        scopes: ["form"],
        name: "表单",
        // thumb: '/image/icon/form.png',
        // nameEn: 'Form',
        path: "/page/component/form/form"
    },
    {
        scopes: ["label"],
        name: "标签",
        // thumb: '/image/icon/label.png',
        // nameEn: 'Label',
        path: "/page/component/label/label"
    },
    {
        scopes: ["input"],
        name: "输入框",
        // thumb: '/image/icon/input.png',
        // nameEn: 'Input',
        path: "/page/component/input/input"
    },
    {
        scopes: ["textarea"],
        name: "多行输入框",
        // thumb: '/image/icon/textarea.png',
        // nameEn: 'Textarea',
        path: "/page/component/textarea/textarea"
    },
    {
        scopes: ["radio"],
        name: "单选框",
        // thumb: '/image/icon/radio.png',
        // nameEn: 'Radio',
        path: "/page/component/radio/radio"
    },
    {
        scopes: ["checkbox"],
        name: "复选框",
        // thumb: '/image/icon/checkbox.png',
        // nameEn: 'Checkbox',
        path: "/page/component/checkbox/checkbox"
    },
    {
        scopes: ["switch"],
        name: "开关",
        // thumb: '/image/icon/switch.png',
        // nameEn: 'Switch',
        path: "/page/component/switch/switch"
    },
    {
        scopes: ["slider"],
        name: "滑动条",
        // thumb: '/image/icon/slider.png',
        // nameEn: 'Slider',
        path: "/page/component/slider/slider"
    },
    {
        scopes: ["picker-view"],
        name: "选择器视图",
        // thumb: '/image/icon/picker-view.png',
        // nameEn: 'PickerView',
        path: "/page/component/picker-view/picker-view"
    },
    {
        scopes: ["picker"],
        name: "选择器",
        // thumb: '/image/icon/picker.png',
        // nameEn: 'Picker',
        path: "/page/component/picker/picker"
    }
];
const basicNavigators = [
    {
        scopes: ["navigator"],
        name: "导航",
        // thumb: '/image/icon/navigator.png',
        // nameEn: 'Navigator',
        path: "/page/component/navigator/navigator"
    }
];
const basicMedias = [
    {
        scopes: ["image"],
        name: "图片",
        // thumb: '/image/icon/image.png',
        // nameEn: 'Image',
        path: "/page/component/image/image"
    },
    {
        scopes: ["audio"],
        name: "音频",
        // thumb: '/image/icon/slider.png',
        // nameEn: 'Audio',
        path: "/page/component/audio/audio"
    },
    {
        scopes: ["video"],
        name: "视频",
        //  thumb: '/image/icon/slider.png',
        //  nameEn: 'Video',
        path: "/page/component/video/video"
    }
];
const basicMaps = [
    {
        scopes: ["map"],
        name: "地图",
        // thumb: '/image/icon/map.png',
        // nameEn: 'Map',
        path: "/page/component/map/map"
    },
    {
        scopes: ["map"],
        name: "高级版地图",
        // thumb: '/image/icon/map.png',
        // nameEn: 'ext-Map',
        path: "/page/component/ext-map/index"
    },
    {
        scopes: ["map"],
        name: "室内地图",
        //  thumb: '/image/icon/map.png',
        //  nameEn: 'indoor-Map',
        path: "/page/component/indoor-map/indoor-map"
    }
];
const basicCanvas = [
    {
        scopes: ["canvas"],
        name: "画布",
        // thumb: '/image/icon/canvas.png',
        // nameEn: 'Canvas',
        path: "/page/component/canvas/canvas"
    }
];
const movableView = [
    {
        scopes: ["movable-view", "movable-area"],
        name: "推拽组件",
        // thumb: '/image/icon/canvas.png',
        // nameEn: 'movableView',
        path: "/page/component/movable-view/movable-view"
    }
];
const basicOpens = [
    {
        scopes: ["web-view"],
        name: "内嵌webview",
        // thumb: '/image/icon/webview.png',
        // nameEn: 'Webview',
        path: "/page/component/webview/webview"
    },
    {
        scopes: ["lifestyle"],
        name: "跳转生活号",
        //  thumb: '/image/icon/lifestyle.png',
        //  nameEn: 'Lifestyle',
        path: "/page/component/lifestyle/lifestyle"
    },
    {
        scopes: ["contact-button"],
        name: "跳转云客服",
        // thumb: '/image/icon/contact-button.png',
        // nameEn: 'contact-button',
        path: "/page/component/contact-button/contact-button"
    },
    {
        scopes: ["favorite"],
        name: "收藏",
        //  thumb: '/image/icon/favorite.png',
        //  nameEn: 'Favorite',
        path: "/page/component/favorite/favorite"
    }
];
let basicComponentList = [
    {
        type: "视图容器",
        list: filterPage(basicContainers)
    },
    {
        type: "基础组件",
        list: filterPage(basicBasics)
    },
    {
        type: "反馈",
        list: filterPage(basicFeedBacks)
    },
    {
        type: "表单",
        list: filterPage(basicForms)
    },
    {
        type: "导航",
        list: filterPage(basicNavigators)
    },
    {
        type: "媒体",
        list: filterPage(basicMedias)
    },
    {
        type: "画布",
        list: filterPage(basicCanvas)
    },
    {
        type: "拖拽组件",
        list: filterPage(movableView)
    },
    {
        type: "地图",
        list: filterPage(basicMaps)
    },
    {
        type: "开放组件",
        list: filterPage(basicOpens)
    }
];

_Page({
    data: {
        headline: "AMAP组件",
        subtitle: "包含AMAP小程序所支持的基础组件",
        active: 1,
        basicComponentList
    },

    onLoad() {},

    Change(e) {
        this.setData({
            active: e.target.dataset.index
        });
    }
});
