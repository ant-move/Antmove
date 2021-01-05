import example from './example.js'

let imageData
Page({
  onLoad() {
    this.context = my.createCanvasContext('canvas')
    const methods = Object.keys(example)
    const newMethos = this.formatArray(methods)
    this.setData({
      methods: newMethos,
    })
    methods.forEach((method) => {
      this[method] = () => {
        example[method](this.context)
        this.context.draw()
      }
    })
  },
  log(e) {
    console.log('canvas', e)
  },
  toTempFilePath() {
    this.context.toTempFilePath({
      x: 20,
      y: 20,
      width: 50,
      height: 50,
      destWidth: 50,
      destHeight: 50,
      fileType: 'jpg',
      quality: 0.5,
      success(res) {
        my.previewImage({
          urls: [res.apFilePath],
        })
      },
      fail(res) {
        my.alert({
          title: 'toTempFilePath',
          content: `error: ${res.error}`,
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
  getImageData() {
    this.context.setFillStyle('red')
    this.context.fillRect(10, 10, 150, 100)
    this.context.draw(false, () => {
      this.context.getImageData({
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        fail: error => {
          console.log(error)
        },
        success: (res) => {
          console.log(res.width) // 100
          console.log(res.height) // 100
          console.log(res.data instanceof Uint8ClampedArray) // true
          console.log(res.data.length) // 100 * 100 * 4
          imageData = res.data
        },
      })
    })
  },
  putImageData() {
    this.context.clearRect(0, 0, 100, 100)
    this.context.draw(true, () => {
      setTimeout(() => {
        this.context.putImageData({
          x: 0,
          y: 0,
          width: 100,
          data: imageData,
          fail: error => {
            console.log(error)
          },
          success(xx) {
            console.log('canvasPutImageData', xx)
          },
        })
      }, 2000)
    })
  },
  formatArray(arr) {
    const len = arr.length
    const n = 3
    const lineNum = len % n === 0 ? len / n : Math.floor((len / n) + 1)
    const res = []
    for (let i = 0; i < lineNum; i++) {
      const temp = arr.slice(i * n, i * n + n)
      res.push(temp)
    }
    return res
  },
})
