/**
 * type:0 missing
 * type:1 diff
 * type:3 - diffType - 类型不同
 * 
 */
const utils = require("./utils");
const descObj = require("./desc.js");

const apiObj = {
    startBeaconDiscovery: {
        fn (obj = {}) {
            let startBeaconDiscoveryParams = descObj.startBeaconDiscovery.body.params;
            let params = utils.defineGetter(obj, startBeaconDiscoveryParams, function (obj, prop) {
                utils.warn(
                    `startBeaconDiscovery的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: startBeaconDiscoveryParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.startBeaconDiscovery(params);
        }
    },
    stopBeaconDiscovery: {
        fn (obj = {}) {
            my.stopBeaconDiscovery(obj);
        }
    },
    onBeaconUpdate: {
        fn (cb) {
            return my.onBeaconUpdate({
                success: cb,
                fail: cb
            });
        }
    },
    onBeaconServiceChange: {
        fn (cb) {
            return my.onBeaconServiceChange({
                success: cb,
                fail: cb,
                complete: cb
            });
        }
    },
    getBeacons: {
        fn (obj = {}) {
            return my.getBeacons(obj);
        }
    },
    writeBLECharacteristicValue: {
        fn (obj = {}) {
            if (obj.value) {
                obj.value = utils.ab2hex(obj.value);
            }          
            my.writeBLECharacteristicValue(obj);
        }
    },
    onBLEConnectionStateChange: {
        fn (obj = {}) {
            return my.onBLEConnectionStateChanged(obj);
        }
    },
    onBLECharacteristicValueChange: {
        fn (cb) {
            my.onBLECharacteristicValueChange(function (res) {
                res.value = utils.changeType(res.value);
                cb && cb (res);
            });
        }
    },
    getBLEDeviceServices: {
        fn (obj = {}) {
            my.getBLEDeviceServices({
                ...obj,
                success: (res) => {
                    if (res.services) {
                        res.services.forEach(item => {
                            item.uuid = item.serviceId;
                            delete item.serviceId;
                        });
                    }
                    obj.success && obj.success(res);
                }
            });
        }
    },
    getBLEDeviceCharacteristics: {
        fn (obj = {}) {
            my.getBLEDeviceCharacteristics({
                ...obj,
                success: (res) => {
                    if (res.characteristics) {
                        res.characteristics.forEach(item => {
                            item.uuid = item.characteristicId;
                            delete item.characteristicId;
                        });
                    }
                    obj.success && obj.success(res);
                }
            });
        }
    },
    addPhoneContact: {
        fn (obj = {}) {
            if (obj.weChatNumber) {
                obj.alipayAccount = obj.weChatNumber;
            }
            my.addPhoneContact(obj);
        }
    },
    startBluetoothDevicesDiscovery: {
        fn (obj = {}) {
            if (obj.interval) {
                obj.interval = Math.round(obj.interval);
            }
            my.startBluetoothDevicesDiscovery(obj);
        }
    },
    onBluetoothDeviceFound: {
        fn (cb) {
            let onBluetoothDeviceFoundProps = descObj.onBluetoothDeviceFound.body.returnValue.props;
            my.onBluetoothDeviceFound(function (res) {
                let arr = res.devices.map(item => {
                    item.advertisData = utils.changeType(item.advertisData);
                    return utils.defineGetter(item, onBluetoothDeviceFoundProps, function (obj, prop) {
                        utils.warn(
                            `onBluetoothDeviceFound的返回值不支持 ${prop} 属性!`,
                            {
                                apiName: prop,
                                errorType: onBluetoothDeviceFoundProps[prop].type,
                                type: 'api'
                            }
                        );
                    });
                });
                res.devices = arr;
                cb && cb(res);
            });
        }
    },
    getBluetoothDevices: {
        fn (obj = {}) {
            let getBluetoothDevicesProps = descObj.getBluetoothDevices.body.returnValue.props.devices.props;
            my.getBluetoothDevices({
                ...obj,
                success: (res) => {
                    let arr = res.devices.map(item => {
                        item.advertisData = utils.changeType(item.advertisData);
                        return utils.defineGetter(item, getBluetoothDevicesProps, function (obj, prop) {
                            utils.warn(
                                `getBluetoothDevices的返回值不支持 ${prop} 属性!`,
                                {
                                    apiName: prop,
                                    errorType: getBluetoothDevicesProps[prop].type,
                                    type: 'api'
                                }
                            );
                        });
                    });
                    res.devices = arr;
                    obj.success && obj.success(res);
                }
            });
        }
    },
    setClipboardData: {
        fn (obj = {}) {
            if (obj.data) {
                obj.text = obj.data;
                delete obj.data;
            }
            my.setClipboard(obj);
        }
    },
    getClipboardData: {
        fn (obj = {}) {
            my.getClipboard({
                ...obj,
                success: (res) => {                    
                    res.data = res.text;
                    delete res.text;            
                    obj.success && obj.success(res);
                }
            });
        }
    },
    onNetworkStatusChange: {
        fn (cb) {
            my.onNetworkStatusChange(function (res) {
                res.networkType = res.networkType.toLowerCase();
                let typeObjMap = {
                    unknown: 'unknown',
                    wifi: 'wifi',
                    '2g': '2g',
                    '3g': '3g',
                    '4g': '4g'
                };
                    
                if (res && !res.isConnected) {
                    res.networkType = 'none';
                } else {
                    res.networkType = typeObjMap[res.networkType] || res.networkType;
                }
                cb && cb(res);
            });
        }
    },
    setScreenBrightness: {
        fn (obj = {}) {
            if (obj.value) {
                obj.brightness = obj.value;
                delete obj.value;
            }
            my.setScreenBrightness(obj);
        }
    },
    getScreenBrightness: {
        fn (obj = {}) {
            my.getScreenBrightness({
                success: (res) => {  
                    res.value = res.brightness;
                    delete res.brightness;
                    obj.success && obj.success(res);
                },
                fail: (res) => {
                    obj.fail && obj.fail(res);
                }
            });
        }
    },
    scanCode: {
        fn (obj = {}) {
            let scanCodeSuccessRes = descObj.scanCode.body.successRes;
            if (obj.scanType) {
                obj.scanType.forEach(item => {
                    if (item === 'datamatrix' || item === 'pdf417') {
                        utils.warn(
                            `${item} 是不支持的 `,
                            {
                                apiName: `scanCode/${item}`,
                                errorType: 0,
                                type: 'api'
                            }
                        );
                    }
                });
            }
            if (obj.onlyFromCamera) {
                obj.hideAlbum = obj.onlyFromCamera;
                delete obj.onlyFromCamera;
            }
            my.scan({
                ...obj,
                success (res) {
                    let _res = utils.defineGetter(res, scanCodeSuccessRes, function (obj, prop) {
                        utils.warn(
                            `scanCode的参数不支持 ${prop} 属性!`,
                            {
                                apiName: prop,
                                errorType: scanCodeSuccessRes[prop].type,
                                type: 'api'
                            }
                        );
                    });
                    _res.result = _res.code;
                    delete _res.code;
                    obj.success && obj.success(_res);
                }
            });
        }
    },
    stopGyroscope: {
        fn (obj = {}) {
            let stopGyroscopeParams = descObj.stopGyroscope.body.params;
            let params = utils.defineGetter(obj, stopGyroscopeParams, function (obj, prop) {
                utils.warn(
                    `stopGyroscope的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: stopGyroscopeParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.offGyroscopeChange(params);
        }
    },
    onCompassChange: {
        fn (cb) {
            let onCompassChangeReturnValue = descObj.onCompassChange.body.returnValue;
            my.onCompassChange(function (res) {
                let _res = utils.defineGetter(res, onCompassChangeReturnValue, function (obj, prop) {
                    utils.warn(
                        `onCompassChange的返回值不支持 ${prop} 属性!`,
                        {
                            apiName: prop,
                            errorType: onCompassChangeReturnValue[prop].type,
                            type: 'api'
                        }
                    );
                });
                cb && cb(_res);
            });
            
        }
    },
    stopCompass: {
        fn (obj = {}) {
            let stopCompassParams = descObj.stopCompass.body.params;
            let params = utils.defineGetter(obj, stopCompassParams, function (obj, prop) {
                utils.warn(
                    `stopCompass的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: stopCompassParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.offCompassChange(params);
        }
    },
    stopAccelerometer: {
        fn (obj = {}) {
            let stopAccelerometerParams = descObj.stopAccelerometer.body.params;
            let params = utils.defineGetter(obj, stopAccelerometerParams, function (obj, prop) {
                utils.warn(
                    `stopAccelerometer的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: stopAccelerometerParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.offAccelerometerChange(params);
        }
    },
    makePhoneCall: {
        fn (obj = {}) {
            let makePhoneCallParams = descObj.makePhoneCall.body.params;
            if (obj.phoneNumber) {
                obj.number = obj.phoneNumber;
                delete obj.phoneNumber;
            }
            let params = utils.defineGetter(obj, makePhoneCallParams, function (obj, prop) {
                utils.warn(
                    `makePhoneCall的参数不支持 ${prop} 属性!`,
                    {
                        apiName: prop,
                        errorType: makePhoneCallParams[prop].type,
                        type: 'api'
                    }
                );
            });
            return my.makePhoneCall(params);
        }
    }
};
module.exports = apiObj;
