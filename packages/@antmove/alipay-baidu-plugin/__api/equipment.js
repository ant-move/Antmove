/**
 *  设备
 */
const descObj = require("./desc.js");
const utils = require("./utils.js");
const apiObj = {

    getSystemInfo: {
        fn (obj) {  
            
            utils.testreturnValue(descObj.getSystemInfo);
            swan.getSystemInfo({
                success (res) {
                    let returnData = {};
                    returnData.app = "alipay";
                    returnData.brand = res.brand.toUpperCase();
                    returnData.currentBattery = '100%';
                    returnData.fontSizeSetting = res.fontSizeSetting;
                    returnData.language = res.language;
                    returnData.model = res.model;
                    returnData.pixelRatio = res.pixelRatio;
                    returnData.platform = res.system;
                    returnData.screenHeight = res.screenHeight;
                    returnData.screenWidth = res.screenWidth;
                    returnData.statusBarHeight = res.statusBarHeight;
                    returnData.storage = "";
                    returnData.system = '';
                    returnData.titleBarHeight = res.navigationBarHeight;
                    returnData.version = res.version;
                    returnData.windowHeight = res.windowHeight;
                    returnData.windowWidth = res.windowWidth;
                    if (obj.success) {
                        obj.success(returnData);
                    }
                    if (obj.complete) {
                        obj.complete(returnData);
                    }
                },

                fail (err) {
                    if (obj.fail) {
                        obj.fail(err);
                    }
                    if (obj.complete) {
                        obj.complete(err);
                    }
                }
                   
            });
        }
    },
    getSystemInfoSync: {
        fn () {  
            utils.testreturnValue(descObj.getSystemInfoSync);
            const res = swan.getSystemInfoSync();
            let returnData = {};
            returnData.app = "alipay";
            returnData.brand = res.brand.toUpperCase();
            returnData.currentBattery = '100%';
            returnData.fontSizeSetting = res.fontSizeSetting;
            returnData.language = res.language;
            returnData.model = res.model;
            returnData.pixelRatio = res.pixelRatio;
            returnData.platform = res.system;
            returnData.screenHeight = res.screenHeight;
            returnData.screenWidth = res.screenWidth;
            returnData.statusBarHeight = res.statusBarHeight;
            returnData.storage = "";
            returnData.system = '';
            returnData.titleBarHeight = res.navigationBarHeight;
            returnData.version = res.version;
            returnData.windowHeight = res.windowHeight;
            returnData.windowWidth = res.windowWidth;
            return returnData;
        }
    },
    
    getLocation: {
        fn (obj) {
            obj.type ='gcj02';
            swan.getLocation({...obj});
           
        }
    },
    getSetting: {
        fn (obj) {
            swan.getSetting ({
                ...obj,
                success (res) {
                    
                    res.authSetting.location =  res.authSetting["scope.userLocation"];
                    delete res.authSetting["scope.userLocation"];
                    res.authSetting.audioRecord = res.authSetting["scope.record"];
                    delete res.authSetting["scope.record"];
                    
                    res.authSetting.userInfo = res.authSetting["scope.userInfo"];
                    delete res.authSetting["scope.userInfo"];
                     
                    res.authSetting.album = res.authSetting["scope.writePhotosAlbum"];
                    delete  res.authSetting["scope.writePhotosAlbum"];
                     
                    res.authSetting.camera = res.authSetting["scope.camera"];
                    delete res.authSetting["scope.camera"];
                    obj.success && obj.success(res);
                }
            });
           
        }
    },
    getNetworkType: {
        fn (obj) {  
            utils.testreturnValue(descObj.getNetworkType);
            return swan.getNetworkType({
                ...obj
            });
        }
    },
    getScreenBrightness: {
        fn (obj={}) {
            if (obj.success) {
                const successFn = obj.success;
                obj.success = (res) => {
                    let result = {
                        brightness: res.value
                    };
                    successFn (result);
                };
            }
            
            swan.getScreenBrightness(obj);
        }
    },
    vibrateShort: {
        fn (obj) {  
            console.warn("震动15ms，仅在iPhone7/7 Plus以上及Android机型生效");
        
            if (obj instanceof Function) {
                swan.vibrateShort({
                    success () {
                        obj();
                    }
                });
            } else {
                swan.vibrateShort({
                    ...obj
                });
            }
            
        }
    },
    addPhoneContact: {
        fn (obj) {  
            utils.testparams(descObj.addPhoneContact,obj);
            delete obj.alipayAccount;
            return swan.addPhoneContact({
                ...obj
            });
        }
    },
    vibrateLong: {
        fn (obj) {
            if (obj instanceof Function) {
                swan.vibrateLong({
                    success () {
                        obj();
                    }
                });
            } else {
                swan.vibrateLong({
                    ...obj
                });
            }
        }
    },
    scan: {
        fn (obj) {  
            utils.testparams(descObj.scan,obj);
            utils.testreturnValue(descObj.scan);
            return swan.scanCode({
                ...obj
            });
        }
    },
    getBatteryInfoSync: {
        fn (obj) {
            console.warn("iOS 不可用");
            return swan.getBatteryInfoSync(obj);
        }
    },
    SDKVersion: {
        fn () {
            const res = swan.getSystemInfoSync();
            return res.SDKVersion;
        }
    },
    
    
};

module.exports = apiObj;