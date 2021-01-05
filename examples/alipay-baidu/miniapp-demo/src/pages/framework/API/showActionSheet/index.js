Page({
  data: {},
  onLoad() { },
  showActionSheet() {
    my.showActionSheet({
      title: 'ActionSheet',
      items: ['菜单一', '菜单二', '菜单三', '菜单四', '菜单五'],
      badges: [
        { index: 0, type: 'none' },
        { index: 1, type: 'point' },
        { index: 2, type: 'num', text: '99' },
        { index: 3, type: 'text', text: '推荐' },
        { index: 4, type: 'more' }],
      cancelButtonText: '取消好了',
      destructiveBtnIndex: 2,
      success: (res) => {
        const btn = res.index === -1 ? '取消' : `第${res.index}个`
        my.alert({
          title: `你点了${btn}按钮`,
        })
      },
    })
  },
})
