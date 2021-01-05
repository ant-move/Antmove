/**
 * type:0 missing
 * type:1 diff
 * type:3 - diffType - 类型不同
 * 
 */
const utils = require("./utils");
const apiObj = {
    startBeaconDiscovery: {
        fn (obj = {}) {
            let params = utils.defineGetter(obj, apiObj.startBeaconDiscovery.body.params, function (obj, prop) {
                console.warn(`startBeaconDiscovery's params value is not support ${prop} attribute!`);
            });
            return my.startBeaconDiscovery(params);
        },
        body: {
            params: {
                ignoreBluetoothAvailable: {
                    type: 0,
                    desc: 'missing'
                }
            }
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
        },
        body: {
            params: {
                props: {
                    value: {
                        type: 3,
                        desc: "diffType",
                        key: "Hex String"
                    }
                }
            }
        }
    },
    onBLEConnectionStateChange: {
        fn (obj = {}) {
            return my.onBLEConnectionStateChanged(obj);
        },
        body: {
            type: 1,
            desc: 'onBLEConnectionStateChanged'
        }
    },
    onBLECharacteristicValueChange: {
        fn (cb) {
            my.onBLECharacteristicValueChange(function (res) {
                res.value = utils.changeType(res.value);
                cb && cb (res);
            });
        },
        body: {
            returnValue: {
                type: 0,
                props: {
                    value: {
                        type: 3,
                        desc: "diffType",
                        key: "Hex String"
                    }
                }
            }
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
        },
        body: {
            returnValue: {
                props: {
                    services: {
                        props: {
                            uuid: {
                                type: 1,
                                desc: "serviceId"
                            }
                        }
                    }
                }
            }
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
        },
        body: {
            returnValue: {
                props: {
                    services: {
                        props: {
                            uuid: {
                                type: 1,
                                desc: "characteristicId"
                            }
                        }
                    }
                }
            }
        }
    },
    addPhoneContact: {
        fn (obj = {}) {
            if (obj.weChatNumber) {
                obj.alipayAccount = obj.weChatNumber;
            }
            my.addPhoneContact(obj);
        },
        body: {
            params: {
                props: {
                    weChatNumber: {
                        type: 1,
                        desc: "alipayAccount"
                    }
                }
            }
        }
    },
    startBluetoothDevicesDiscovery: {
        fn (obj = {}) {
            if (obj.interval) {
                obj.interval = Math.round(obj.interval);
            }
            my.startBluetoothDevicesDiscovery(obj);
        },
        body: {
            params: {
                props: {
                    interval: {
                        type: 3,
                        desc: "Integer"
                    }
                }
            }
        }
    },
    onBluetoothDeviceFound: {
        fn (cb) {
            my.onBluetoothDeviceFound(function (res) {
                let arr = res.devices.map(item => {
                    item.advertisData = utils.changeType(item.advertisData);
                    return utils.defineGetter(item, apiObj.onBluetoothDeviceFound.body.returnValue.props, function (obj, prop) {
                        console.warn(`onBluetoothDeviceFound's return value is not support ${prop} attribute!`);
                    });
                });
                res.devices = arr;
                cb && cb(res);
            });
        },
        body: {
            returnValue: {
                props: {
                    advertisServiceUUIDs: {
                        type: 0,
                        desc: "缺失"
                    },
                    serviceData: {
                        type: 0,
                        desc: "缺失"
                    },
                    advertisData: {
                        type: 3,
                        desc: "Hex String"
                    }
                }
            }
        }
    },
    getBluetoothDevices: {
        fn (obj = {}) {
            my.getBluetoothDevices({
                ...obj,
                success: (res) => {
                    let arr = res.devices.map(item => {
                        item.advertisData = utils.changeType(item.advertisData);
                        return utils.defineGetter(item, apiObj.getBluetoothDevices.body.returnValue.props.devices.props, function (obj, prop) {
                            console.warn(`getBluetoothDevices's return value is not support ${prop} attribute!`);
                        });
                    });
                    res.devices = arr;
                    obj.success && obj.success(res);
                }
            });
        },
        body: {
            returnValue: {
                props: {
                    devices: {
                        props: {
                            advertisServiceUUIDs: {
                                type: 0,
                                desc: "缺失"
                            },
                            serviceData: {
                                type: 0,
                                desc: "缺失"
                            },
                            advertisData: {
                                type: 3,
                                desc: 'Hex String'
                            }
                        }
                    }
                }
            }
        }
    },
    setClipboardData: {
        fn (obj = {}) {
            if (obj.data) {
                obj.text = obj.data;
                delete obj.data;
            }
            my.setClipboard(obj);
        },
        body: {
            type: 1,
            desc: 'setClipboard',
            params: {
                props: {
                    data: {
                        type: 1,
                        desc: 'text',
                    }
                }
            }
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
                console.log(res);
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
        },
        body: {}
    },
    setScreenBrightness: {
        fn (obj = {}) {
            console.log('obj',obj);
            if (obj.value) {
                obj.brightness = obj.value;
                delete obj.value;
            }
            console.log('obj2',obj);
            my.setScreenBrightness(obj);
        },
        body: {
            params: {
                props: {
                    value: {
                        type: 1,
                        desc: 'brightness'
                    },
                }
            }
        }
    },
    getScreenBrightness: {
        fn (obj = {}) {
            my.getScreenBrightness({
                success: (res) => {  
                    console.log(res);                
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
            if (obj.scanType) {
                obj.scanType.forEach(item => {
                    if (item === 'datamatrix' || item === 'pdf417') {
                        console.warn(`${item} is not supported `);
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
                    let _res = utils.defineGetter(res, apiObj.scanCode.body.successRes, function (obj, prop) {
                        console.warn(`scanCode's params value is not support ${prop} attribute!`);
                    });
                    _res.result = _res.code;
                    delete _res.code;
                    obj.success && obj.success(_res);
                }
            });
        },
        body: {
            params: {
                scanType: {
                    type: 3,
                    desc: 'scanType(Array)对应type(String)'
                },
                onlyFromCamera: {
                    type: 1,
                    desc: 'onlyFromCamera对应hideAlbum'
                }
            },
            successRes: {
                path: {
                    type: 0
                },
                rawData: {
                    type: 0
                },
                charSet: {
                    type: 0
                },
                scanType: {
                    type: 0
                }
            }
        }
    },
    stopGyroscope: {
        fn (obj = {}) {
            let params = utils.defineGetter(obj, apiObj.stopGyroscope.body.params, function (obj, prop) {
                console.warn(`stopGyroscope's params value is not support ${prop} attribute!`);
            });
            return my.offGyroscopeChange(params);
        },
        body: {
            params: {
                success: {
                    type: 0,
                    desc: 'missing'
                },
                fail: {
                    type: 0,
                    desc: 'missing'
                },
                complete: {
                    type: 0,
                    desc: 'missing'
                }
            }
        }
    },
    onCompassChange: {
        fn (cb) {
            my.onCompassChange(function (res) {
                let _res = utils.defineGetter(res, apiObj.onCompassChange.body.returnValue, function (obj, prop) {
                    console.warn(`onCompassChange's return value is not support ${prop} attribute!`);
                });
                cb && cb(_res);
            });
            
        },
        body: {
            returnValue: {
                accuracy: {
                    type: 0,
                    desc: 'missing'
                }
            }
        }
    },
    stopCompass: {
        fn (obj = {}) {
            let params = utils.defineGetter(obj, apiObj.stopCompass.body.params, function (obj, prop) {
                console.warn(`stopCompass's params value is not support ${prop} attribute!`);
            });
            return my.offCompassChange(params);
        },
        body: {
            params: {
                success: {
                    type: 0,
                    desc: 'missing'
                },
                fail: {
                    type: 0,
                    desc: 'missing'
                },
                complete: {
                    type: 0,
                    desc: 'missing'
                }
            }
        }
    },
    stopAccelerometer: {
        fn (obj = {}) {
            let params = utils.defineGetter(obj, apiObj.stopAccelerometer.body.params, function (obj, prop) {
                console.warn(`stopAccelerometer's params value is not support ${prop} attribute!`);
            });
            return my.offAccelerometerChange(params);
        },
        body: {
            params: {
                success: {
                    type: 0,
                    desc: 'missing'
                },
                fail: {
                    type: 0,
                    desc: 'missing'
                },
                complete: {
                    type: 0,
                    desc: 'missing'
                }
            }
        }
    },
    makePhoneCall: {
        fn (obj = {}) {
            if (obj.phoneNumber) {
                obj.number = obj.phoneNumber;
                delete obj.phoneNumber;
            }
            let params = utils.defineGetter(obj, apiObj.makePhoneCall.body.params, function (obj, prop) {
                console.warn(`makePhoneCall's params value is not support ${prop} attribute!`);
            });
            return my.makePhoneCall(params);
        },
        body: {
            params: {
                phoneNumber: {
                    type: 1,
                    desc: 'phoneNumber对应number'
                },
                success: {
                    type: 0,
                    desc: 'missing'
                },
                fail: {
                    type: 0,
                    desc: 'missing'
                },
                complete: {
                    type: 0,
                    desc: 'missing'
                }
            }
        }
    }
};
module.exports = apiObj;
