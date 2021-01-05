const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/image/image"
    }
});
const sourceType = [["camera"], ["album"], ["camera", "album"]];
const sizeType = [["compressed"], ["original"], ["compressed", "original"]];

_Page({
    onShareAppMessage() {
        return {
            title: "图片",
            path: "page/API/pages/image/image"
        };
    },

    data: {
        imageList: [],
        filePath: "",
        sourceTypeIndex: 2,
        sourceType: ["拍照", "相册", "拍照或相册"],
        sizeTypeIndex: 2,
        sizeType: ["压缩", "原图", "压缩或原图"],
        countIndex: 8,
        count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },

    sourceTypeChange(e) {
        this.setData({
            sourceTypeIndex: e.detail.value
        });
    },

    sizeTypeChange(e) {
        this.setData({
            sizeTypeIndex: e.detail.value
        });
    },

    countChange(e) {
        this.setData({
            countIndex: e.detail.value
        });
    },

    chooseImage() {
        const that = this;

        _my.chooseImage({
            sourceType: sourceType[this.data.sourceTypeIndex],
            sizeType: sizeType[this.data.sizeTypeIndex],
            count: this.data.count[this.data.countIndex],

            success(res) {
                console.log(res);
                that.setData({
                    imageList: res.tempFilePaths,
                    filePath: res.tempFilePaths[0]
                });
            }
        });
    },

    previewImage(e) {
        const current = e.target.dataset.src;

        _my.previewImage({
            current,
            urls: this.data.imageList
        });
    },

    compressImage() {
        _my.compressImage({
            src: this.data.filePath,
            // 图片路径
            quality: 80,

            // 压缩质量
            success(ret) {
                console.log(ret);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    getImageInfo() {
        _my.getImageInfo({
            src: this.data.filePath,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    saveImageToPhotosAlbum() {
        _my.saveImageToPhotosAlbum({
            filePath: this.data.filePath,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    }
});
