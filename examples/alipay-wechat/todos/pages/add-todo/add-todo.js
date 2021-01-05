const app = getApp();

Page({
  data: {
    inputValue: '',
  },

  onInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  add(val) {
    app.todos = app.todos.concat([
      {
        text: this.data.inputValue,
        compeleted: false,
      },
    ]);
    console.log(val)
    my.navigateBack();
  },
});
