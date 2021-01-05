Page({
  data: {
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
    footerImg: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
  },
  onCardClick(ev) {
    my.showToast({
      content: ev.info,
    });
  },
});
