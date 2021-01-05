const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/map/map"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "map",
            path: "page/component/pages/map/map"
        };
    },

    data: {
        latitude: 23.099994,
        longitude: 113.32452,
        markers: [
            {
                latitude: 23.099994,
                longitude: 113.32452,
                name: "T.I.T 创意园"
            }
        ],
        covers: [
            {
                latitude: 23.099994,
                longitude: 113.34452,
                iconPath: "/image/location.png"
            },
            {
                latitude: 23.099994,
                longitude: 113.30452,
                iconPath: "/image/location.png"
            }
        ],
        polygons: [
            {
                points: [
                    {
                        latitude: 23.099994,
                        longitude: 113.32452
                    },
                    {
                        latitude: 23.098994,
                        longitude: 113.32352
                    },
                    {
                        latitude: 23.098994,
                        longitude: 113.32552
                    }
                ],
                strokeWidth: 3,
                strokeColor: "#FFFFFFAA"
            }
        ],
        subKey: "B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7",
        enable3d: false,
        showCompass: false,
        enableOverlooking: false,
        enableZoom: true,
        enableScroll: true,
        enableRotate: false,
        drawPolygon: false
    },

    toggle3d() {
        this.setData({
            enable3d: !this.data.enable3d
        });
    },

    toggleShowCompass() {
        this.setData({
            showCompass: !this.data.showCompass
        });
    },

    toggleOverlooking() {
        this.setData({
            enableOverlooking: !this.data.enableOverlooking
        });
    },

    toggleZoom() {
        this.setData({
            enableZoom: !this.data.enableZoom
        });
    },

    toggleScroll() {
        this.setData({
            enableScroll: !this.data.enableScroll
        });
    },

    toggleRotate() {
        this.setData({
            enableRotate: !this.data.enableRotate
        });
    },

    togglePolygon() {
        this.setData({
            drawPolygon: !this.data.drawPolygon
        });
    },

    regionchange(e) {
        console.log(e.type);
    },

    markertap(e) {
        console.log(e.markerId);
    },

    controltap(e) {
        console.log(e.controlId);
    },

    onupdated() {
        console.log("111");
    },

    onpoitap() {
        console.log("222");
    },

    oncallouttap() {
        console.log("333");
    },

    ontap() {
        console.log("444");
    }
});
