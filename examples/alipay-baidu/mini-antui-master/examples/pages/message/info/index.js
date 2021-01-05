Page({
  data: {
    title: '提示信息',
    messageButton: {
      mainButton: {
        buttonText: '返回首页',
      },
      subButton: {
        buttonText: 'DO NOTHING',
      },
    },
  },
  goBack() {
    my.navigateBack();
  },
});
