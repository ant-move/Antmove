// pages/manage/manage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        confirm: "确认",
        cancel: '取消',
        title: '标题',
        nocancel: false,
        modalHidden: false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    bindconfirm: function () {
        console.log('bindconfirm');
    },
    bindcancel: function () {
        console.log('bindcancel');
    },
    showToast: function () {
        wx.showToast({
            title: '提示',
            icon: "loading",
        });
    },
    showModal: function () {
        wx.showModal({
            title: '提示',
            content: '是否是否是否',
            // cancelText: "no",
            // confirmText: "yes",
            // showCancel: true,
            // cancelColor: 'red',
            // confirmColor: 'pink',
            success (res) {
                console.log(res);
                if (res.confirm) {
                    console.log('用户点击确定');
                } else if (res.cancel) {
                    console.log('用户点击取消');
                }
            }
        });
    },
    showActionSheet: function () {
        wx.showActionSheet({
            itemList: ['菜单1', '菜单2', '菜单3', '菜单4'],
            itemColor: "red",
            success (res) {
                console.log(res);
            }
        });
    },
    showLoading: function () {
        wx.showLoading({});
    },
    hideToast: function () {
        wx.hideToast({
            success (res) {
                console.log(res);
            },
            complete () {
                console.log('complete');
            },
            fail () {
                console.log('fail');
            }
        });
    },
    pageScrollTo: function () {
        wx.pageScrollTo({
            scrollTop: 100,
            duration: 500,
            success () {
                console.log('success');
            }
        });
    },
    chooseImage: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                // tempFilePath可以作为img标签的src属性显示图片
                // wx.compressImage({
                //   src: res.tempFilePaths[0], // 图片路径
                //   quality: 80, // 压缩质量
                //   success(ret) {
                //     console.log(ret)
                //   },
                //   fail(err) {
                //     console.log(err)
                //   }
                // })
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePaths[0],
                    success (res) {
                        console.log(res);
                    },
                    fail (err) {
                        console.log(err);
                    }
                });
            },
            fail (err) {
                console.log(err);
            }
        });
    },
    compressImage: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                // tempFilePath可以作为img标签的src属性显示图片
                wx.compressImage({
                    src: res.tempFilePaths[0], // 图片路径
                    quality: 80, // 压缩质量
                    success (ret) {
                        console.log(ret);
                    },
                    fail (err) {
                        console.log(err);
                    }
                });
            },
            fail (err) {
                console.log(err);
            }
        });
    },
    saveImageToPhotosAlbum: function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success (res) {
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePaths[0],
                    // 'http://5b0988e595225.cdn.sohucs.com/images/20170810/482d98e064194561955bddb73f61384c.png',
                    success (res) {
                        console.log(res);
                    },
                    fail (err) {
                        console.log(err);
                    }
                });
            },
            fail (err) {
                console.log(err);
            }
        });
    },
    onReady: function () {
        const ctx = wx.createCanvasContext('myCanvas');

        ctx.setFillStyle('red');
        ctx.fillRect(10, 10, 150, 100);
        ctx.draw();
        ctx.fillRect(50, 50, 150, 100);
        ctx.draw(true, function () {
            wx.canvasToTempFilePath({
                x: 100,
                y: 200,
                width: 50,
                height: 50,
                destWidth: 100,
                destHeight: 100,
                canvasId: 'myCanvas',
                success (res) {
                    console.log(res.tempFilePath);
                }
            });
        });
        const data = new Uint8ClampedArray([255, 0, 0, 1]);
        wx.canvasPutImageData({
            canvasId: 'myCanvas',
            x: 0,
            y: 0,
            width: 1,
            data,
            success (res) {
                console.log(res);
            }
        });
        wx.canvasGetImageData({
            canvasId: 'myCanvas',
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            success (res) {
                console.log(res.width); // 100
                console.log(res.height); // 100
                console.log(res.data instanceof Uint8ClampedArray); // true
                console.log(res.data.length); // 100 * 100 * 4
            }
        });
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
    back: function () {
        wx.navigateBack({
            delta: 1,
            success: () => {
                console.log('success');
            },
            fail: () => {
                console.log('fail');
            },
            complete: () => {
                console.log('complete');
            }
        });
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },
    choose: function () {
        wx.chooseImage({
            success (res) {
                const tempFilePaths = res.tempFilePaths;
                wx.saveFile({
                    tempFilePath: tempFilePaths[0],
                    success (res) {
                        console.log(res.savedFilePath);
                    }
                });
            }
        });
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {}
});
