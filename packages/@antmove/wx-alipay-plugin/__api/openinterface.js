/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require('./utils')
const descObj = require('./desc.js')

const apiObj = {
  getUserInfo: {
    fn(obj) {
      const getUserInfoSuccessRes = descObj.getUserInfo.body.params.props
      if (obj.withCredentials || obj.lang) {
        utils.warn(
          'GetAuthUserInfo不支持 withCredentials 或 lang 参数.',
          {
            apiName: 'getUserInfo/withCredentials 或 getUserInfo/lang',
            errorType: 0,
            type: 'api',
          },
        )
      }

      my.getAuthCode({
        scopes: 'auth_user',
        success: () => {
          my.getAuthUserInfo({
            ...obj,
            success(res) {
              utils.defineGetter(res, getUserInfoSuccessRes, (_obj, prop) => {
                utils.warn(
                  `getUserInfo的参数不支持 ${prop} 属性!`,
                  {
                    apiName: `getUserInfo/${prop}`,
                    errorType: getUserInfoSuccessRes[prop].type,
                    type: 'api',
                  },
                )
              })

              const _res = {}
              _res.userInfo = res
              _res.userInfo.avatarUrl = res.avatar
              obj.success && obj.success(_res)
            },
          })
        },
      })
    },
  },
  reportAnalytics: {
    fn(key, value) {
      if (typeof value !== 'object') {
        if (!(value instanceof Object)) {
          value = {
            data: value,
          }
        }
      }
      return my.reportAnalytics(key, value)
    },
  },
  requestPayment: {
    fn(obj = {}) {
      const requestPaymentParams = descObj.requestPayment.body.params.props
      const params = utils.defineGetter(obj, requestPaymentParams, (_obj, prop) => {
        utils.warn(
          `requestPayment的参数不支持 ${prop} 属性!`,
          {
            apiName: `requestPayment/${prop}`,
            errorType: requestPaymentParams[prop].type,
            type: 'api',
          },
        )
      })
      return my.tradePay(params)
    },
  },
  authorize: {
    fn(obj = {}) {
      const authorizeParams = descObj.authorize.body.params.props
      if (obj.scope) {
        delete obj.scope
        obj.scopes = 'auth_user'
      }
      const params = utils.defineGetter(obj, authorizeParams, (_obj, prop) => {
        utils.warn(
          `authorize的参数不支持 ${prop} 属性!`,
          {
            apiName: `authorize/${prop}`,
            errorType: authorizeParams[prop].type,
            type: 'api',
          },
        )
      })
      return my.getAuthCode(params)
    },
  },
  openCard: {
    fn(obj) {
      const openCardParams = descObj.openCard.body.params.props
      const params = utils.defineGetter(obj, openCardParams, (_obj, prop) => {
        utils.warn(
          `openCard的参数不支持 ${prop} 属性!`,
          {
            apiName: `openCard/${prop}`,
            errorType: openCardParams[prop].type,
            type: 'api',
          },
        )
      })
      return my.openCardList(params)
    },
  },
  addCard: {
    fn(obj) {
      const addCardParams = descObj.addCard.body.params.props
      const params = utils.defineGetter(obj, addCardParams, (_obj, prop) => {
        utils.warn(
          `addCard的参数不支持 ${prop} 属性!`,
          {
            apiName: `startSoterAuthentication/${prop}`,
            errorType: addCardParams[prop].type,
            type: 'api',
          },
        )
      })
      return my.addCardAuth(params)
    },
  },
  startSoterAuthentication: {
    fn(obj) {
      const startSoterAuthenticationParams = descObj.startSoterAuthentication.body.params.props
      const params = utils.defineGetter(obj, startSoterAuthenticationParams, (_obj, prop) => {
        utils.warn(
          `startSoterAuthentication的参数不支持 ${prop} 属性!`,
          {
            apiName: prop,
            errorType: startSoterAuthenticationParams[prop].type,
            type: 'api',
          },
        )
      })
      return my.ap.faceVerify(params)
    },
  },

  getSetting: {
    fn(options = {}) {
      function setLocation(cb) {
        my.getLocation({
          success(res) {
            res.authSetting['scope.userLocation'] = true
            cb && cb()
          },
        })
      }
      if (my.getSetting) {
        my.getSetting({
          ...options,
          success(res) {
            const { success } = options

            if (!success) { return }

            success({
              authSetting: utils.mapAuthSetting(res.authSetting),
            })
          },
        })
      } else {
        const res = {}
        res.authSetting = {}

        /**
                   * scope=[userInfo, location, album, camera, audioRecord]
                   */

        if (options && options.success) {
          setLocation(() => {
            options.success(res)
          })
        }
      }
    },
  },
  openSetting: {
    fn(options = {}) {
      my.openSetting({
        ...options,
        success: (res) => {
          const { success } = options

          if (!success) {
            return
          }

          success({
            authSetting: utils.mapAuthSetting(res.authSetting),
          })
        },
      })
    },
  },
}
module.exports = apiObj
