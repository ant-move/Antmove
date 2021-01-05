import API from '../../../js/API'

Page({
  data: {
    APIs: API.categories,
  },
  onSearchBarTap() {
    my.navigateTo({
      url: '/page/common/search/search',
    })
  },
})
