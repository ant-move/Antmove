const utils = require('../../api/utils')
const processDataSet = require('../utils/processDataSet')

Component({
  data: {
    isUpdating: false,
    scope: '',
    getAuthorize: '',
    styleV2: my.styleV2,
  },
  props: {
    size: 'default',
    type: '',
    plain: false,
    disabled: false,
    loading: false,
    'form-type': '',
    'open-type': '',
    'app-parameter': '',
    'hover-class': 'button-hover',
    'hover-stop-propagation': false,
    'hover-start-time': false,
    className: '',
    onTap: () => {},
    onGetUserInfo: '',
    onGetPhoneNumber: '',
  },
  onInit() {
    this.updateData()
  },
  deriveDataFromProps(nextProps) {
    const {
      size,
      type,
      plain,
      disabled,
      loading,
      formType,
      openType,
      hoverClass,
      hoverStopPropagation,
      hoverStartTime,
      appParameter,
    } = nextProps
    const opentype = this.getOpenType(openType)
    const scope = this.getScope(openType)
    const params = {
      size,
      type,
      plain,
      disabled,
      loading,
      formType,
      opentype,
      scope,
      hoverClass,
      hoverStopPropagation,
      hoverStartTime,
      appParameter,
    }
    Object.keys(params).forEach(
      (key) => params[key] === undefined && delete params[key],
    )
    this.setData(params)
  },
  methods: {
    updateData() {
      if (this.data.isUpdating) {
        return
      }
      this.setData({
        isUpdating: true,
      })
      for (const key in this.props) {
        if (this.props.hasOwnProperty(key)) {
          typeof this.props[key] === 'string'
            && (this.props[key] = this.props[key].replace(/(^\s*)|(\s*$)/g, ''))
        }
      }
      const {
        size,
        type,
        plain,
        disabled,
        loading,
        formType,
        hoverClass,
        hoverStopPropagation,
        hoverStartTime,
        appParameter,
        openType,
      } = this.props
      this.getSystem(() => {
        const opentype = this.getOpenType(openType)
        const scope = this.getScope(openType)
        this.setData({
          isUpdating: false,
          size,
          type,
          plain,
          disabled,
          loading,
          formType,
          opentype,
          hoverClass,
          hoverStopPropagation,
          hoverStartTime,
          appParameter,
          scope,
        })
      })
    },
    getSystem(cb) {
      const that = this
      my.getSystemInfo({
        success(res) {
          let app = ''
          if (res.app && res.app === 'amap') {
            app = 'amap'
          } else {
            app = 'alipay'
          }
          that.setData({
            app,
          })
          cb()
        },
      })
    },
    getOpenType(opentype) {
      const transformList = {
        getPhoneNumber: 'getAuthorize',
        getUserInfo: 'getAuthorize',
      }
      if (transformList[opentype]) {
        return transformList[opentype]
      }
      let allowList = ['share', 'launchApp', 'getAuthorize', 'openSetting']
      if (this.data.app === 'amap') {
        allowList = ['share', 'getAuthorize', 'openSetting']
      }
      if (opentype) {
        if (allowList.indexOf(opentype) !== -1) {
          return opentype
        } else {
          utils.warn(`小程序open-type值不支持${opentype}`, {
            apiName: `button/open-type/${opentype}`,
            errorType: 0,
            type: 'component',
          })
        }
      }
      return ''
    },
    getScope(opentype) {
      const scopeMap = {
        getPhoneNumber: 'phoneNumber',
        getUserInfo: 'userInfo',
      }
      return scopeMap[opentype] || ''
    },
    onError(err) {
      if (this.props.onError === 'function') {
        this.props.onError(err)
      }
    },
    getAuthorize() {
      const that = this
      const resObj = {}
      if (
        this.data.opentype === 'getAuthorize'
        && this.data.scope === 'phoneNumber'
      ) {
        my.getPhoneNumber({
          success: (res) => {
            if (typeof that.props.onGetPhoneNumber === 'function') {
              resObj.detail = res
              resObj.type = 'getphonenumber'
              that.props.onGetPhoneNumber(resObj)
            }
          },
          fail: (res) => {
            if (typeof that.props.onGetPhoneNumber === 'function') {
              resObj.detail = res
              resObj.type = 'getphonenumber'
              that.props.onGetPhoneNumber(resObj)
            }
          },
        })
      }
      if (
        this.data.opentype === 'getAuthorize'
        && this.data.scope === 'userInfo'
      ) {
        my.getOpenUserInfo({
          success: (res) => {
            if (typeof that.props.onGetUserInfo === 'function') {
              const _res = JSON.parse(res.response).response
              _res.gender && _res.gender === 'm'
                ? (_res.gender = 1)
                : (_res.gender = 2)
              _res.avatarUrl = _res.avatar
              delete _res.avatar
              resObj.detail = {}
              resObj.detail.userInfo = _res
              resObj.type = 'getuserinfo'
              that.props.onGetUserInfo(resObj)
            }
          },
          fail: (res) => {
            if (typeof that.props.onGetUserInfo === 'function') {
              resObj.detail = res
              resObj.type = 'getuserinfo'
              that.props.onGetUserInfo(resObj)
            }
          },
        })
      }
    },
    stopEvent() {},
    btnOnTap(e) {
      const that = this
      const tapEvent = processDataSet(e, this.props)

      if (this.props.openType === 'openSetting') {
        my.openSetting({
          success(res) {
            if (typeof that.props.onOpenSetting === 'function') {
              that.props.onOpenSetting({
                ...tapEvent,
                type: 'opensetting',
                detail: {
                  authSetting: utils.mapAuthSetting(res.authSetting),
                },
              })
            }
          },
        })
      }

      this.props.catchTap && this.props.catchTap(tapEvent)
      this.props.onTap && this.props.onTap(tapEvent)
    },
    getPhone(e) {
      const eve = { ...e }
      my.getPhoneNumber({
        success: (res) => {
          if (typeof res.response === 'string') {
            const response = JSON.parse(res.response)
            if (response.response.code === '40001') {
              utils.warn('请去小程序开发管理后台的功能列表中添加获取电话功能', {
                apiName: 'button/bindgetphonenumber',
                errorType: 1,
                type: 'component',
              })
            }
            return false
          }
          eve.detail = res.response
          if (typeof this.props.onGetPhoneNumber === 'function') {
            this.props.onGetPhoneNumber(eve)
          }
        },
        fail(err) {
          throw err
        },
      })
    },
    getUserInfo(e) {
      const that = this
      // 获取用户信息
      const eve = { ...e }
      my.getAuthCode({
        scopes: 'auth_user',
        success: () => {
          my.getOpenUserInfo({
            success: (userInfo) => {
              eve.detail = {
                userInfo: {},
                rawData: '',
              }
              if (typeof userInfo.response === 'string') {
                const response = JSON.parse(userInfo.response)
                if (response.response.code === '40006') {
                  utils.warn(
                    '请去小程序开发管理后台的功能列表中添加会员信息功能',
                    {
                      apiName: 'button/bindgetuserinfo',
                      errorType: 1,
                      type: 'component',
                    },
                  )
                }
                return false
              }
              eve.detail.userInfo = { ...userInfo.response }
              eve.detail.userInfo.avatarUrl = eve.detail.userInfo.avatar
              delete eve.detail.userInfo.avatar
              eve.detail.rawData = JSON.stringify(eve.detail.userInfo)

              if (typeof that.props.onGetUserInfo === 'function') {
                that.props.onGetUserInfo(eve)
              }
            },
            fail(err) {
              throw err
            },
          })
        },
      })
    },

  },
})
