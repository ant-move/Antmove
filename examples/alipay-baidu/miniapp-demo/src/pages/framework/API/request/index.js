Page({
  requestHttp() {
    my.httpRequest({
      url: 'http://httpbin.org/post',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      timeout: 3000,
      data: {
        from: '高德',
        production: 'AlipayJSAPI',
      },
      dataType: 'json',
      success(res) {
        my.alert({ content: JSON.stringify(res) })
      },
      fail(res) {
        my.alert({ content: JSON.stringify(res) })
      },
      complete() {
        console.log('httpRequest/complete')
      },
    })
  },
  request() {
    my.request({
      url: 'http://httpbin.org/post',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      timeout: 3000,
      data: {
        from: '高德',
        production: 'AlipayJSAPI',
      },
      dataType: 'json',
      success(res) {
        my.alert({ content: JSON.stringify(res) })
      },
      fail(res) {
        my.alert({ content: JSON.stringify(res) })
      },
      complete() {
        console.log('request/complete')
      },
    })
  },
})
