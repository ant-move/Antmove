Page({
  data: {},
  onLoad() { },
  multiLevelSelect() {
    my.multiLevelSelect({
      title: 'nihao',
      list: [
        {
          name: '杭州市',
          subList: [
            {
              name: '西湖区',
              subList: [
                {
                  name: '古翠街道',
                },
                {
                  name: '文新街道',
                },
              ],
            },
            {
              name: '上城区',
              subList: [
                {
                  name: '延安街道',
                },
                {
                  name: '龙翔桥街道',
                },
              ],
            },
          ],
        },
      ],
      success(res) {
        my.alert({
          content: `您当前的选择为${JSON.stringify(res)}`,
        })
      },
      fail(err) {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
})
