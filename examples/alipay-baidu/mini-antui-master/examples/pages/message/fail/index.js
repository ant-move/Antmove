Page({
  data: {
    title: '无法完成操作',
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
  doNothing() {
    my.alert({
      title: 'do nothing',
    });
  },
});
