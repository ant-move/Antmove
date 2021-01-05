/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require("./utils");
const apiObj = {
    canIUse: {
        fn (params) {
            let paramsList = params.split(".");
            if (paramsList[1] && paramsList[1] === "success") {
                paramsList[1] = "return";
            }
            let str = paramsList.join(".");
            return my.canIUse(str);
        }
    },
    getSystemInfoSync: {
        fn () {
            let ret = my.getSystemInfoSync();
            return utils.defineGetter(
                ret,
                apiObj.getSystemInfoSync.body.returnValue.props,
                function (obj, prop) {
                    console.warn(
                        `getSystemInfoSync's return value is not support ${prop} attribute!`
                    );
                }
            );
        },
        body: {
            returnValue: {
                props: {
                    SDKVersion: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    benchmarkLevel: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    albumAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    cameraAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    locationAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    microphoneAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationAlertAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationBadgeAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationSoundAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    bluetoothEnabled: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    locationEnabled: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    wifiEnabled: {
                        type: 0,
                        desc: "暂不支持"
                    }
                }
            }
        }
    },
    getSystemInfo: {
        fn (obj = {}) {
            my.getSystemInfo({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        apiObj.getSystemInfo.body.returnValue.props,
                        function (obj, prop) {
                            console.warn(
                                `getSystemInfo's return value is not support ${prop} attribute!`
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
        body: {
            returnValue: {
                props: {
                    SDKVersion: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    benchmarkLevel: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    albumAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    cameraAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    locationAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    microphoneAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationAlertAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationBadgeAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    notificationSoundAuthorized: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    bluetoothEnabled: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    locationEnabled: {
                        type: 0,
                        desc: "暂不支持"
                    },
                    wifiEnabled: {
                        type: 0,
                        desc: "暂不支持"
                    }
                }
            }
        }
    },
    showToast: {
        fn (obj = {}) {
            if (obj.title) {
                obj.content = obj.title;
                delete obj.title;
            }
            if (!obj.duration) {
                obj.duration = 2000;
            }
            if (obj.icon) {
                if (obj.icon === "success") {
                    obj.type = "success";
                } else if (obj.icon === "loading") {
                    obj.type = "none";
                    console.warn("showToast暂不支持loading");
                } else {
                    obj.type = "none";
                }
                delete obj.icon;
            } else {
                obj.type = "success";
            }

            let params = utils.defineGetter(
                obj,
                apiObj.showToast.body.params.props,
                function (obj, prop) {
                    console.warn(
                        `showToast's params value is not support ${prop} attribute!`
                    );
                }
            );

            my.showToast(params);
        },
        body: {
            params: {
                props: {
                    /*
                    title: {
                        type: 1,
                        desc: 'title对应content'
                    },
                    icon: {
                        type: 1,
                        desc: 'icon对应type'
                    },
                    */
                    image: {
                        type: 0,
                        desc: "缺失"
                    },
                    mask: {
                        type: 0,
                        desc: "缺失"
                    }
                }
            }
        }
    },
    showModal: {
        fn (obj = {}) {
            if (obj.cancelText !== undefined) {
                obj.cancelButtonText = obj.cancelText;
                delete obj.cancelText;
            }

            if (obj.confirmText !== undefined) {
                obj.confirmButtonText = obj.confirmText;
                delete obj.confirmText;
            }

            let params = utils.defineGetter(
                obj,
                apiObj.showModal.body.params.props,
                function (obj, prop) {
                    console.warn(
                        `showModal's params value is not support ${prop} attribute!`
                    );
                }
            );

            my.confirm({
                ...params,
                success (res) {
                    if (res.confirm) {
                        res.cancel = false;
                    } else {
                        res.cancel = true;
                    }
                    obj.success && obj.success(res);
                }
            });
        },
        body: {
            params: {
                props: {
                    cancelText: {
                        type: 1,
                        desc: "cancelText对应cancelButtonText"
                    },
                    confirmText: {
                        type: 1,
                        desc: "confirmText对应confirmButtonText"
                    },
                    showCancel: {
                        type: 0,
                        desc: "缺失"
                    },
                    cancelColor: {
                        type: 0,
                        desc: "缺失"
                    },
                    confirmColor: {
                        type: 0,
                        desc: "缺失"
                    }
                }
            }
        }
    },
    showLoading: {
        fn (obj = {}) {
            if (obj.title) {
                obj.content = obj.title;
                delete obj.title;
            }
            let params = utils.defineGetter(
                obj,
                apiObj.showLoading.body.params.props,
                function (obj, prop) {
                    console.warn(
                        `showLoading's params value is not support ${prop} attribute!`
                    );
                }
            );
            my.showLoading(params);
        },
        body: {
            params: {
                props: {
                    title: {
                        type: 1,
                        desc: "title对应content"
                    },
                    mask: {
                        type: 0,
                        desc: "缺失"
                    }
                }
            }
        }
    },
    showActionSheet: {
        fn (obj = {}) {
            if (obj.itemList) {
                obj.items = obj.itemList;
                delete obj.itemList;
            }
            let params = utils.defineGetter(
                obj,
                apiObj.showActionSheet.body.params.props,
                function (obj, prop) {
                    console.warn(
                        `showActionSheet's params value is not support ${prop} attribute!`
                    );
                }
            );
            my.showActionSheet({
                ...params,
                success: res => {
                    res.tapIndex = res.index;
                    delete res.index;
                    obj.success && obj.success(res);
                }
            });
        },
        body: {
            params: {
                props: {
                    itemList: {
                        type: 1,
                        desc: "itemList对应items"
                    },
                    itemColor: {
                        type: 0,
                        desc: "缺失"
                    }
                }
            }
        }
    },
    hideToast: {
        fn (obj) {
            my.hideToast();
            if (typeof obj.success === "function") {
                obj.success();
            }
            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    hideLoading: {
        fn (obj) {
            my.hideLoading();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    showNavigationBarLoading: {
        fn (obj) {
            my.showNavigationBarLoading();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    setNavigationBarTitle: {
        fn (obj = {}) {
            return my.setNavigationBar(obj);
        }
    },
    // 暂不支持
    // setNavigationBarColor: {
    //     fn(obj) {
    //         let params = utils.defineGetter(obj,apiObj.setNavigationBarColor.body.params,function(obj,prop) {
    //             console.warn(`setNavigationBarColor's params value is not support ${prop} attribute!`);
    //         })
    //         my.setNavigationBar(params)
    //     },
    //     body: {
    //         params: {
    //             frontColor: {
    //                 type: 0,
    //                 desc: '缺失'
    //             },
    //             animation: {
    //                 type: 0,
    //                 desc: "缺失"
    //             }
    //         }
    //     }
    // },
    hideNavigationBarLoading: {
        fn (obj) {
            my.hideNavigationBarLoading();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    stopPullDownRefresh: {
        fn (obj) {
            my.stopPullDownRefresh();

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    pageScrollTo: {
        fn (obj = {}) {
            let params = utils.defineGetter(
                obj,
                apiObj.pageScrollTo.body.params,
                function (obj, prop) {
                    console.warn(
                        `pageScrollTo's params value is not support ${prop} attribute!`
                    );
                }
            );
            my.pageScrollTo(params);
            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        },
        body: {
            params: {
                duration: {
                    type: 0,
                    desc: "缺失"
                }
            }
        }
    },
    request: {
        fn (obj = {}) {
            if (obj.header) {
                obj.headers = obj.header;
                delete obj.header;
            }

            if (obj.responseType ) {
                obj.dataType = obj.responseType;
                delete obj.responseType;                
            }
            
            if (
                obj.method &&
                apiObj.request.body.params.method[obj.method] !== undefined
            ) {
                console.warn(`requst暂不支持${obj.method}请求方式`);
                obj.method = 'POST';
            }

            if (obj.responseType) {
                console.warn("支付宝暂不支持responseType");
            }
            let task = my.request({
                ...obj,
                success (res) {
                    res.header = res.headers;
                    res.statusCode = res.status;
                    delete res.headers;
                    delete res.status;
                    obj.success && obj.success(res);
                },
                fail (err) {
                    obj.fail && obj.fail(err);
                },
                complete (res) {
                    obj.complete && obj.complete(res);
                }
            });
            // utils.defineGetter(task, apiObj.request.body.returnValue, function (
            //     obj,
            //     prop
            // ) {
            //     console.warn(
            //         `request's return value is not support ${prop} method!`
            //     );
            // });
            task.onHeadersReceived = function () {};
            task.offHeadersReceived = function () {};
            return task;
        },
        body: {
            params: {
                responseType: {
                    type: 0,
                    desc: "missing"
                },
                method: {
                    OPTIONS: {
                        type: 0,
                        desc: "missing"
                    },
                    HEAD: {
                        type: 0,
                        desc: "missing"
                    },
                    PUT: {
                        type: 0,
                        desc: "missing"
                    },
                    DELETE: {
                        type: 0,
                        desc: "missing"
                    },
                    TRACE: {
                        type: 0,
                        desc: "missing"
                    },
                    CONNECT: {
                        type: 0,
                        desc: "missing"
                    }
                }
            },
            returnValue: {
                onHeadersReceived: {
                    type: 0,
                    desc: "missing"
                },
                offHeadersReceived: {
                    type: 0,
                    desc: "missing"
                }
            }
        }
    },
    createMapContext: {
        fn (obj = {}) {
            let data = my.createMapContext(obj);
            for (let key in apiObj.createMapContext.body.returnValue.props) {
                if (apiObj.createMapContext.body.returnValue.props[key].type===0) { 
                    data[key] = ()=>{};
                }
            }
            return utils.defineGetter(
                data,
                apiObj.createMapContext.body.returnValue.props,
                function (obj, prop) {
                    console.warn(
                        `createMapContext's return value is not support ${prop} attribute!`
                    );
                }
            );
        },
        body: {
            returnValue: {
                props: {
                    getRegion: {
                        type: 0,
                        desc: "missing"
                    },
                    getScale: {
                        type: 0,
                        desc: "missing"
                    },
                    includePoints: {
                        type: 0,
                        desc: "missing"
                    }
                }
            }
        }
    },
    previewImage: {
        fn (obj = {}) {
            let imgList = obj.urls || [];
            let index = imgList.indexOf(obj.current);
            obj.current = index;
            return my.previewImage(obj);
        },
        body: {}
    },
    compressImage: {
        fn (obj = {}) {
            if (obj.src) {
                obj.apFilePaths = [obj.src];
                delete obj.src;
            }
            my.compressImage({
                ...obj,
                success (res) {
                    res.tempFilePath = res.apFilePaths[0];
                    delete res.apFilePath;
                    obj.success && obj.success(res);
                }
            });
        },
        body: {
            params: {
                src: {
                    type: 1,
                    desc: "apFilePaths"
                },
                quality: {
                    type: 1,
                    desc: "compressLevel"
                }
            }
        }
    },
    chooseImage: {
        fn (obj = {}) {
            if (!obj.count) {
                obj.count = 9;
            }
            my.chooseImage({
                ...obj,
                success (res) {
                    res.tempFilePaths = res.apFilePaths;
                    delete res.apFilePath;
                    console.warn("暂不支持tempFiles");
                    obj.success && obj.success(res);
                }
            });
        },
        body: {
            returnValue: {
                props: {
                    tempFilePaths: {
                        type: 1,
                        desc: "diff"
                    },
                    tempFiles: {
                        type: 0,
                        desc: "missing"
                    }
                }
            }
        }
    },
    saveImageToPhotosAlbum: {
        fn (obj = {}) {
            if (obj.filePath) {
                obj.url = obj.filePath;
            }
            return my.saveImage(obj);
        }
    },
    openLocation: {
        fn (obj = {}) {
            if (obj.scale) {
                console.warn("支付宝scale的取值为3-19，默认15");
            }
            return my.openLocation(obj);
        },
        body: {
            params: {
                scale: {
                    type: 1,
                    desc: "diff"
                }
            }
        }
    },
    getLocation: {
        fn (obj = {}) {
            let type = obj.type || "wgs84";

            my.getLocation({
                ...obj,
                type: 0,
                success: function (res) {
                    let data = res;
                    if (type === "wgs84") {
                        let lnglat = utils.wgs84togcj02(
                            res.longitude,
                            res.latitude
                        );

                        data = Object.assign(res, {
                            longitude: lnglat[0],
                            latitude: lnglat[1]
                        });
                    }
                    data = utils.defineGetter(
                        data,
                        apiObj.getLocation.body.returnValue,
                        function (obj, prop) {
                            console.warn(
                                `getLocation's return value is not support ${prop} attribute!`
                            );
                        }
                    );
                    obj.success && obj.success(data);
                }
            });
        },
        body: {
            params: {
                altitude: {
                    type: 0,
                    desc: "miss"
                }
            },
            returnValue: {
                speed: {
                    type: 0,
                    desc: "miss"
                },
                altitude: {
                    type: 0,
                    desc: "miss"
                },
                verticalAccuracy: {
                    type: 0,
                    desc: "miss"
                }
            }
        }
    },
    openCard: {
        fn () {},
        body: {}
    },
    login: {
        fn (obj = {}) {
            if (obj.fail) {
                obj.fail();
            }
            if (obj.success) {
                obj.success();
            }
        },
        body: {}
    },
    hideKeyboard: {
        fn (obj = {}) {
            my.hideKeyboard(obj);

            if (typeof obj.success === "function") {
                obj.success();
            }

            if (typeof obj.complete === "function") {
                obj.complete();
            }
        }
    },
    requestPayment: {
        fn () {},
        body: {}
    },
    getNetworkType: {
        fn (obj = {}) {
            my.getNetworkType({
                ...obj,
                success (res) {
                    console.log(res);

                    res.networkType = res.networkType.toLowerCase();
                    let typeObjMap = {
                        unknown: "unknown",
                        wifi: "wifi",
                        "2g": "2g",
                        "3g": "3g",
                        "4g": "4g"
                    };

                    if (res && !res.networkAvailable) {
                        res.networkType = "none";
                    } else {
                        res.networkType =
                            typeObjMap[res.networkType] || res.networkType;
                    }
                    obj.success && obj.success(res);
                }
            });
        },
        body: {}
    },
    canvasToTempFilePath: {
        fn (obj = {}) {
            const ctx = my.createCanvasContext(obj.canvasId);
            ctx.toTempFilePath({
                ...obj,
                success (res) {
                    res.tempFilePath = res.apFilePath;
                    delete res.apFilePath;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    canvasPutImageData: {
        fn (obj = {}) {
            const ctx = my.createCanvasContext(obj.canvasId);
            ctx.putImageData({
                ...obj,
                success (res) {
                    obj.success && obj.success(res);
                }
            });
        }
    },
    canvasGetImageData: {
        fn (obj = {}) {
            const ctx = my.createCanvasContext(obj.canvasId);
            ctx.getImageData({
                ...obj,
                success (res) {
                    obj.success && obj.success(res);
                }
            });
        }
    },
    saveFile: {
        fn (obj = {}) {
            if (obj.tempFilePath) {
                obj.apFilePath = obj.tempFilePath;
                delete obj.tempFilePath;
            }
            my.saveFile({
                ...obj,
                success (res) {
                    res.savedFilePath = res.apFilePath;
                    delete res.apFilePath;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    removeSavedFile: {
        fn (obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.removeSavedFile(obj);
        }
    },
    getSavedFileList: {
        fn (obj = {}) {
            my.getSavedFileList({
                success (res) {
                    console.log(res);
                    if (res.fileList.length) {
                        let ret = res.fileList.map(item => {
                            item.filePath = item.apFilePath;
                            delete item.apFilePath;
                            return item;
                        });
                        res.fileList = ret;
                        obj.success && obj.success(res);
                    } else {
                        obj.success && obj.success(res);
                    }
                }
            });
        }
    },
    getSavedFileInfo: {
        fn (obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.getSavedFileInfo(obj);
        }
    },
    getFileInfo: {
        fn (obj = {}) {
            if (obj.filePath) {
                obj.apFilePath = obj.filePath;
                delete obj.filePath;
            }
            return my.getFileInfo(obj);
        }
    },
    downloadFile: {
        fn (obj = {}) {
            if (obj.filePath !== undefined) {
                console.warn("支付宝暂不支持 filePath");
            }
            my.downloadFile({
                ...obj,
                success (res) {
                    res.tempFilePath = res.apFilePath;
                    delete res.apFilePath;
                    if (res.statusCode) {
                        console.warn("支付宝暂不支持statusCode");
                    }
                    obj.success && obj.success(res);
                }
            });
            const task = {
                abort () {},
                offHeadersReceived () {},
                offProgressUpdate () {},
                onHeadersReceived () {},
                onProgressUpdate () {},
            };
            return utils.defineGetter(
                task,
                apiObj.downloadFile.body.returnValue,
                function (obj, prop) {
                    console.warn(
                        `downloadFile's return value is not support ${prop} attribute!`
                    );
                }
            );
        },
        body: {
            params: {
                filePath: {
                    type: 0,
                    desc: "missing"
                }
            },
            returnValue: {
                abort: {
                    type: 0,
                    desc: "missing"
                },
                offHeadersReceived: {
                    type: 0,
                    desc: "missing"
                },
                offProgressUpdate: {
                    type: 0,
                    desc: "missing"
                },
                onHeadersReceived: {
                    type: 0,
                    desc: "missing"
                },
                onProgressUpdate: {
                    type: 0,
                    desc: "missing"
                },
            }
        }
    },
    uploadFile: {
        fn (obj = {}) {
            if (obj.name) {
                obj.fileName = obj.name;
                delete obj.name;
            }
            obj.fileType = 'image';
            my.uploadFile(obj);
            const task = {
                abort () {},
                offHeadersReceived () {},
                offProgressUpdate () {},
                onHeadersReceived () {},
                onProgressUpdate () {},
            };
            return utils.defineGetter(
                task,
                apiObj.uploadFile.body.returnValue,
                function (obj, prop) {
                    console.warn(
                        `uploadFile's return value is not support ${prop} attribute!`
                    );
                }
            );
        },
        body: {
            returnValue: {
                abort: {
                    type: 0,
                    desc: "missing"
                },
                offHeadersReceived: {
                    type: 0,
                    desc: "missing"
                },
                offProgressUpdate: {
                    type: 0,
                    desc: "missing"
                },
                onHeadersReceived: {
                    type: 0,
                    desc: "missing"
                },
                onProgressUpdate: {
                    type: 0,
                    desc: "missing"
                },
            }
        }
    },
    connectSocket: {
        fn (obj = {}) {
            console.log(obj);
            let params = utils.defineGetter(
                obj,
                apiObj.connectSocket.body.params,
                function (obj, prop) {
                    console.warn(
                        `connectSocket's params value is not support ${prop} attribute!`
                    );
                }
            );
            my.connectSocket(params);
            const task = {
                close (obj = {}) {
                    my.closeSocket(obj);
                },
                onClose (fn) {
                    my.onSocketClose(fn);
                },
                onError (fn) {
                    my.offSocketOpen(fn);
                },
                onMessage (fn) {
                    my.onSocketMessage(fn);
                },
                onOpen (fn) {
                    my.onSocketOpen(function (res) {
                        fn(res);
                    });
                },
                send (obj = {}) {
                    my.sendSocketMessage(obj);
                },
            };
            return task;
        },
        body: {
            params: {
                protocols: {
                    type: 0,
                    desc: "missing"
                },
                tcpNoDelay: {
                    type: 0,
                    desc: "missing"
                }
            },
            returnValue: {
                close: {
                    type: 0,
                    desc: "missing"
                },
                cloonClosese: {
                    type: 0,
                    desc: "missing"
                },
                onError: {
                    type: 0,
                    desc: "missing"
                },
                onMessage: {
                    type: 0,
                    desc: "missing"
                },
                onOpen: {
                    type: 0,
                    desc: "missing"
                },
                send: {
                    type: 0,
                    desc: "missing"
                },
            }
        }
    },
    onSocketOpen: {
        fn (obj) {
            my.onSocketOpen((res) => {
                console.warn('onSocketOpen 成功回调缺少header');
                obj(res);
            });
        },
        body: {
            params: {
                header: {
                    type: 0,
                    desc: "missing"
                }
            }
        }
    },
    closeSocket: {
        fn (obj = {}) {
            let params = utils.defineGetter(
                obj,
                apiObj.closeSocket.body.params,
                function (obj, prop) {
                    console.warn(
                        `closeSocket's params value is not support ${prop} attribute!`
                    );
                }
            );
            my.closeSocket(params);
        },
        body: {
            params: {
                code: {
                    type: 0,
                    desc: "missing"
                },
                reason: {
                    type: 0,
                    desc: "missing"
                }
            }
        }
    },
    getRecorderManager: {
        fn () {
            const RecorderManager = my.getRecorderManager();
            for (let key in apiObj.getRecorderManager.body.returnValue.props) {
                if (apiObj.getRecorderManager.body.returnValue.props[key]["type"]===0) {
                    RecorderManager[key] = ()=>{};
                }
            }
            return utils.defineGetter(
                RecorderManager,
                apiObj.getRecorderManager.body.returnValue.props,
                function (obj, prop) {
                    console.warn(
                        `getRecorderManager's return value is not support ${prop} attribute!`
                    );
                }
            );
        },
        
        body: {
            returnValue: {
                props: {
                    pause: {
                        type: 0,
                        desc: "missing"
                    },
                    resume: {
                        type: 0,
                        desc: "missing"
                    },
                    onpause: {
                        type: 0,
                        desc: "missing"
                    },
                    onFrameRecorded: {
                        type: 0,
                        desc: "missing"
                    },
                    onInterruptionEnd: {
                        type: 0,
                        desc: "missing"
                    },
                    onInterruptionBegin: {
                        type: 0,
                        desc: "missing"
                    }

                }
            }
        }
    },
    setStorageSync: {
        fn (key="",data="") {
            if (key&&data) {
                return my.setStorageSync ({
                    "key": key,
                    "data": data
                });
            }
        }
    },
    getStorageSync: {
        fn (key="") {
            const storeData = my.getStorageSync({key});
            if (storeData&&storeData.success) {
                return storeData.data;
            } 
                return undefined; 
        }
    },
    removeStorageSync: {
        fn (key="") {
            return my.removeStorageSync({key});
        }
    },


   
    
};

module.exports = apiObj;
