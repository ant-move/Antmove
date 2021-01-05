Page({
  data: {
    title: '警告',
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
