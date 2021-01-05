const example = {}

example.rotate = function (context) {
  context.save()
  context.beginPath()
  context.rotate(10 * Math.PI / 180)
  context.rect(225, 75, 20, 10)
  context.setFillStyle('#108ee9')
  context.fill()
  context.restore()
}

example.scale = function (context) {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.rect(25, 25, 50, 50)
  context.stroke()

  context.scale(2, 2)

  context.beginPath()
  context.rect(25, 25, 50, 50)
  context.stroke()
  context.restore()
}

example.reset = function (context) {
  context.save()
  context.beginPath()

  context.setFillStyle('#108ee9')
  context.setStrokeStyle('#108ee9')
  context.setFontSize(10)

  context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)')

  context.setLineCap('butt')
  context.setLineJoin('miter')
  context.setLineWidth(1)
  context.setMiterLimit(10)
  context.restore()
}

example.translate = function (context) {
  context.save()
  context.beginPath()
  context.setFillStyle('#108ee9')
  context.rect(10, 10, 100, 50)
  context.fill()

  context.translate(70, 70)

  context.beginPath()
  context.fill()
  context.restore()
}

example.save = function (context) {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.save()

  context.scale(2, 2)
  context.setStrokeStyle('#108ee9')
  context.rect(0, 0, 100, 100)
  context.stroke()
  context.restore()

  context.rect(0, 0, 50, 50)
  context.stroke()
  context.restore()
}

example.restore = function (context) {
  context.save()
  const numArr = [3, 2, 1]
  numArr.forEach((item) => {
    context.beginPath()
    context.setStrokeStyle('#108ee9')
    context.save()
    context.scale(item, item)
    context.rect(10, 10, 100, 100)
    context.stroke()
    context.restore()
  })
  context.restore()
}

example.drawImage = (context) => {
  context.save()
  context.drawImage('/image/icon_API.png', 0, 0)
  context.restore()
}

example.fillText = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(0, 10)
  context.lineTo(300, 10)
  context.stroke()

  // context.save()
  // context.scale(1.5, 1.5)
  // context.translate(20, 20)
  context.setFontSize(10)
  context.fillText('Hello Alipay', 0, 30)
  context.setFontSize(20)
  context.fillText('Hello Alipay', 200, 30)

  // context.restore()

  context.beginPath()
  context.moveTo(0, 30)
  context.lineTo(300, 30)
  context.stroke()
  context.restore()
}

example.fill = (context) => {
  context.save()
  context.beginPath()
  context.setFillStyle('#108ee9')
  context.rect(20, 20, 150, 100)
  context.fill()
  context.restore()
}

example.stroke = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(20, 20)
  context.lineTo(20, 100)
  context.lineTo(70, 100)

  context.stroke()
  context.restore()
}

example.clearRect = (context) => {
  context.save()
  context.beginPath()
  context.setFillStyle('#108ee9')
  context.rect(0, 0, 300, 150)
  context.fill()
  context.clearRect(20, 20, 100, 50)
  context.restore()
}

example.beginPath = (context) => {
  context.save()
  context.beginPath()
  context.setLineWidth(5)
  context.setStrokeStyle('#108ee9')
  context.moveTo(0, 75)
  context.lineTo(250, 75)
  context.stroke()

  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(50, 0)
  context.lineTo(150, 130)
  context.stroke()
  context.restore()
}

example.closePath = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(20, 20)
  context.lineTo(20, 100)
  context.lineTo(70, 100)
  context.closePath()
  context.stroke()
  context.restore()
}

example.moveTo = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(0, 0)
  context.lineTo(300, 150)
  context.stroke()
  context.restore()
}

example.lineTo = context => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(20, 20)
  context.lineTo(20, 100)
  context.lineTo(70, 100)
  context.stroke()
  context.restore()
}

example.rect = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.rect(20, 20, 150, 100)
  context.stroke()
  context.restore()
}

example.arc = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.arc(75, 75, 50, 0, Math.PI * 2, true)
  context.moveTo(110, 75)
  context.arc(75, 75, 35, 0, Math.PI, false)
  context.moveTo(65, 65)
  context.arc(60, 65, 5, 0, Math.PI * 2, true)
  context.moveTo(95, 65)
  context.arc(90, 65, 5, 0, Math.PI * 2, true)
  context.stroke()
  context.restore()
}

example.quadraticCurveTo = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(20, 20)
  context.quadraticCurveTo(20, 100, 200, 20)
  context.stroke()
  context.restore()
}

example.bezierCurveTo = (context) => {
  context.save()
  context.beginPath()
  context.setStrokeStyle('#108ee9')
  context.moveTo(20, 20)
  context.bezierCurveTo(20, 100, 200, 100, 200, 20)
  context.stroke()
  context.restore()
}

