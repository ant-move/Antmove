/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require('./utils');
const descObj = require("./desc.js");

const apiObj = {
    getUserInfo: {
        fn (obj) {
            let getUserInfoSuccessRes = descObj.getUserInfo.body.successRes;
            if (obj.withCredentials || obj.lang) {
                utils.warn(
                    'GetAuthUserInfo不支持 withCredentials 或 lang 参数.',
                    {
                        apiName: 'getUserInfo/withCredentials 或 getUserInfo/lang',
                        errorType: 0,
                        type: 'api'
                    }
                );
            }

            my.getAuthCode({
                scopes: 'auth_user',
                success: () => {
                    my.getAuthUserInfo({
                        ...obj,
                        success (res) {
                            utils.defineGetter(res, getUserInfoSuccessRes, function (obj, prop) {
                                utils.warn(
                                    `getUserInfo的参数不支持 ${prop} 属性!`,
                                    {
                                        apiName: prop,
                                        errorType: getUserInfoSuccessRes[prop].type,
                                        type: 'api'
                                    }
                                );
                            });
                            
                            const _res = {};
                            _res.userInfo = res;
                            _res.userInfo.avatarUrl = res.avatar;
                            obj.success && obj.success(_res);
                        }
                    });
                }
            });
        }
    },
    reportAnalytics: {
        fn (key, value) {
            if (typeof value !== "object") {
                if (!(value instanceof Object))
                    value={
                        data: value
                    };
            }
            return my.reportAnalytics(key,value);
        }
    },
    requestPayment: {
        fn (obj = {}) {
            let requestPaymentParams = descObj.requestPayment.body.params;
            let params = utils.defineGetter(obj, requestPaymentParams, function (obj,prop) {
                utils.warn(
                    `requestPayment的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: requestPaymentParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.tradePay(params);
        }
    },
    authorize: {
        fn (obj={}) {
            let authorizeParams = descObj.authorize.body.params;
            if (obj.scope) {
                delete obj.scope;
                obj.scopes='auth_user';
            }
            let params = utils.defineGetter(obj, authorizeParams, function (obj,prop) {
                utils.warn(
                    `authorize的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: authorizeParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.getAuthCode(params);
        }
    },
    openCard: {
        fn (obj) {
            let openCardParams = descObj.openCard.body.params;
            let params = utils.defineGetter(obj, openCardParams, function (obj,prop) {
                utils.warn(
                    `openCard的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: openCardParams[prop].type,
                        type: 'api'
                    }
                );
            }); 
            return my.openCardList(params);
        }
    },
    addCard: {
        fn (obj) {
            let addCardParams = descObj.addCard.body.params;
            let params = utils.defineGetter(obj, addCardParams, function (obj,prop) {
                utils.warn(
                    `addCard的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: addCardParams[prop].type,
                        type: 'api'
                    }
                );
            }); 
            return my.addCardAuth(params);
        }
    },
    startSoterAuthentication: {
        fn (obj) {
            let startSoterAuthenticationParams = descObj.startSoterAuthentication.body.params;
            let params = utils.defineGetter(obj, startSoterAuthenticationParams, function (obj,prop) {
                utils.warn(
                    `startSoterAuthentication的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: startSoterAuthenticationParams[prop].type,
                        type: 'api'
                    }
                );
            }); 
            return my.ap.faceVerify(params);
        }
    },
    // 废弃
    _getSettings: {
        fn (obj={}) {
            /**
             * scope=[userInfo, location, album, camera, audioRecord]
             */

            my.getSetting({
                ...obj,
                success (res) { 
                    res.authSetting['scope.address']=res.authSetting.location;
                    delete res.authSetting.location;
                            
                    res.authSetting['scope.record']=res.authSetting.audioRecord;
                    delete res.authSetting.audioRecord;
                            
                    res.authSetting['scope.userInfo']=res.authSetting.userInfo;
                    delete res.authSetting.userInfo;
                            
                    res.authSetting['scope.writePhotosAlbum']=res.authSetting.album;
                    delete res.authSetting.album;
                            
                    res.authSetting['scope.camera']=res.authSetting.camera;
                    delete res.authSetting.camera;
                    obj.success && obj.success(res);
                }
            });
        } 
    },
    getSetting: {
        fn (obj = {}) {
            function setLocation (cb) {
                my.getLocation({
                    success (res) {
                        res.authSetting['scope.userLocation'] = true;
                        cb && cb();
                    }
                });
            }
            if (my.getSetting) {
                my.getSetting({
                    ...obj,
                    success (res) {
                        res.authSetting['scope.userLocation'] = res.authSetting.location;
                        delete res.authSetting.location;
            
                        res.authSetting['scope.record'] = res.authSetting.audioRecord;
                        delete res.authSetting.audioRecord;
            
                        res.authSetting['scope.userInfo'] = res.authSetting.userInfo;
                        delete res.authSetting.userInfo;
            
                        res.authSetting['scope.writePhotosAlbum'] = res.authSetting.album;
                        delete res.authSetting.album;
            
                        res.authSetting['scope.camera'] = res.authSetting.camera;
                        delete res.authSetting.camera;
                        obj.success && obj.success(res);
                    }
                });
            } else {
                let res = {};
                res.authSetting = {};
                /**
                   * scope=[userInfo, location, album, camera, audioRecord]
                   */
            
                if (obj && obj.success) {
                    setLocation(function () {
                        obj.success(res);
                    });
                }
            }
        }
    }
};
module.exports = apiObj;
