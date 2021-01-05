const utils = require("./utils");
const descObj = require("./desc.js");
const apiObj = {showActionSheet:{fn: function fn (obj = {}) {
            let showActionSheetProps = descObj.showActionSheet.body.params.props;
            if (obj.itemList) {
                obj.items = obj.itemList;
                delete obj.itemList;
            }
            let params = utils.defineGetter(
                obj,
                showActionSheetProps,
                function (obj, prop) {
                    utils.warn(
                        `showActionSheet的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `showActionSheet/${prop}`,
                            errorType: showActionSheetProps[prop].type,
                            type: 'api'
                        }
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
        },},showModal:{fn: function fn (obj = {}) {
            let showModalProps = descObj.showModal.body.params.props;
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
                showModalProps,
                function (obj, prop) {
                    utils.warn(
                        `showModal的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `showModal/${prop}`,
                            errorType: showModalProps[prop].type,
                            type: 'api'
                        }
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
        },},getSystemInfo:{fn: function fn (obj = {}) {
            let getSystemInfoProps = descObj.getSystemInfo.body.returnValue.props;
            my.getSystemInfo({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getSystemInfoProps,
                        function (obj, prop) {
                            utils.warn(
                                `getSystemInfo的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `getSystemInfo/${prop}`,
                                    errorType: getSystemInfoProps[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },},showToast:{fn: function fn (obj = {}) {
            let showToastProps = descObj.showToast.body.params.props;
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
                    utils.warn(
                        "showToast暂不支持loading",
                        {
                            apiName: 'showToast/loading',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                } else {
                    obj.type = "none";
                }
                delete obj.icon;
            } else {
                obj.type = "success";
            }

            let params = utils.defineGetter(
                obj,
                showToastProps,
                function (obj, prop) {
                    utils.warn(
                        `showToast的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `showToast/${prop}`,
                            errorType: showToastProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );

            my.showToast(params);
        },},chooseImage:{fn: function fn (obj = {}) {
            if (!obj.count) {
                obj.count = 9;
            }
            my.chooseImage({
                ...obj,
                success (res) {
                    res.tempFilePaths = res.apFilePaths;
                    delete res.apFilePath;
                    utils.warn(
                        "暂不支持tempFiles",
                        {
                            apiName: 'chooseImage/tempFiles',
                            errorType: 0,
                            type: 'api'
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },},previewImage:{fn: function fn (obj = {}) {
            let imgList = obj.urls || [];
            let index = imgList.indexOf(obj.current);
            obj.current = index;
            return my.previewImage(obj);
        },},}
module.exports = apiObj;