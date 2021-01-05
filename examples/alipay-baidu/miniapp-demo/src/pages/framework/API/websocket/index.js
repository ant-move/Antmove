Page({
  data: {},
  onLoad() {
    my.onSocketClose((res) => {
      console.log(res)
      my.alert({ content: '连接已关闭！' })
    })
    my.onSocketOpen((res) => {
      console.log(res)
      my.alert({ content: '连接已打开！' })
    })
    my.onSocketError((res) => {
      my.alert(`WebSocket 连接打开失败，请检查！${res}`)
    })
    my.onSocketMessage((res) => {
      my.alert({ content: `收到数据！${JSON.stringify(res)}` })
    })
  },
  connectSocket() {
    my.connectSocket({
      url: 'wss://echo.websocket.org',
      complete(res) {
        console.log(res)
      },
    })
  },
  sendSocketMessage() {
    my.sendSocketMessage({
      data: '3',
    })
  },
  closeSocket() {
    my.closeSocket({
      complete(res) {
        console.log(res)
      },
    })
  },
  offSocketClose() {
    my.offSocketClose()
  },
  offSocketOpen() {
    my.offSocketOpen()
  },
  offSocketError() {
    my.offSocketError()
  },
  offSocketMessage() {
    my.offSocketMessage()
  },
})
