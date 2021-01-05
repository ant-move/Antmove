Page({
  data: {
    swipeIndex: null,
    right1: [{ type: 'delete', text: '删除' }],
    right2: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }],
  },
  onRightItemClick(e) {
    my.confirm({
      title: '温馨提示',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        if (result.confirm) {
          my.showToast({
            content: '确定 => 执行滑动删除还原',
          });
          e.done();
        } else {
          my.showToast({
            content: '取消 => 滑动删除状态保持不变',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index || null,
    });
  },
});