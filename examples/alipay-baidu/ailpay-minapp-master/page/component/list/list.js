
const newitems = [
  {
    thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
    title: '固定到头部',
    arrow: true,
    sticky: true,
  },
  {
    title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
  {
    title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
    arrow: true,
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '没有箭头',
    textMode: 'wrap',
  },
  {
    title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
    extra: '子元素垂直对齐',
    textMode: 'wrap',
    align: 'top',
  },
];
Page({
  data: {
    items: [
      {
        title: '单行列表',
        extra: '详细信息',
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: true,
      },
      {
        title: '多行列表',
        arrow: 'up',
      },
      {
        title: '多行列表',
        arrow: 'down',
      },
      {
        title: '多行列表',
        arrow: 'empty',
      },
      {
        title: '多行列表',
      },
    ],
    items3: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
    items4: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
    itemsThumb: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        extra: '描述文字',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        arrow: true,
      },
    ],
    itemsThumbMultiple: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        brief: '描述信息',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
      },
    ],
    items5: [
      {
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
        title: '固定到头部',
        brief: '描述信息',
        arrow: true,
        sticky: true,
      },
      {
        title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
        align: 'middle',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
        align: 'top',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        align: 'bottom',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'middle',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: `点击了第${ev.index}行`,
    });
  },
  onScrollToLower() {
    const { items5 } = this.data;
    const newItems = items5.concat(newitems);
    console.log(newItems.length);
    this.setData({
      items5: newItems,
    });
  },
});
