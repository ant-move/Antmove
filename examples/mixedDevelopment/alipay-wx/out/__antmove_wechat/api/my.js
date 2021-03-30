"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(n,!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var utils=require("./utils"),descObj=require("./desc.js"),apiObj={getSystemInfo:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.getSystemInfo.body.returnValue.props;wx.getSystemInfo(_objectSpread({},t,{success:function(e){e.app="wechat",e=utils.defineGetter(e,n,function(e,t){utils.warn("getSystemInfo的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})}),t.success&&t.success(e)}}))}},getSystemInfoSync:{fn:function(){var e=wx.getSystemInfoSync(),n=descObj.getSystemInfoSync.body.returnValue.props;return utils.defineGetter(e,n,function(e,t){utils.warn("getSystemInfoSync的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})}),e.app="wechat",e}},getNetworkType:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.getNetworkType.body.returnValue.props;wx.getNetworkType(_objectSpread({},t,{success:function(e){"none"===e.networkType?e.networkType="NOTREACHABLE":"wifi"===e.networkType?e.networkType="Wi-Fi":e.networkType=e.networkType.toUpperCase(),(e=utils.defineGetter(e,n,function(e,t){utils.warn("getNetworkType的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})})).networkAvailable=!0,t.success&&t.success(e)}}))}},onNetworkStatusChange:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.onNetworkStatusChange(_objectSpread({},t,{success:function(e){"none"===e.networkType?e.networkType="NOTREACHABLE":"wifi"===e.networkType?e.networkType="Wi-Fi":e.networkType=e.networkType.toUpperCase(),t.success&&t.success(e)}}))}},getClipboard:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.getClipboardData(_objectSpread({},t,{success:function(e){e.text=e.data,delete e.data,t.success&&t.success(e)}}))}},setClipboard:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.data=t.text,delete t.text,wx.setClipboardData(t)}},offAccelerometerChange:{fn:function(){wx.stopAccelerometer()}},offGyroscopeChange:{fn:function(){wx.stopGyroscope()}},offCompassChange:{fn:function(){wx.stopCompass()}},makePhoneCall:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return t.number&&(t.phoneNumber=t.number,delete t.number),wx.makePhoneCall(t)}},setScreenBrightness:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.brightness&&(t.value=t.brightness,delete t.brightness),wx.setScreenBrightness(t)}},getScreenBrightness:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.getScreenBrightness({success:function(e){e.brightness=e.value,delete e.value,t.success&&t.success(e)},fail:function(e){t.fail&&t.fail(e)}})}},scan:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.scan.body.returnValue.props;n.type&&(n.scanType="qr"===n.type?["qrCode"]:["barCode"],delete n.type),n.hideAlbum&&(n.onlyFromCamera=n.hideAlbum,delete n.hideAlbum),wx.scanCode(_objectSpread({},n,{success:function(e){var t=utils.defineGetter(e,o,function(e,t){utils.warn("scan的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});t.code=t.result,delete t.result,n.success&&n.success(t)}}))}},getBLEDeviceCharacteristics:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.getBLEDeviceCharacteristics.body.returnValue.props;wx.getBLEDeviceCharacteristics(_objectSpread({},n,{success:function(e){var t=utils.defineGetter(e,o,function(e,t){utils.warn("getBLEDeviceCharacteristics的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});t.characteristics&&t.characteristics.forEach(function(e){e.characteristicId=e.uuid,delete e.uuid}),n.success&&n.success(t)}}))}},getBLEDeviceServices:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.getBLEDeviceServices.body.returnValue.props;n.serviceId&&utils.warn("getBLEDeviceServices的参数不支持serviceId属性!",{apiName:"getBLEDeviceServices/serviceId",errorType:0,type:"api"}),wx.getBLEDeviceServices(_objectSpread({},n,{success:function(e){var t=utils.defineGetter(e,o,function(e,t){utils.warn("getBLEDeviceServices的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});t.services&&(t.services.forEach(function(e){e.characteristicId=e.uuid,delete e.uuid}),t.characteristics=t.services,delete t.services),n.success&&n.success(t)}}))}},notifyBLECharacteristicValueChange:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.notifyBLECharacteristicValueChange.body.params.props,o=utils.defineGetter(t,n,function(e,t){utils.warn("notifyBLECharacteristicValueChange的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.notifyBLECharacteristicValueChange(o)}},onBLECharacteristicValueChange:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.onBLECharacteristicValueChange.body.params.props,o=utils.defineGetter(t,n,function(e,t){utils.warn("onBLECharacteristicValueChange的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.onBLECharacteristicValueChange(o)}},onBLEConnectionStateChanged:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.onBLEConnectionStateChange(t)}},getBluetoothDevices:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.getBluetoothDevices.body.returnValue.props;wx.getBluetoothDevices({success:function(e){var t=e.devices.map(function(e){return utils.defineGetter(e,o,function(e,t){utils.warn("getBluetoothDevices的success回调不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})})});n.success&&n.success(t)}})}},getConnectedBluetoothDevices:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.deviceId&&(t.services=[t.deviceId],delete t.deviceId),wx.getConnectedBluetoothDevices(t)}},onBluetoothDeviceFound:{fn:function(n){var o=descObj.onBluetoothDeviceFound.body.returnValue.props;wx.onBluetoothDeviceFound(function(e){var t=e.devices.map(function(e){return utils.defineGetter(e,o,function(e,t){utils.warn("onBluetoothDeviceFound的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})})});e.devices=t,n&&n(e)})}},openBluetoothAdapter:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.openBluetoothAdapter.body.params.props,o=utils.defineGetter(t,n,function(e,t){utils.warn("openBluetoothAdapter的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.openBluetoothAdapter(o)}},getBeacons:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.getBeacons.body.returnValue.props;return wx.getBeacons({success:function(e){var t=utils.defineGetter(e,o,function(e,t){utils.warn("getBeacons的success回调不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});n.success&&n.success(t)},fail:function(e){n.fail&&n.fail(e)},complete:function(e){n.complete&&n.complete(e)}}),wx.getBeacons(n)}},createWebViewContext:{fn:function(){utils.warn("微信暂不支持 createWebViewContext",{apiName:"createWebViewContext",errorType:0,type:"api"})}},setNavigationBar:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.backgroundColor&&(t.frontColor||utils.warn("setNavigationBarColor的frontColor是必传的!",{apiName:"setTabBarItem/frontColor",errorType:0,type:"api"}),wx.setNavigationBarColor({backgroundColor:t.backgroundColor}));var n=descObj.setNavigationBar.body.params.props,o=utils.defineGetter(t,n,function(e,t){utils.warn("setNavigationBarTitle的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.setNavigationBarTitle(o)}},alert:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.buttonText&&(t.confirmText=t.buttonText,delete t.confirmText),t.content=t.content.toString(),"object"===_typeof(t.content)&&(t.content=JSON.stringify(t.content)),wx.showModal(_objectSpread({},t,{showCancel:!1}))}},confirm:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.confirmButtonText&&(t.confirmText=t.confirmButtonText,delete t.confirmButtonText),t.cancelButtonText&&(t.cancelText=t.cancelButtonText,delete t.cancelButtonText),t.content instanceof Array&&(t.content=JSON.stringify(t.content)),wx.showModal(t)}},call:{fn:function(){utils.warn("微信小程序不支持call方法",{apiName:"call",errorType:0,type:"api"})}},hideLoading:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.hideLoading.body.params.props,o=utils.defineGetter(t,n,function(e,t){utils.warn("hideLoading的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.hideLoading(o)}},showActionSheet:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.showActionSheet.body.params.props;t.items&&(t.itemList=t.items.slice(0,6),delete t.items);var o=utils.defineGetter(t,n,function(e,t){utils.warn("showActionSheet的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.showActionSheet(_objectSpread({},o,{success:function(e){e.index=e.tapIndex,delete e.tapIndex,t.success&&t.success(e)}}))}},showLoading:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.showLoading.body.params.props;t.content&&(t.title=t.content,delete t.content);var o=utils.defineGetter(t,n,function(e,t){utils.warn("showLoading的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.showLoading(o)}},showToast:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.showToast.body.params.props;if(t.content&&(t.title=t.content,delete t.content),t.duration||(t.duration=1500),t.type){switch(t.type){case"success":t.icon="success";break;case"fail":t.icon="none",utils.warn("showToast暂不支持fail",{apiName:"showToast/fail",errorType:0,type:"api"});break;case"exception":t.icon="none",utils.warn("showToast暂不支持exception ",{apiName:"showToast/exception ",errorType:0,type:"api"});break;case"none":t.icon="none"}delete t.type}t.icon=t.icon?t.icon:"none";var o=utils.defineGetter(t,n,function(e,t){utils.warn("showToast的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.showToast(_objectSpread({},o,{success:function(){setTimeout(function(){o.success&&o.success()},t.duration)},fail:function(){setTimeout(function(){o.fail&&o.fail()},t.duration)}}))}},createCanvasContext:{fn:function(e){return wx.createCanvasContext(e)}},createAnimation:{fn:function(e){return e.timingFunction=e.timeFunction,delete e.timeFunction,wx.createAnimation(_objectSpread({},e))}},createMapContext:{fn:function(e){var t=wx.createMapContext(e);return Object.keys(descObj.createMapContext.body.returnValue.props).map(function(e){0===descObj.createMapContext.body.returnValue.props[e].type&&(t[e]=function(){console.warn("参数".concat(e,"不支持"))},console.warn("参数".concat(e,"不支持")))}),t}},createIntersectionObserver:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.selectAll&&(t.observeAll=t.selectAll,delete t.selectAll),wx.createIntersectionObserver(t)}},chooseImage:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.count||(t.count=9),wx.chooseImage(_objectSpread({},t,{success:function(e){e.apFilePaths=e.tempFilePaths,delete e.tempFilePaths,t.success&&t.success(e)}}))}},compressImage:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.apFilePaths&&(t.src=t.apFilePaths.toString(),delete t.apFilePaths),t.compressLevel?(t.compressLevel=t.compressLevel/5*100,t.quality=t.compressLevel,delete t.compressLevel):t.quality=80,wx.compressImage(_objectSpread({},t,{success:function(e){e.apFilePaths=[e.tempFilePath],delete e.tempFilePath,t.success&&t.success(e)}}))}},previewImage:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=t.current||0;return t.current=t.urls[n],wx.previewImage(t)}},saveImage:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.url&&(t.filePath=t.url,delete t.url),wx.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]||wx.authorize({scope:"scope.writePhotosAlbum",success:function(){}}),(t.filePath.includes("https")||t.filePath.includes("http"))&&utils.warn("微信小程序保存照片API不支持网络图片路径",{apiName:"saveImageToPhotosAlbum",errorType:0,type:"api"}),wx.saveImageToPhotosAlbum(_objectSpread({},t,{success:function(){t.success&&t.success()},fail:function(){t.fail&&t.fail()},complete:function(){t.complete&&t.complete()}}))}})}},getFileInfo:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return t.apFilePath&&(t.filePath=t.apFilePath,delete t.apFilePath),wx.getFileInfo(t)}},getSavedFileInfo:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return t.apFilePath&&(t.filePath=t.apFilePath,delete t.apFilePath),wx.getSavedFileInfo(t)}},getSavedFileList:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{};wx.getSavedFileList({success:function(e){if(e.fileList.length){var t=e.fileList.map(function(e){return e.apFilePath=e.filePath,delete e.filePath,e});e.fileList=t,n.success&&n.success(e)}else n.success&&n.success(e)}})}},removeSavedFile:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return t.apFilePath&&(t.filePath=t.apFilePath,delete t.apFilePath),wx.removeSavedFile(t)}},saveFile:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.apFilePath&&(t.tempFilePath=t.apFilePath,delete t.apFilePath),wx.saveFile(_objectSpread({},t,{success:function(e){e.apFilePath=e.savedFilePath,delete e.savedFilePath,t.success&&t.success(e)}}))}},getStorageSync:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=wx.getStorageSync(t.key);return n={error:void 0,success:!0,key:t.key,data:n}}},setStorageSync:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return wx.setStorageSync(t.key,t.data),{error:void 0,success:!0}}},removeStorageSync:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return wx.removeStorageSync(t.key),{error:void 0,success:!0}}},clearStorageSync:{fn:function(){return wx.clearStorageSync(),{error:void 0,success:!0}}},getLocation:{fn:function(e){var o=0<arguments.length&&void 0!==e?e:{};void 0!==o.cacheTimeout&&utils.warn("微信暂不支持 cacheTimeout",{apiName:"getLocation/cacheTimeout",errorType:0,type:"api"}),utils.warn("微信小程序获取用户地理位置时需要在app.json中配置permission字段",{apiName:"getLocation",errorType:0,type:"api"}),o.type=o.type||0,wx.getSetting({success:function(e){!1===e.authSetting["scope.userLocation"]&&wx.authorize({scope:"scope.userLocation"}),wx.getLocation(_objectSpread({},o,{type:"wgs84",success:function(e){var t,n=utils.wgs84togcj02(e.longitude,e.latitude);t=Object.assign(e,{longitude:n[0],latitude:n[1]}),o.success&&o.success(t)},fail:function(){o.fail()&&o.fail()}}))}})}},openLocation:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return t.scale?(utils.warn("微信scale的取值为5-18，默认18",{apiName:"openLocation/scale",errorType:4,type:"api"}),18<t.scale?t.scale=18:t.scale<5&&(t.scale=5)):t.scale=18,t.longitude=parseFloat(t.longitude),t.latitude=parseFloat(t.latitude),wx.openLocation(t)}},connectSocket:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.connectSocket.body.params.props,o=utils.defineGetter(t,n,function(e,t){utils.warn("connectSocket的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})});wx.connectSocket(o)}},downloadFile:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.downloadFile(_objectSpread({},t,{success:function(e){e.apFilePath=e.tempFilePath,delete e.tempFilePath,t.success&&t.success(e)},fail:function(e){e.errorMessage=e.errMsg,delete e.errMsg,t.fail&&t.fail(e)}}))}},onSocketMessage:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.onSocketMessage.body.returnValue.props;return wx.onSocketMessage(t),utils.defineGetter(t,n,function(e,t){utils.warn("onSocketMessage的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})})}},request:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.headers&&(t.header=t.headers,delete t.headers),t.timeout&&utils.warn("微信request的不支持timeout属性",{apiName:"request/timeout",errorType:0,type:"api"}),wx.request(_objectSpread({},t,{success:function(e){e.headers=e.header,e.status=e.statusCode,delete e.header,delete e.statusCode,t.success&&t.success(e)},fail:function(e){t.fail&&t.fail(e)},complete:function(e){t.complete&&t.complete(e)}}))}},sendSocketMessage:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{},n=descObj.sendSocketMessage.body.params.props;return wx.sendSocketMessage(t),utils.defineGetter(t,n,function(e,t){utils.warn("sendSocketMessage的返回值不支持 ".concat(t," 属性!"),{apiName:t,errorType:n[t].type,type:"api"})})}},uploadFile:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.fileName&&(t.name=t.fileName,delete t.fileName),t.fileType&&utils.warn("微信暂不支持 fileType",{apiName:"uploadFile/fileType",errorType:0,type:"api"}),wx.uploadFile(_objectSpread({},t,{success:function(e){e.header&&utils.warn("微信暂不支持 header",{apiName:"uploadFile/header",errorType:0,type:"api"}),t.success&&t.success(e)},fail:function(e){e.errorMessage=e.errMsg,delete e.errMsg,t.fail&&t.fail(e)}}))}},showSharePanel:{fn:function(){wx.showShareMenu()}},SDKVersion:{fn:function(){var t="";return wx.getSystemInfo({success:function(e){t=e.SDKVersion}}),t}},getAuthCode:{fn:function(e){utils.warn("微信小程序发起授权请求获取用户信息时需要使用button按钮配合",{apiName:"authorize",errorType:0,type:"api"})}},getAuthUserInfo:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.getUserInfo(_objectSpread({},t,{success:function(e){e.nickName=e.userInfo.nickName,e.avatar=e.userInfo.avatarUrl,delete e.userInfo.nickName,delete e.userInfo.avatarUrl,t.success&&t.success(e)}}))}},getOpenUserInfo:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};wx.getUserInfo(_objectSpread({},t,{success:function(e){e.nickName=e.userInfo.nickName,e.avatar=e.userInfo.avatarUrl,delete e.userInfo.nickName,delete e.userInfo.avatarUrl,t.success&&t.success(e)}}))}},getSetting:{fn:function(e){var t,n=0<arguments.length&&void 0!==e?e:{};if(wx.getSetting)wx.getSetting(_objectSpread({},n,{success:function(e){e.authSetting.location=e.authSetting["scope.userLocation"],delete e.authSetting["scope.userLocation"],e.authSetting.audioRecord=e.authSetting["scope.record"],delete e.authSetting["scope.record"],e.authSetting.userInfo=e.authSetting["scope.userInfo"],delete e.authSetting["scope.userInfo"],e.authSetting.album=e.authSetting["scope.writePhotosAlbum"],delete e.authSetting["scope.writePhotosAlbum"],e.authSetting.camera=e.authSetting["scope.camera"],delete e.authSetting["scope.camera"],n.success&&n.success(e)}}));else{var o={authSetting:{}};n&&n.success&&(t=function(){n.success(o)},wx.getLocation({success:function(e){e.authSetting.location=!0,t&&t()}}))}}},tradePay:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.tradePay.body.params.props,a=descObj.tradePay.body.returnValue.props,t=utils.defineGetter(n,o,function(e,t){utils.warn("tradePay的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});wx.requestPayment(_objectSpread({},t,{success:function(e){var t=utils.defineGetter(e,a,function(e,t){utils.warn("tradePay的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:a[t].type,type:"api"})});n.success&&n.success(t)}}))}},openCardList:{fn:function(e){var t=0<arguments.length&&void 0!==e?e:{};t.cardList?wx.openCard(t):utils.warn("openCard的参数cardList是必传的!",{apiName:"openCard/cardList",errorType:0,type:"api"})}},addCardAuth:{fn:function(n){var o=descObj.addCard.body.params.props,a=descObj.addCard.body.returnValue.props,e=utils.defineGetter(n,o,function(e,t){utils.warn("addCardAuth的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});wx.addCard(_objectSpread({},e,{success:function(e){var t=utils.defineGetter(e,a,function(e,t){utils.warn("addCardAuth的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:a[t].type,type:"api"})});n.success&&n.success(t)}}))}},getRunData:{fn:function(e){var n=0<arguments.length&&void 0!==e?e:{},o=descObj.getRunData.body.params.props,a=descObj.getRunData.body.returnValue.props,t=utils.defineGetter(n,o,function(e,t){utils.warn("getRunData的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:o[t].type,type:"api"})});wx.getWeRunData(_objectSpread({},t,{success:function(e){var t=utils.defineGetter(e,a,function(e,t){utils.warn("getRunData的参数不支持 ".concat(t," 属性!"),{apiName:t,errorType:a[t].type,type:"api"})});n.success&&n.success(t)}}))}}};module.exports=apiObj;