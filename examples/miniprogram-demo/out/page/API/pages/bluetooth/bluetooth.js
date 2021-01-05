const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/bluetooth/bluetooth"
    }
});

function inArray(arr, key, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === val) {
            return i;
        }
    }

    return -1;
} // ArrayBuffer转16进度字符串示例

function ab2hex(buffer) {
    const hexArr = Array.prototype.map.call(new Uint8Array(buffer), function(
        bit
    ) {
        return ("00" + bit.toString(16)).slice(-2);
    });
    return hexArr.join("");
}

_Page({
    onShareAppMessage() {
        return {
            title: "蓝牙",
            path: "page/API/pages/bluetooth/bluetooth"
        };
    },

    data: {
        devices: [],
        connected: false,
        chs: []
    },

    onUnload() {
        this.closeBluetoothAdapter();
    },

    openBluetoothAdapter() {
        _my.openBluetoothAdapter({
            success: res => {
                console.log("openBluetoothAdapter success", res);
                this.startBluetoothDevicesDiscovery();
            },
            fail: res => {
                if (res.errCode === 10001) {
                    _my.showModal({
                        title: "错误",
                        content: "未找到蓝牙设备, 请打开蓝牙后重试。",
                        showCancel: false
                    });

                    _my.onBluetoothAdapterStateChange(function(res) {
                        console.log("onBluetoothAdapterStateChange", res);

                        if (res.available) {
                            this.startBluetoothDevicesDiscovery();
                        }
                    });
                }
            }
        });
    },

    getBluetoothAdapterState() {
        _my.getBluetoothAdapterState({
            success: res => {
                console.log("getBluetoothAdapterState", res);

                if (res.discovering) {
                    this.onBluetoothDeviceFound();
                } else if (res.available) {
                    this.startBluetoothDevicesDiscovery();
                }
            }
        });
    },

    startBluetoothDevicesDiscovery() {
        if (this._discoveryStarted) {
            return;
        }

        this._discoveryStarted = true;

        _my.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: true,
            interval: 0,
            success: res => {
                console.log("startBluetoothDevicesDiscovery success", res);
                this.onBluetoothDeviceFound();
            }
        });
    },

    stopBluetoothDevicesDiscovery() {
        _my.stopBluetoothDevicesDiscovery({
            complete: () => {
                this._discoveryStarted = false;
            }
        });
    },

    onBluetoothDeviceFound() {
        _my.onBluetoothDeviceFound(res => {
            res.devices.forEach(device => {
                if (!device.name && !device.localName) {
                    return;
                }

                const foundDevices = this.data.devices;
                const idx = inArray(foundDevices, "deviceId", device.deviceId);
                const data = {};

                if (idx === -1) {
                    data[`devices[${foundDevices.length}]`] = device;
                } else {
                    data[`devices[${idx}]`] = device;
                }

                this.setData(data);
            });
        });
    },

    createBLEConnection(e) {
        const ds = e.currentTarget.dataset;
        const deviceId = ds.deviceId;
        const name = ds.name;

        _my.showLoading();

        _my.createBLEConnection({
            deviceId,
            success: () => {
                this.setData({
                    connected: true,
                    timeout: 50,
                    name,
                    deviceId
                });
                this.getBLEDeviceServices(deviceId);
            },

            complete() {
                _my.hideLoading();
            }
        });

        this.stopBluetoothDevicesDiscovery();
    },

    closeBLEConnection() {
        _my.closeBLEConnection({
            deviceId: this.data.deviceId,

            complete(res) {
                console.log("closeBLEConnection");
            }
        });

        this.setData({
            connected: false,
            chs: [],
            canWrite: false
        });
    },

    getBLEDeviceServices(deviceId) {
        _my.getBLEDeviceServices({
            deviceId,
            success: res => {
                for (let i = 0; i < res.services.length; i++) {
                    if (res.services[i].isPrimary) {
                        this.getBLEDeviceCharacteristics(
                            deviceId,
                            res.services[i].uuid
                        );
                        return;
                    }
                }
            }
        });
    },

    getBLEDeviceCharacteristics(deviceId, serviceId) {
        _my.getBLEDeviceCharacteristics({
            deviceId,
            serviceId,
            success: res => {
                console.log(
                    "getBLEDeviceCharacteristics success",
                    res.characteristics
                );

                for (let i = 0; i < res.characteristics.length; i++) {
                    const item = res.characteristics[i];

                    if (item.properties.read) {
                        _my.readBLECharacteristicValue({
                            deviceId,
                            serviceId,
                            characteristicId: item.uuid,

                            complete() {
                                console.log("readBLECharacteristicValue");
                            }
                        });
                    }

                    if (item.properties.write) {
                        this.setData({
                            canWrite: true
                        });
                        this._deviceId = deviceId;
                        this._serviceId = serviceId;
                        this._characteristicId = item.uuid;
                        this.writeBLECharacteristicValue();
                    }

                    if (item.properties.notify || item.properties.indicate) {
                        _my.notifyBLECharacteristicValueChange({
                            deviceId,
                            serviceId,
                            characteristicId: item.uuid,
                            state: true,

                            complete() {
                                console.log(
                                    "notifyBLECharacteristicValueChange"
                                );
                            }
                        });
                    }
                }
            },

            fail(res) {
                console.error("getBLEDeviceCharacteristics", res);
            }
        }); // 操作之前先监听，保证第一时间获取数据

        _my.onBLECharacteristicValueChange(characteristic => {
            const idx = inArray(
                this.data.chs,
                "uuid",
                characteristic.characteristicId
            );
            const data = {};

            if (idx === -1) {
                data[`chs[${this.data.chs.length}]`] = {
                    uuid: characteristic.characteristicId,
                    value: ab2hex(characteristic.value)
                };
            } else {
                data[`chs[${idx}]`] = {
                    uuid: characteristic.characteristicId,
                    value: ab2hex(characteristic.value)
                };
            } // data[`chs[${this.data.chs.length}]`] = {
            //   uuid: characteristic.characteristicId,
            //   value: ab2hex(characteristic.value)
            // }

            this.setData(data);
        });
    },

    writeBLECharacteristicValue() {
        // 向蓝牙设备发送一个0x00的16进制数据
        const buffer = new ArrayBuffer(1);
        const dataView = new DataView(buffer); // eslint-disable-next-line

        dataView.setUint8(0, (Math.random() * 255) | 0);

        _my.writeBLECharacteristicValue({
            deviceId: this._deviceId,
            serviceId: this._deviceId,
            characteristicId: this._characteristicId,
            value: buffer,

            complete() {
                console.log("writeBLECharacteristicValue");
            }
        });
    },

    closeBluetoothAdapter() {
        _my.closeBluetoothAdapter({
            complete() {
                console.log("closeBluetoothAdapter");
            }
        });

        this._discoveryStarted = false;
    }
});
