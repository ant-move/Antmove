Page({
  data: {
    swipeIndex: null,
    list: [
      { right: [{ type: 'delete', text: '删除' }], content: 'AAA' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '2BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '3BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '4BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '5BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '6BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '7BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '8BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '9BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '10BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '11BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '12BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '13BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '14BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '15BBB' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: '16BBB' },
      { right: [{ type: 'delete', text: '删除' }], content: 'CCC' },
    ],
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: '温馨提示',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            list.splice(this.data.swipeIndex, 1);
            this.setData({
              list: [...list],
            });
          }

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
      swipeIndex: e.index,
    });
  },
});
