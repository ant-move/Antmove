Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
    footerImg: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
  },
  onCardClick: function(ev) {
    my.showToast({
      content: ev.info,
    });
  }
});