example.setFillStyle = (context) => {
  context.save()
  const fillColors = ['rgb(183, 218, 243)', 'rgb(39, 156, 240)', 'rgb(67, 168, 240)', 'rgb(119, 194, 247)']
  fillColors.forEach((item, index) => {
    context.setFillStyle(item)
    context.beginPath()
    context.rect(0 + 75 * index, 0, 50, 50)
    context.fill()
  })
  context.restore()
}

example.gradient = (ctx) => {
  ctx.save()
  const grd = ctx.createCircularGradient(90, 60, 50)
  grd.addColorStop(0, 'blue')
  grd.addColorStop(1, 'red')
  ctx.setFillStyle(grd)
  ctx.fillRect(20, 20, 250, 180)
  ctx.restore()
}

example.createPattern = (ctx) => {
  ctx.save()
  const grd = ctx.createPattern('https://gw.alipayobjects.com/zos/rmsportal/CuyuyNQuuJvOYOsYvPYd.png', 'repeat')
  ctx.setFillStyle(grd)
  ctx.fillRect(20, 20, 250, 180)
  ctx.restore()
}

example.setStrokeStyle = (context) => {
  context.save()
  const strokeColors = ['rgb(183, 218, 243)', 'rgb(39, 156, 240)', 'rgb(67, 168, 240)', 'rgb(119, 194, 247)']
  strokeColors.forEach((item, index) => {
    context.setStrokeStyle(item)
    context.beginPath()
    context.rect(0 + 75 * index, 0, 50, 50)
    context.stroke()
  })
  context.restore()
}

example.setGlobalAlpha = (context) => {
  context.save()
  context.setFillStyle('#108ee9')
  const globalAlpha = [1, 0.5, 0.1]
  globalAlpha.forEach((item, index) => {
    context.setGlobalAlpha(item)
    context.beginPath()
    context.rect(0 + 75 * index, 0, 50, 50)
    context.fill()
  })
  context.restore()
}

example.setShadow = (context) => {
  context.save()
  context.beginPath()
  context.setFillStyle('#108ee9')
  context.setShadow(10, 10, 10, 'rgb(183, 218, 243)')
  context.rect(10, 10, 100, 100)
  context.fill()
  context.restore()
}

example.setFontSize = (context) => {
  context.save()
  const fontSizeArr = [10, 20, 30, 40]
  fontSizeArr.forEach((item, index) => {
    context.setFontSize(item)
    context.fillText('Hello, world', 20, 20 + 40 * index)
  })
  context.restore()
}

example.setLineCap = (context) => {
  context.save()
  context.setLineWidth(10)
  const lineColor = ['butt', 'round', 'square']
  lineColor.forEach((item, index) => {
    context.beginPath()
    context.setStrokeStyle('#108ee9')
    context.setLineCap(item)
    context.moveTo(20, 20 + 20 * index)
    context.lineTo(100, 20 + 20 * index)
    context.stroke()
  })
  context.restore()
}

example.setLineJoin = (context) => {
  context.save()
  context.setLineWidth(10)
  const LineJoins = ['bevel', 'round', 'miter']
  LineJoins.forEach((item, index) => {
    context.beginPath()
    context.setStrokeStyle('#108ee9')
    context.setLineJoin(item)
    context.moveTo(20 + 80 * index, 20)
    context.lineTo(100 + 80 * index, 50)
    context.lineTo(20 + 80 * index, 100)
    context.stroke()
  })
  context.restore()
}

example.setLineWidth = (context) => {
  context.save()
  const lineWidthArr = [2, 4, 6, 8, 10]
  lineWidthArr.forEach((item, index) => {
    context.beginPath()
    context.setStrokeStyle('#108ee9')
    context.setLineWidth(item)
    context.moveTo(20, 20 + 20 * index)
    context.lineTo(100, 20 + 20 * index)
    context.stroke()
  })
  context.restore()
}

example.setMiterLimit = (context) => {
  context.save()
  context.setLineWidth(4)
  const miterLimitArr = [2, 4, 6, 8, 10]
  miterLimitArr.forEach((item, index) => {
    context.beginPath()
    context.setStrokeStyle('#108ee9')
    context.setMiterLimit(item)
    context.moveTo(20 + 80 * index, 20)
    context.lineTo(100 + 80 * index, 50)
    context.lineTo(20 + 80 * index, 100)
    context.stroke()
  })
  context.restore()
}

example.measureText = (context) => {
  context.save()
  context.font = 'italic bold 50px cursive'
  const { width } = context.measureText('hello world')
  console.log(width)
  context.fillText('hello world', 20, 60)
  context.restore()
}

example.setLineDash = (context) => {
  context.save()

  context.setLineDash([10, 20], 5)
  context.beginPath()
  context.moveTo(0, 100)
  context.lineTo(400, 100)
  context.stroke()

  context.restore()
}

export default example
