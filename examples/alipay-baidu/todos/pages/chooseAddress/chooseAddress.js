Page({
  data: {},
  onLoad() {
      // 1.获取用户收货地址的授权 authCode
  my.getAuthCode({
      scopes: ['user_address'],
      success: (res) => {
        my.alert({
          title: 'address', // alert 框的标题
          content: JSON.stringify(res),
        });

        //  2. 用authCode 传给服务端去获取授权 token，授权成功后可以调用jsapi唤起选择地址界面
        // .......

    // 3. 唤起用户选择收货地址页面
        my.chooseAddress({
          success: (res) => {
            my.alert({
              title: 'ok', // alert 框的标题
              content: JSON.stringify(res),
            });
      // 这里可以拿到 addressId
      // 4. 将 addressId 传给服务端，服务端再调用openapi 获取真实的收货地址
      
          },
          fail: (res) => {
            my.alert({
              title: 'fail', // alert 框的标题
              content: JSON.stringify(res),
            });
          },
        });
      },
      fail: (res) => {
        my.alert({
          title: 'a fail', // alert 框的标题
          content: JSON.stringify(res),
        });
      },
    });
  },
});
