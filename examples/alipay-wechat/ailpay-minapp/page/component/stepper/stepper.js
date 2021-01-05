Page({
  data: {
    value: 8,
  },
  callBackFn(value){
   console.log(value);
  },
  modifyValue() {
    this.setData({
      value: this.data.value + 1,
    });
  }
});