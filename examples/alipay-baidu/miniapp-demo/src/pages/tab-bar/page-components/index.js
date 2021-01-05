import COMPONENT from '../../../js/COMPONENT'
import HOT_WORDS from '../../../js/HOT_WORDS'

console.log(HOT_WORDS)

Page({
  data: {
    hot: HOT_WORDS,
    tabs: COMPONENT.tabs,
    activeTab: 0,
    titleOpacity: 1,
  },
  onPageScroll(e) {
    const { scrollTop } = e
    let titleOpacity = 1 - scrollTop * 0.02

    if (titleOpacity < 0) {
      titleOpacity = 0
    }

    if (titleOpacity > 1) {
      titleOpacity = 1
    }

    if (scrollTop > 80) {
      my.setNavigationBar({
        title: '组件',
      })
    } else {
      my.setNavigationBar({
        title: ' ',
      })
    }

    this.setData({
      titleOpacity,
    })
  },
  handleTabChange(e) {
    const { index } = e
    if (index !== this.data.activeTab) {
      this.setData({
        activeTab: index,
      })
    }
    console.log('tab被点击了')
  },
})
