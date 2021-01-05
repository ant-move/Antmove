Page({
  data: {},
  onLoad() { },
  setTransparentTitle() {
    my.setTransparentTitle({
      transparentTitle: 'auto',
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
      },
    })
  },
})
