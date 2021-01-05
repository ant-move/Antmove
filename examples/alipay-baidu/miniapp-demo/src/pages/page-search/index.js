import { API_LIST } from '../../js/API'
import { COMPONENT_LIST } from '../../js/COMPONENT'
import HOT_WORDS from '../../js/HOT_WORDS'

Page({
  data: {
    value: '',
    history: my.getStorageSync({ key: 'searchHistory' }).data || [],
    hot: HOT_WORDS,
    componentSuggestions: [],
    apiSuggestions: [],
  },
  onLoad() {
    this.setData({
      history: my.getStorageSync({ key: 'searchHistory' }).data,
    })
    console.log(my.getStorageSync({ key: 'searchHistory' }).data)
    my.setNavigationBar({
      borderBottomColor: '#fff',
    })
  },
  clear() {
    my.confirm({
      content: '确定删除相关历史？',
      success: (res) => {
        if (res.confirm) {
          my.clearStorage()
          this.setData({
            history: [],
          })
        }
      },
    })
  },
  onInput(keyword) {
    this.setData({
      value: keyword,
    })
    const regExp = /[A-Za-z]/
    if (keyword === '' || (regExp.test(keyword) && keyword.length === 1)) {
      this.setData({
        componentSuggestions: [],
        apiSuggestions: [],
      })
      return
    }
    const componentSuggestions = []
    const apiSuggestions = []
    for (let i = 0; i < COMPONENT_LIST.length; i++) {
      if (
        COMPONENT_LIST[i].title.indexOf(keyword) !== -1 ||
        COMPONENT_LIST[i].titleEn
          .toLocaleLowerCase()
          .indexOf(keyword.toLocaleLowerCase()) !== -1
      ) {
        componentSuggestions.push(COMPONENT_LIST[i])
      }
    }

    for (let i = 0; i < API_LIST.length; i++) {
      if (
        API_LIST[i].title.indexOf(keyword) !== -1 ||
        API_LIST[i].titleEn
          .toLocaleLowerCase()
          .indexOf(keyword.toLocaleLowerCase()) !== -1
      ) {
        apiSuggestions.push(API_LIST[i])
      }
    }
    this.setData({ componentSuggestions, apiSuggestions })
  },
  onClear() {
    this.setData({
      value: '',
    })
  },
  onCancel() {
    this.setData({
      componentSuggestions: [],
      apiSuggestions: [],
      value: '',
    })
    my.navigateBack()
  },
  onItemTap({ title }) {
    this.setData({
      value: title,
    })

    this.onInput(title)
  },
  onListItemTap(e) {
    const { title, url } = e.target.dataset
    this.addToHistory(title)
    my.navigateTo({ url })
  },
  addToHistory(keyword) {
    const searchHistory = my.getStorageSync({ key: 'searchHistory' }).data || []
    let index = -1

    for (let i = 0; i < searchHistory.length; i++) {
      if (searchHistory[i].title === keyword) {
        index = i
        break
      }
    }

    let history = []

    if (searchHistory.length >= 8) {
      if (index === -1) {
        history = [{ title: keyword }, ...searchHistory.slice(0, 7)]
      } else {
        searchHistory.splice(index, 1).slice(0, 7)
        history = [{ title: keyword }, ...searchHistory]
      }
    } else {
      if (index === -1) {
        history = [{ title: keyword }, ...searchHistory]
      } else {
        searchHistory.splice(index, 1)
        history = [{ title: keyword }, ...searchHistory]
      }
    }

    my.setStorageSync({
      key: 'searchHistory',
      data: history,
    })

    this.setData({
      history,
    })
  },
})
