Page({
  data: {
    domInfo: ""
  },
  onLoad() {
  },
  SelectorQuery() {
    const query = wx.createSelectorQuery()
    query.select('#drawID').boundingClientRect()
    query.exec(function (res) {
      console.log(res)
    })

  },
  Intersection() {
    
    this._observer = wx.createIntersectionObserver(this)
    this._observer
      .relativeTo('.scroll-view')
      .observe('.next_box', (res) => {
        console.log(res);
        
      })
  }
});
