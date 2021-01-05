Page({
  data: {
    showRectangle: true,
    showDialog: true,
  },
  onCloseTap() {
    this.setData({
      showRectangle: false,
    });
  },
  onRectangleTap() {
    my.alert({
      content: 'do something',
    });
  },
  onDialogTap() {
    this.setData({
      showDialog: false,
    });
  },
});
