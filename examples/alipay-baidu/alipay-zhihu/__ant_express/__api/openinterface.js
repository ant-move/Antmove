/**
 * type:0 missing
 * type:1 diff
 *
 */
const utils = require('./utils');
const apiObj = {
    getUserInfo: {
        fn (obj) {
            if (obj.withCredentials || obj.lang) {
                console.warn('getAuthUserInfo not support withCredentials or lang params.');
            }

            my.getAuthCode({
                scopes: 'auth_user',
                success: () => {
                    my.getAuthUserInfo({
                        ...obj,
                        success (res) {
                            let _res = utils.defineGetter(res, apiObj.getUserInfo.body.successRes, function (obj, prop) {
                                console.warn(`getUserInfo's params value is not support ${prop} attribute!`);
                            });
                            res.userInfo = _res;
                            _res.userInfo.avatarUrl = _res.avatar;
                            obj.success && obj.success(_res);
                        }
                    });
                }
            });
        },     
        body: {
            type: 1,
            desc: 'getAuthUserInfo',
            successRes: {
                gender: {
                    type: 0
                },
                province: {
                    type: 0
                },
                city: {
                    type: 0
                },
                country: {
                    type: 0
                },
                language: {
                    type: 0
                }
            }
        },
    },
    reportAnalytics: {
        fn (key, value) {
            if (typeof value !== "object") {
                value={
                    data: value
                };
        }
        return my.reportAnalytics(key,value);
        },
        body: {
            params: {
                    key: {
                        type: 1,
                        desc: 'key对应eventName'
                    },
                    value: {
                        type: 1,
                        desc: 'any类型对应object'
                    }
              }
            }
        },
        requestPayment: {
            fn (obj = {}) {
                let params = utils.defineGetter(obj, apiObj.requestPayment.body.params, function (obj,prop) {
                    console.warn(`requestPayment's params value is not support ${prop} attribute!`);
                });
                return my.tradePay(params);
            },
            body: {
                params: {
                        timeStamp: {
                            type: 0,
                            desc: 'missing'
                        },
                        nonceStr: {
                            type: 0,
                            desc: 'missing'
                        },
                        package: {
                            type: 0,
                            desc: 'missing'
                        },
                        signType: {
                            type: 0,
                            desc: 'missing'
                        },
                        paySign: {
                            type: 0,
                            desc: 'missing'
                        }
                    }
                }
            },
        authorize: {
            fn (obj={}) {
                    if (obj.scope) {
                        delete obj.scope;
                        obj.scopes='auth_user';
                    }
                    let params = utils.defineGetter(obj, apiObj.authorize.body.params, function (obj,prop) {
                         console.warn(`authorize's params value is not support ${prop} attribute!`);
                     });
                    return my.getAuthCode(params);
                },
                body: {
                    params: {
                        scope: {
                            type: 1,
                            desc: 'scope对应scopes'
                        }
                    }
                }
            },
            openCard: {
                fn (obj) {
                    let params = utils.defineGetter(obj, apiObj.openCard.body.params, function (obj,prop) {
                         console.warn(`openCard's params value is not support ${prop} attribute!`);
                    }); 
                    return my.openCardList(params);
                },
                body: {
                    params: {
                        cardList: {
                            type: 0,
                            desc: 'missing'
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
            },
            addCard: {
                fn (obj) {
                    let params = utils.defineGetter(obj, apiObj.addCard.body.params, function (obj,prop) {
                        console.warn(`addCard's params value is not support ${prop} attribute!`);
                   }); 
                   return my.addCardAuth(params);
                },
                body: {
                    params: {
                        cardList: {
                            type: 0,
                            desc: 'missing'
                        }
                    }
                }
            },
            startSoterAuthentication: {
                fn (obj) {
                    let params = utils.defineGetter(obj, apiObj.startSoterAuthentication.body.params, function (obj,prop) {
                        console.warn(`startSoterAuthentication's params value is not support ${prop} attribute!`);
                   }); 
                    return my.ap.faceVerify(params);
                },
                body: {
                    params: {
                        requestAuthModes: {
                            type: 0,
                            desc: 'missing'
                        },
                        challenge: {
                            type: 0,
                            desc: 'missing'
                        },
                        authContent: {
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
            // 废弃
            _getSettings: {
                fn (obj={}) {
                    /**
                     * scope=[userInfo, location, album, camera, audioRecord]
                     */
                    my.getLocation ({
                        success (res) {
                            console.log('getLocation success.', res);
                        },
                        fail (err) {
                            console.log('getLocation failed. ', err);
                        }
                    });

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
                            res.authSetting['scope.address'] = true;
                            cb && cb();
                          }
                        });
                      }
                  if (my.getSetting) {
                    my.getSetting({
                      ...obj,
                      success (res) {
                        res.authSetting['scope.address'] = res.authSetting.location;
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
