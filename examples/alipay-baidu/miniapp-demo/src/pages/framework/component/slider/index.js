const pageData = {}

for (let i = 1; i < 5; ++i) {
  (function (index) {
    pageData[`slider${index}change`] = function (e) {
      console.log(`slider${index}发生change事件，携带值为`, e.detail.value)
    }
  })(i)
}
const pageDatas = Object.assign({}, pageData, {
  changing() {
    console.log('changing')
  },
})
Page(pageDatas)
