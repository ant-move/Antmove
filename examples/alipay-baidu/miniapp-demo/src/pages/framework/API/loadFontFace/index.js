Page({
  data: {},
  onLoad() { },
  loadFontFace() {
    my.loadFontFace({
      family: 'Bitstream Vera Serif Bold',
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success() {
        my.alert({
          title: 'loadfontface 成功!!!',
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
})
