const babelPlugins = require('../src/babel/index.js');

function testCode (testName, code01, code02) {
    test(testName || 'testing: ', () => {
        expect(code01).toBe(code02);
    });
}

testCode(
    'replaceCalleeHandleFn tseting:',
    babelPlugins.replaceCalleeHandleFn(`App({
      getUserOpenId(callback){
      const self = this
        wx.login({
          success(data) {
            wx.request({
              url: config.openIdUrl,
              data: {
                code: data.code
              },
              success(res) {
                console.log('拉取openid成功', res)
                self.globalData.openid = res.data.openid
                callback(null, self.globalData.openid)
              },
              fail(res) {
                console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
                callback(res)
              }
            })
          },
          fail(err) {
            console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
            callback(err)
          }
        })
      }
  })`, 'wx', '_my', {}, function() {
          console.log('yes');
      }),
    `App({
  getUserOpenId(callback) {
    const self = this;

    _my.login({
      success(data) {
        _my.request({
          url: config.openIdUrl,
          data: {
            code: data.code
          },

          success(res) {
            console.log('拉取openid成功', res);
            self.globalData.openid = res.data.openid;
            callback(null, self.globalData.openid);
          },

          fail(res) {
            console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res);
            callback(res);
          }

        });
      },

      fail(err) {
        console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err);
        callback(err);
      }

    });
  }

});`
);
