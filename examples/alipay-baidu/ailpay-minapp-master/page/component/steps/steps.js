Page({
  data: {
    activeIndex: 1,
    failIndex: 0,
    items: [{
      title: '步骤1',
    }, {
      title: '步骤2',
    }, {
      title: '步骤3',
    }],
    items2: [{
      title: '步骤1',
      description: '这是步骤1的描述文档，文字足够多的时候会换行',
    }, {
      title: '步骤2 如果标题足够长的话也会换行的',
      description: '这是步骤2',
    }, {
      title: '步骤3',
      description: '这是步骤3',
    }, {
      title: '步骤4',
      description: '不超过六个字',
    }],
  },
  nextStep() {
    this.setData({
      activeIndex: this.data.activeIndex + 1,
    });
  },
  preStep() {
    this.setData({
      activeIndex: this.data.activeIndex - 1,
    });
  },
  setFailIndex() {
    this.setData({
      failIndex: 3,
    });
  },
  cancelFailIndex() {
    this.setData({
      failIndex: 0,
    });
  },
});