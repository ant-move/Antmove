Page({
  data: {
    title: '等待中',
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
