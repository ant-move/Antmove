/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require("./utils");
const descObj = require("./desc.js");

const apiObj = {
    scanCode: {
        fn (obj) {
            let scanCodeProps = descObj.scanCode.body.params.props;
            let scanCodeReturn = descObj.scanCode.body.returnValue.props;
            let params = utils.defineGetter(
                obj,
                scanCodeProps,
                function (obj, prop) {
                    utils.warn(
                        `scanCode的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `scanCode/${prop}`,
                            errorType: scanCodeProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.scanCode({
                ...params,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        scanCodeReturn,
                        function (obj, prop) {
                            utils.warn(
                                `scanCode的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `scanCode/${prop}`,
                                    errorType: scanCodeReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            })
        }
    },
    getSystemInfoSync: {
        fn () {
            let ret = tt.getSystemInfoSync();
            let getSystemInfoSyncReturn = descObj.getSystemInfoSync.body.returnValue.props;
            ret = utils.defineGetter(
                ret,
                getSystemInfoSyncReturn,
                function (obj, prop) {
                    utils.warn(
                        `getSystemInfoSync的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: `getSystemInfoSync/${prop}`,
                            errorType: getSystemInfoSyncReturn[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            return ret;
        },
    },
    getSystemInfo: {
        fn (obj = {}) {
            let getSystemInfoSyncReturn = descObj.getSystemInfo.body.returnValue.props;
            tt.getSystemInfo({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getSystemInfoSyncReturn,
                        function (obj, prop) {
                            utils.warn(
                                `getSystemInfo的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `getSystemInfo/${prop}`,
                                    errorType: getSystemInfoSyncReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
    },
    onCompassChange: {
        fn () {
            let onCompassChangeResturn = descObj.onCompassChange.body.returnValue.props;
            tt.onCompassChange(function (res) {
                res = utils.defineGetter(
                    res,
                    onCompassChangeResturn,
                    function (obj, prop) {
                        utils.warn(
                            `onCompassChange的返回值不支持 ${prop} 属性!`,
                            {
                                apiName: `onCompassChange/${prop}`,
                                errorType: onCompassChangeResturn[prop].type,
                                type: 'api'
                            }
                        );
                    }
                );
            });
        }
    },
    getFileInfo: {
        fn (obj = {}) {
            let getFileInfoProps = descObj.getFileInfo.body.params.props;
            let getFileInfoReturn = descObj.getFileInfo.body.returnValue.props;
            let params = utils.defineGetter(
                obj,
                getFileInfoProps,
                function (obj, prop) {
                    utils.warn(
                        `getFileInfo的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `getFileInfo/${prop}`,
                            errorType: getFileInfoProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.getFileInfo({
                ...params,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getFileInfoReturn,
                        function (obj, prop) {
                            utils.warn(
                                `getFileInfo的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `getFileInfo/${prop}`,
                                    errorType: getFileInfoReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
    },
    getLocation: {
        fn (obj = {}) {
            let getLocationProps = descObj.getLocation.body.params.props;
            let params = utils.defineGetter(
                obj,
                getLocationProps,
                function (obj, prop) {
                    utils.warn(
                        `getLocation的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `getLocation/${prop}`,
                            errorType: getLocationProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.getLocation(params);
        },
    },
    getImageInfo: {
        fn (obj = {}) {
            let getImageInfoReturn = descObj.getImageInfo.body.returnValue.props;
            tt.getImageInfo({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getImageInfoReturn,
                        function (obj, prop) {
                            utils.warn(
                                `getImageInfo的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `getImageInfo/${prop}`,
                                    errorType: getImageInfoReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
    },
    chooseImage: {
        fn (obj = {}) {
            let chooseImageProps = descObj.chooseImageProps.body.params.props;
            let params = utils.defineGetter(
                obj,
                chooseImageProps,
                function (obj, prop) {
                    utils.warn(
                        `getLocation的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `getLocation/${prop}`,
                            errorType: chooseImageProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.chooseImage(params);
        },
    },
    createVideoContext: {
        fn (params) {
            let videoCtx  = tt.createVideoContext(params);
            Object.keys(descObj.createVideoContext.body.returnValue.props).map(key => {
                if (descObj.createMapContext.body.returnValue.props[key].type === 0) {
                    videoCtx[key] = () => {
                        console.warn(`参数${key}不支持`);
                    };
                    console.warn(`参数${key}不支持`);
                }
            });
            return videoCtx;
        }
    },
    chooseVideo: {
        fn (obj) {
            let chooseVideoProps = descObj.chooseVideo.body.params.props;
            let params = utils.defineGetter(
                obj,
                chooseVideoProps,
                function (obj, prop) {
                    utils.warn(
                        `chooseVideo的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `chooseVideo/${prop}`,
                            errorType: chooseVideoProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.chooseVideo(params);
        }
    },
    request: {
        fn (obj = {}) {
            if (obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'PUT') {
                utils.warn(
                    `request暂不支持${obj.method}请求方式`,
                    {
                        apiName: `request/${obj.method}`,
                        errorType: 0,
                        type: 'api'
                    }
                );
                obj.method = 'GET';
            }
            tt.request(obj);
        }
    },
    downloadFile: {
        fn (obj = {}) {
            let downloadFileProps = descObj.downloadFile.body.params.props;
            let downloadFileReturn = descObj.downloadFile.body.returnValue.props;
            let params = utils.defineGetter(
                obj,
                downloadFileProps,
                function (obj, prop) {
                    utils.warn(
                        `downloadFile的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `downloadFile/${prop}`,
                            errorType: downloadFileProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.downloadFile({
                ...params,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        downloadFileReturn,
                        function (obj, prop) {
                            utils.warn(
                                `downloadFile的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `downloadFile/${prop}`,
                                    errorType: downloadFileReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        }
    },
    uploadFile: {
        fn (obj = {}) {
            let uploadFileReturn = descObj.uploadFile.body.returnValue.props;
            tt.uploadFile({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        uploadFileReturn,
                        function (obj, prop) {
                            utils.warn(
                                `uploadFile的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `uploadFile/${prop}`,
                                    errorType: uploadFileReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        }
    },
    connectSocket: {
        fn (obj = {}) {
            let connectSocketProps = descObj.connectSocket.body.params.props;
            let params = utils.defineGetter(
                obj,
                connectSocketProps,
                function (obj, prop) {
                    utils.warn(
                        `connectSocket的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `connectSocket/${prop}`,
                            errorType: connectSocketProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            return tt.connectSocket(params);
        }
    },
    login: {
        fn (obj = {}) {
            let loginProps = descObj.login.body.params.props;
            let params = utils.defineGetter(
                obj,
                loginProps,
                function (obj, prop) {
                    utils.warn(
                        `login的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `login/${prop}`,
                            errorType: loginProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.login(params);
        }
    },
    getUserInfo: {
        fn (obj = {}) {
            let getUserInfoProps = descObj.getUserInfo.body.params.props;
            let getUserInfoReturn = descObj.getUserInfo.body.returnValue.props;
            let params = utils.defineGetter(
                obj,
                getUserInfoProps,
                function (obj, prop) {
                    utils.warn(
                        `getUserInfo的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `getUserInfo/${prop}`,
                            errorType: getUserInfoProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.getUserInfo({
                ...params,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        getUserInfoReturn,
                        function (obj, prop) {
                            utils.warn(
                                `getUserInfo的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `getUserInfo/${prop}`,
                                    errorType: getUserInfoReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        }
    },
    getSetting: {
        fn (obj = {}) {
            let getSettingReturn = descObj.getSetting.body.returnValue.props;
            tt.getSetting({
                ...obj,
                success: res => {
                    res.authSetting = utils.defineGetter(
                        res.authSetting,
                        getSettingReturn,
                        function (obj, prop) {
                            utils.warn(
                                `getSetting/authSetting的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `getSetting/authSetting/${prop}`,
                                    errorType: getSettingReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    res.authSetting.writePhotosAlbum = res.authSetting.album;
                    delete res.authSetting.album;
                    obj.success && obj.success(res);
                }
            });
        },
    },
    chooseAddress: {
        fn (obj = {}) {
            let chooseAddressReturn = descObj.chooseAddress.body.returnValue.props;
            tt.chooseAddress({
                ...obj,
                success: res => {
                    res = utils.defineGetter(
                        res,
                        chooseAddressReturn,
                        function (obj, prop) {
                            utils.warn(
                                `chooseAddress的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: `chooseAddress/${prop}`,
                                    errorType: chooseAddressReturn[prop].type,
                                    type: 'api'
                                }
                            );
                        }
                    );
                    obj.success && obj.success(res);
                }
            });
        },
    },
    showShareMenu: {
        fn (obj) {
            let showShareMenuProps = descObj.showShareMenu.body.params.props;
            let params = utils.defineGetter(
                obj,
                showShareMenuProps,
                function (obj, prop) {
                    utils.warn(
                        `showShareMenu的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `showShareMenu/${prop}`,
                            errorType: showShareMenuProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.showShareMenu(params);
        }
    },
    showToast: {
        fn (obj = {}) {
            let showToastProps = descObj.showToast.body.params.props;
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
            tt.showToast(params);
        },
    },
    showModal: {
        fn (obj = {}) {
            let showModalProps = descObj.showModal.body.params.props;
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
            tt.showModal(params);
        },
    },
    showLoading: {
        fn (obj = {}) {
            let showLoadingProps = descObj.showLoading.body.params.props;
            let params = utils.defineGetter(
                obj,
                showLoadingProps,
                function (obj, prop) {
                    utils.warn(
                        `showLoading的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `showLoading/${prop}`,
                            errorType: showLoadingProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.showLoading(params);
        },
    },
    showActionSheet: {
        fn (obj = {}) {
            let showActionSheetProps = descObj.showActionSheet.body.params.props;
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
            tt.showActionSheet(params);
        }
    },
    pageScrollTo: {
        fn (obj = {}) {
            let pageScrollToProps = descObj.pageScrollTo.body.params.props;
            let params = utils.defineGetter(
                obj,
                pageScrollToProps,
                function (obj, prop) {
                    utils.warn(
                        `pageScrollTo的参数不支持 ${prop} 属性!`,
                        {
                            apiName: `pageScrollTo/${prop}`,
                            errorType: pageScrollToProps[prop].type,
                            type: 'api'
                        }
                    );
                }
            );
            tt.pageScrollTo(params);
        },
    }
};

module.exports = apiObj;
