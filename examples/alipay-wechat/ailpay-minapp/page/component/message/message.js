Page({
  data: {
    title: "操作成功",
    subTitle: "内容详情可折行，建议不超过两行",
    messageButton: {
      mainButton: {
        buttonText: "主要操作"
      },
      subButton: {
        buttonText: "辅助操作"
      }
    }
  },
  goBack() {
    my.navigateBack();
  }
});