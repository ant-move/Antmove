/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require('./utils')
const descObj = require('./desc.js')

const apiObj = {
  scanCode: {
    fn(obj) {
      const scanCodeProps = descObj.scanCode.body.params.props
      const scanCodeReturn = descObj.scanCode.body.returnValue.props
      const params = utils.defineGetter(
        obj,
        scanCodeProps,
        (obj, prop) => {
          utils.warn(
            `scanCode的参数不支持 ${prop} 属性!`,
            {
              apiName: `scanCode/${prop}`,
              errorType: scanCodeProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.scanCode({
        ...params,
        success: (res) => {
          res = utils.defineGetter(
            res,
            scanCodeReturn,
            (obj, prop) => {
              utils.warn(
                `scanCode的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `scanCode/${prop}`,
                  errorType: scanCodeReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  getSystemInfoSync: {
    fn() {
      let ret = tt.getSystemInfoSync()
      const getSystemInfoSyncReturn = descObj.getSystemInfoSync.body.returnValue.props
      ret = utils.defineGetter(
        ret,
        getSystemInfoSyncReturn,
        (obj, prop) => {
          utils.warn(
            `getSystemInfoSync的返回值不支持 ${prop} 属性!`,
            {
              apiName: `getSystemInfoSync/${prop}`,
              errorType: getSystemInfoSyncReturn[prop].type,
              type: 'api',
            },
          )
        },
      )
      return ret
    },
  },
  getSystemInfo: {
    fn(obj = {}) {
      const getSystemInfoSyncReturn = descObj.getSystemInfo.body.returnValue.props
      tt.getSystemInfo({
        ...obj,
        success: (res) => {
          res = utils.defineGetter(
            res,
            getSystemInfoSyncReturn,
            (obj, prop) => {
              utils.warn(
                `getSystemInfo的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `getSystemInfo/${prop}`,
                  errorType: getSystemInfoSyncReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  onCompassChange: {
    fn() {
      const onCompassChangeResturn = descObj.onCompassChange.body.returnValue.props
      tt.onCompassChange((res) => {
        res = utils.defineGetter(
          res,
          onCompassChangeResturn,
          (obj, prop) => {
            utils.warn(
              `onCompassChange的返回值不支持 ${prop} 属性!`,
              {
                apiName: `onCompassChange/${prop}`,
                errorType: onCompassChangeResturn[prop].type,
                type: 'api',
              },
            )
          },
        )
      })
    },
  },
  getFileInfo: {
    fn(obj = {}) {
      const getFileInfoProps = descObj.getFileInfo.body.params.props
      const getFileInfoReturn = descObj.getFileInfo.body.returnValue.props
      const params = utils.defineGetter(
        obj,
        getFileInfoProps,
        (obj, prop) => {
          utils.warn(
            `getFileInfo的参数不支持 ${prop} 属性!`,
            {
              apiName: `getFileInfo/${prop}`,
              errorType: getFileInfoProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.getFileInfo({
        ...params,
        success: (res) => {
          res = utils.defineGetter(
            res,
            getFileInfoReturn,
            (obj, prop) => {
              utils.warn(
                `getFileInfo的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `getFileInfo/${prop}`,
                  errorType: getFileInfoReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  getLocation: {
    fn(obj = {}) {
      const getLocationProps = descObj.getLocation.body.params.props
      const params = utils.defineGetter(
        obj,
        getLocationProps,
        (obj, prop) => {
          utils.warn(
            `getLocation的参数不支持 ${prop} 属性!`,
            {
              apiName: `getLocation/${prop}`,
              errorType: getLocationProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.getLocation(params)
    },
  },
  getImageInfo: {
    fn(obj = {}) {
      const getImageInfoReturn = descObj.getImageInfo.body.returnValue.props
      tt.getImageInfo({
        ...obj,
        success: (res) => {
          res = utils.defineGetter(
            res,
            getImageInfoReturn,
            (obj, prop) => {
              utils.warn(
                `getImageInfo的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `getImageInfo/${prop}`,
                  errorType: getImageInfoReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  chooseImage: {
    fn(obj = {}) {
      const chooseImageProps = descObj.chooseImageProps.body.params.props
      const params = utils.defineGetter(
        obj,
        chooseImageProps,
        (obj, prop) => {
          utils.warn(
            `getLocation的参数不支持 ${prop} 属性!`,
            {
              apiName: `getLocation/${prop}`,
              errorType: chooseImageProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.chooseImage(params)
    },
  },
  createVideoContext: {
    fn(params) {
      const videoCtx = tt.createVideoContext(params)
      Object.keys(descObj.createVideoContext.body.returnValue.props).map((key) => {
        if (descObj.createMapContext.body.returnValue.props[key].type === 0) {
          videoCtx[key] = () => {
            console.warn(`参数${key}不支持`)
          }
          console.warn(`参数${key}不支持`)
        }
      })
      return videoCtx
    },
  },
  chooseVideo: {
    fn(obj) {
      const chooseVideoProps = descObj.chooseVideo.body.params.props
      const params = utils.defineGetter(
        obj,
        chooseVideoProps,
        (obj, prop) => {
          utils.warn(
            `chooseVideo的参数不支持 ${prop} 属性!`,
            {
              apiName: `chooseVideo/${prop}`,
              errorType: chooseVideoProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.chooseVideo(params)
    },
  },
  request: {
    fn(obj = {}) {
      if (obj.method !== 'GET' && obj.method !== 'POST' && obj.method !== 'PUT') {
        utils.warn(
          `request暂不支持${obj.method}请求方式`,
          {
            apiName: `request/${obj.method}`,
            errorType: 0,
            type: 'api',
          },
        )
        obj.method = 'GET'
      }
      tt.request(obj)
    },
  },
  downloadFile: {
    fn(obj = {}) {
      const downloadFileProps = descObj.downloadFile.body.params.props
      const downloadFileReturn = descObj.downloadFile.body.returnValue.props
      const params = utils.defineGetter(
        obj,
        downloadFileProps,
        (obj, prop) => {
          utils.warn(
            `downloadFile的参数不支持 ${prop} 属性!`,
            {
              apiName: `downloadFile/${prop}`,
              errorType: downloadFileProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.downloadFile({
        ...params,
        success: (res) => {
          res = utils.defineGetter(
            res,
            downloadFileReturn,
            (obj, prop) => {
              utils.warn(
                `downloadFile的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `downloadFile/${prop}`,
                  errorType: downloadFileReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  uploadFile: {
    fn(obj = {}) {
      const uploadFileReturn = descObj.uploadFile.body.returnValue.props
      tt.uploadFile({
        ...obj,
        success: (res) => {
          res = utils.defineGetter(
            res,
            uploadFileReturn,
            (obj, prop) => {
              utils.warn(
                `uploadFile的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `uploadFile/${prop}`,
                  errorType: uploadFileReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  connectSocket: {
    fn(obj = {}) {
      const connectSocketProps = descObj.connectSocket.body.params.props
      const params = utils.defineGetter(
        obj,
        connectSocketProps,
        (obj, prop) => {
          utils.warn(
            `connectSocket的参数不支持 ${prop} 属性!`,
            {
              apiName: `connectSocket/${prop}`,
              errorType: connectSocketProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      return tt.connectSocket(params)
    },
  },
  login: {
    fn(obj = {}) {
      const loginProps = descObj.login.body.params.props
      const params = utils.defineGetter(
        obj,
        loginProps,
        (obj, prop) => {
          utils.warn(
            `login的参数不支持 ${prop} 属性!`,
            {
              apiName: `login/${prop}`,
              errorType: loginProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.login(params)
    },
  },
  getUserInfo: {
    fn(obj = {}) {
      const getUserInfoProps = descObj.getUserInfo.body.params.props
      const getUserInfoReturn = descObj.getUserInfo.body.returnValue.props
      const params = utils.defineGetter(
        obj,
        getUserInfoProps,
        (obj, prop) => {
          utils.warn(
            `getUserInfo的参数不支持 ${prop} 属性!`,
            {
              apiName: `getUserInfo/${prop}`,
              errorType: getUserInfoProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.getUserInfo({
        ...params,
        success: (res) => {
          res = utils.defineGetter(
            res,
            getUserInfoReturn,
            (obj, prop) => {
              utils.warn(
                `getUserInfo的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `getUserInfo/${prop}`,
                  errorType: getUserInfoReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  getSetting: {
    fn(obj = {}) {
      const getSettingReturn = descObj.getSetting.body.returnValue.props
      tt.getSetting({
        ...obj,
        success: (res) => {
          res.authSetting = utils.defineGetter(
            res.authSetting,
            getSettingReturn,
            (obj, prop) => {
              utils.warn(
                `getSetting/authSetting的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `getSetting/authSetting/${prop}`,
                  errorType: getSettingReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          res.authSetting.writePhotosAlbum = res.authSetting.album
          delete res.authSetting.album
          obj.success && obj.success(res)
        },
      })
    },
  },
  chooseAddress: {
    fn(obj = {}) {
      const chooseAddressReturn = descObj.chooseAddress.body.returnValue.props
      tt.chooseAddress({
        ...obj,
        success: (res) => {
          res = utils.defineGetter(
            res,
            chooseAddressReturn,
            (obj, prop) => {
              utils.warn(
                `chooseAddress的返回值不支持 ${prop} 属性!`,
                {
                  apiName: `chooseAddress/${prop}`,
                  errorType: chooseAddressReturn[prop].type,
                  type: 'api',
                },
              )
            },
          )
          obj.success && obj.success(res)
        },
      })
    },
  },
  showShareMenu: {
    fn(obj) {
      const showShareMenuProps = descObj.showShareMenu.body.params.props
      const params = utils.defineGetter(
        obj,
        showShareMenuProps,
        (obj, prop) => {
          utils.warn(
            `showShareMenu的参数不支持 ${prop} 属性!`,
            {
              apiName: `showShareMenu/${prop}`,
              errorType: showShareMenuProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.showShareMenu(params)
    },
  },
  showToast: {
    fn(obj = {}) {
      const showToastProps = descObj.showToast.body.params.props
      const params = utils.defineGetter(
        obj,
        showToastProps,
        (obj, prop) => {
          utils.warn(
            `showToast的参数不支持 ${prop} 属性!`,
            {
              apiName: `showToast/${prop}`,
              errorType: showToastProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.showToast(params)
    },
  },
  showModal: {
    fn(obj = {}) {
      const showModalProps = descObj.showModal.body.params.props
      const params = utils.defineGetter(
        obj,
        showModalProps,
        (obj, prop) => {
          utils.warn(
            `showModal的参数不支持 ${prop} 属性!`,
            {
              apiName: `showModal/${prop}`,
              errorType: showModalProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.showModal(params)
    },
  },
  showLoading: {
    fn(obj = {}) {
      const showLoadingProps = descObj.showLoading.body.params.props
      const params = utils.defineGetter(
        obj,
        showLoadingProps,
        (obj, prop) => {
          utils.warn(
            `showLoading的参数不支持 ${prop} 属性!`,
            {
              apiName: `showLoading/${prop}`,
              errorType: showLoadingProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.showLoading(params)
    },
  },
  showActionSheet: {
    fn(obj = {}) {
      const showActionSheetProps = descObj.showActionSheet.body.params.props
      const params = utils.defineGetter(
        obj,
        showActionSheetProps,
        (obj, prop) => {
          utils.warn(
            `showActionSheet的参数不支持 ${prop} 属性!`,
            {
              apiName: `showActionSheet/${prop}`,
              errorType: showActionSheetProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.showActionSheet(params)
    },
  },
  pageScrollTo: {
    fn(obj = {}) {
      const pageScrollToProps = descObj.pageScrollTo.body.params.props
      const params = utils.defineGetter(
        obj,
        pageScrollToProps,
        (obj, prop) => {
          utils.warn(
            `pageScrollTo的参数不支持 ${prop} 属性!`,
            {
              apiName: `pageScrollTo/${prop}`,
              errorType: pageScrollToProps[prop].type,
              type: 'api',
            },
          )
        },
      )
      tt.pageScrollTo(params)
    },
  },
}

module.exports = apiObj
