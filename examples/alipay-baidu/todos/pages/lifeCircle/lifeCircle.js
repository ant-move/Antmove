Page({
    data: {
        test: "test",

    },
    onLoad(query) {
    // 页面加载
    my.alert({
        title: this.data.test
    });
    console.log(query)
  },
  onShow() {
    // 页面显示
     my.alert({
        title: 'onShow'
    })
  },
  onReady() {
    // 页面加载完成
    my.alert({
        title: 'onReady'
    })
  },
  onHide() {
    // 页面隐藏
     my.alert({
        title: 'onHide'
    })
  },
  onUnload() {
    // 页面被关闭
    console.log("onUnload");
  },
  onTitleClick() {
    // 标题被点击
     my.alert({
        title: 'onTitleClick'
    })
  },
  onPullDownRefresh() {
    // 页面被下拉
     my.alert({
        title: 'onPullDownRefresh'
    })
  },
  onReachBottom() {
    // 页面被拉到底部
    my.alert({
        title: 'onReachBottom'
    })
  },
  onShareAppMessage() {
   // 返回自定义分享信息
  },
  // 事件处理函数对象
  events: {
    onBack() {
      console.log('onBack');
    },
  },
  // 自定义事件处理函数
  viewTap() {
    this.setData({
      text: 'Set data for update.',
    });
  },
  // 自定义事件处理函数
  go() {
    // 带参数的跳转，从 page/ui/index 的 onLoad 函数的 query 中读取 type
    my.navigateTo({url:'/page/ui/index?type=mini'});
  },
});
