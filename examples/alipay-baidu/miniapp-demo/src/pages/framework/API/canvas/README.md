# 画布

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563528774748.png)

# my.createCanvasContext(canvasId)
创建 canvas 绘图上下文
> 该绘图上下文只作用于对应 `canvasId` 的 `<canvas/>`

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| canvasId | String | 定义在 上的 id |

## toTempFilePath
把当前画布的内容导出生成图片，并返回文件路径。

#### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| x | Number | 否 | 画布 x 轴起点，默认为 0 | v8.90 |
| y | Number | 否 | 画布 y 轴起点，默认为 0 | v8.90 |
| width | Number | 否 | 画布宽度，默认为 canvas 宽度 - x | v8.90 |
| height | Number | 否 | 画布高度，默认为 canvas 高度 - y | v8.90 |
| destWidth | Number | 否 | 输出的图片宽度，默认为 width | v8.90 |
| destHeight | Number | 否 | 输出的图片高度，默认为 height | v8.90 |
| fileType | String | 否 | 目标文件的类型。合法值为jpg、png。 | v8.90 |
| quality | Number | 否 | 图片的质量，取值范围为 (0, 1]，不在范围内时当作 1.0 处理。 | v8.90 |
| success | Function | 否 | 接口成功回调 | v8.90 |
| fail | Function | 否 | 接口失败回调 | v8.90 |
| complete | Function | 否 | 接口完成回调 | v8.90 |

#### 示例代码
```
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.toTempFilePath({
  success() {},
});
```

## setTextAlign
textAlign 是 Canvas 2D API 描述绘制文本时，文本的对齐方式的属性。注意，该对齐是基于CanvasRenderingContext2D.fillText 方法的x的值。所以如果 textAlign="center"，那么该文本将画在 x-50%*width。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| textAlign | String | 枚举 "left" "right" "center" "start" "end" |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setTextAlign("left");
ctx.fillText("Hello world", 0, 100);
```

## setTextBaseline
textBaseline 是 Canvas 2D API 描述绘制文本时，当前文本基线的属性。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| textBaseline | String | 枚举 "top" "hanging" "middle" "alphabetic" "ideographic" "bottom" |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setTextBaseline("top");
ctx.fillText("Hello world", 0, 100);
```
## setFillStyle
设置填充色。
> 如果没有设置 `fillStyle`，则默认颜色为 `black`。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| color | Color | Gradient Object |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setFillStyle('blue');
ctx.fillRect(50, 50, 100, 175);
ctx.draw();
```
## setStrokeStyle
设置边框颜色。
> 如果没有设置 `strokeStyle`，则默认颜色为 `black`。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| color | Color | Gradient Object |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setStrokeStyle('blue');
ctx.strokeRect(50, 50, 100, 175);
ctx.draw();
```
## setShadow
设置阴影样式。
> 如果没有设置，`offsetX` 的默认值为 0， `offsetY` 的默认值为 0， `blur` 的默认值为 0，`color` 的默认值为 `black`。

### 入参
| 参数 | 类型 | 范围 | 定义 |
| :--- | :--- | :--- | :--- |
| offsetX | Number |  | 阴影相对于形状水平方向的偏移 |
| offsetY | Number |  | 阴影相对于形状竖直方向的偏移 |
| blur | Number | 0~100 | 阴影的模糊级别，值越大越模糊 |
| color | Color |  | 阴影颜色 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setFillStyle('red');
ctx.setShadow(15, 45, 45, 'yellow');
ctx.fillRect(20, 20, 100, 175);
ctx.draw();
```

## createLinearGradient
创建一个线性的渐变色。
> 需要使用 `addColorStop()` 来指定渐变点，至少需要两个。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| x0 | Number | 起点 x 坐标 |
| y0 | Number | 起点 y 坐标 |
| x1 | Number | 终点 x 坐标 |
| y1 | Number | 终点 y 坐标 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
const grd = ctx.createLinearGradient(10, 10, 150, 10);
grd.addColorStop(0, 'yellow');
grd.addColorStop(1, 'blue');
ctx.setFillStyle(grd);
ctx.fillRect(20, 20, 250, 180);
ctx.draw();
```

## createCircularGradient
创建一个圆形的渐变色。
> 起点在圆心，终点在圆环。
> 需要使用 `addColorStop()` 来指定渐变点，至少需要两个。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| x | Number | 圆心 x 坐标 |
| y | Number | 圆心 y 坐标 |
| r | Number | 圆半径 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
const grd = ctx.createCircularGradient(90, 60, 60);
grd.addColorStop(0, 'blue');
grd.addColorStop(1, 'red');
ctx.setFillStyle(grd);
ctx.fillRect(20, 20, 250, 180);
ctx.draw();
```

## addColorStop
创建一个颜色的渐变点。
> 小于最小 stop 的部分会按最小 stop 的 color 来渲染，大于最大 stop 的部分会按最大 stop 的 color 来渲染。
> 需要使用 `addColorStop()` 来指定渐变点，至少需要两个。

### 入参
| 参数 | 类型 | 定义 |
| :--- | :--- | :--- |
| stop | Number | 表示渐变点在起点和终点中的位置，范围 0 ～ 1 |
| color | Color | 渐变点颜色 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
const grd = ctx.createLinearGradient(40, 20, 230, 40);
grd.addColorStop(0.36, 'orange');
grd.addColorStop(0.56, 'cyan');
grd.addColorStop(0.63, 'yellow');
grd.addColorStop(0.76, 'blue');
grd.addColorStop(0.54, 'green');
grd.addColorStop(1, 'purple');
grd.addColorStop(0.4, 'red');
ctx.setFillStyle(grd);
ctx.fillRect(20, 20, 250, 180);
ctx.draw();
```
## setLineWidth
设置线条的宽度。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| lineWidth | Number | 线条宽度，单位为 px |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(250, 10);
ctx.stroke();
ctx.beginPath();
ctx.setLineWidth(10);
ctx.moveTo(20, 35);
ctx.lineTo(250, 30);
ctx.stroke();
ctx.beginPath();
ctx.setLineWidth(20);
ctx.moveTo(20, 50);
ctx.lineTo(250, 55);
ctx.stroke();
ctx.beginPath();
ctx.setLineWidth(25);
ctx.moveTo(20, 80);
ctx.lineTo(250, 85);
ctx.stroke();
ctx.draw();
```
## setLineCap
设置线条的端点样式。

### 入参
| 参数 | 类型 | 范围 | 说明 |
| :--- | :--- | :--- | :--- |
| lineCap | String | 'round'、'butt'、'square' | 线条的结束端点样式 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(150, 10);
ctx.stroke();
ctx.beginPath();
ctx.setLineCap('round');
ctx.setLineWidth(20);
ctx.moveTo(20, 70);
ctx.lineTo(250, 80);
ctx.stroke();
ctx.beginPath();
ctx.setLineCap('butt');
ctx.setLineWidth(10);
ctx.moveTo(25, 80);
ctx.lineTo(250, 30);
ctx.stroke();
ctx.beginPath();
ctx.setLineCap('square');
ctx.setLineWidth(10);
ctx.moveTo(35, 47);
ctx.lineTo(230, 120);
ctx.stroke();
ctx.draw();
```
## setLineJoin
设置线条的交点样式。

### 入参
| 参数 | 类型 | 范围 | 说明 |
| :--- | :--- | :--- | :--- |
| lineJoin | String | 'round'、'bevel'、'miter' | 线条的结束交点样式 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.beginPath();
ctx.moveTo(20, 30);
ctx.lineTo(150, 70);
ctx.lineTo(20, 100);
ctx.stroke();
ctx.beginPath();
ctx.setLineJoin('round');
ctx.setLineWidth(20);
ctx.moveTo(100, 20);
ctx.lineTo(280, 80);
ctx.lineTo(100, 100);
ctx.stroke();
ctx.beginPath();
ctx.setLineJoin('bevel');
ctx.setLineWidth(20);
ctx.moveTo(60, 25);
ctx.lineTo(180, 80);
ctx.lineTo(90, 100);
ctx.stroke();
ctx.beginPath();
ctx.setLineJoin('miter');
ctx.setLineWidth(15);
ctx.moveTo(130, 70);
ctx.lineTo(250, 50);
ctx.lineTo(230, 100);
ctx.stroke();
ctx.draw();
```

## setMiterLimit
设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 `setLineJoin()` 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| miterLimit | Number | 最大斜接长度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.beginPath();
ctx.setLineWidth(15);
ctx.setLineJoin('miter');
ctx.setMiterLimit(1);
ctx.moveTo(10, 10);
ctx.lineTo(100, 50);
ctx.lineTo(10, 90);
ctx.stroke();
ctx.beginPath();
ctx.setLineWidth(15);
ctx.setLineJoin('miter');
ctx.setMiterLimit(2);
ctx.moveTo(50, 10);
ctx.lineTo(140, 50);
ctx.lineTo(50, 90);
ctx.stroke();
ctx.beginPath();
ctx.setLineWidth(15);
ctx.setLineJoin('miter');
ctx.setMiterLimit(3);
ctx.moveTo(90, 10);
ctx.lineTo(180, 50);
ctx.lineTo(90, 90);
ctx.stroke();
ctx.draw();
```

## rect
创建一个矩形。
> 用 `fill()` 或者 `stroke()` 方法将矩形画到 canvas 中。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 矩形左上角的 x 坐标 |
| y | Number | 矩形左上角的 y 坐标 |
| width | Number | 矩形路径宽度 |
| height | Number | 矩形路径高度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.rect(20, 20, 250, 80);
ctx.setFillStyle('blue');
ctx.fill();
ctx.draw();
```
## fillRect
填充矩形。
> 用 `setFillStyle()` 设置矩形的填充色，如果没设置则默认是 `black`。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 矩形左上角的 x 坐标 |
| y | Number | 矩形左上角的 y 坐标 |
| width | Number | 矩形路径宽度 |
| height | Number | 矩形路径高度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.fillRect(20, 20, 250, 80);
ctx.setFillStyle('blue');
ctx.draw();
```

## strokeRect
画一个矩形(非填充)。
> 用 `setFillStroke()` 设置矩形线条的颜色，如果没设置默认是 `black`。

### 入参
| 参数 | 类型 | 范围 | 说明 |
| :--- | :--- | :--- | :--- |
| x | Number |  | 矩形左上角的 x 坐标 |
| y | Number |  | 矩形左上角的 y 坐标 |
| width | Number |  | 矩形路径宽度 |
| height | Number |  | 矩形路径高度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setStrokeStyle('blue');
ctx.strokeRect(20, 20, 250, 80);
ctx.draw();
```
## clearRect
清除画布上在该矩形区域内的内容。
> clearRect 并非画一个白色的矩形在地址区域，而是清空，为了有直观感受，可以对 canvas 加了一层背景色。

```html
<canvas id="awesomeCanvas" style="border: 1px solid; background: red;"/>
```
### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 矩形左上角的 x 坐标 |
| y | Number | 矩形左上角的 y 坐标 |
| width | Number | 矩形宽度 |
| height | Number | 矩形高度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setFillStyle('blue');
ctx.fillRect(250, 10, 250, 200);
ctx.setFillStyle('yellow');
ctx.fillRect(0, 0, 150, 200);
ctx.clearRect(10, 10, 150, 75);
ctx.draw();
```
## fill
对当前路径中的内容进行填充。默认的填充色为黑色。
> 如果当前路径没有闭合，`fill()` 方法会将起点和终点进行连接，然后填充，详情见例一。
> `fill()` 填充的的路径是从 `beginPath()` 开始计算，但是不会将 `fillRect()` 包含进去，详情见例二。

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.moveTo(20, 20)
ctx.lineTo(200, 20)
ctx.lineTo(200, 200)
ctx.fill()
ctx.draw()
```

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.rect(20, 20, 110, 40);
ctx.setFillStyle('blue');
ctx.fill();
ctx.beginPath();
ctx.rect(20, 30, 150, 40);
ctx.setFillStyle('yellow');
ctx.fillRect(20, 80, 150, 40);
ctx.rect(20, 150, 150, 40);
ctx.setFillStyle('red');
ctx.fill();
ctx.draw();
```
## stroke
画出当前路径的边框。默认 `black`。
> `stroke()` 描绘的的路径是从 `beginPath()` 开始计算，但是不会将 `strokeRect()` 包含进去，详情见例二。

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.moveTo(20, 20);
ctx.lineTo(150, 10);
ctx.lineTo(150, 150);
ctx.stroke();
ctx.draw();
```

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.rect(10, 10, 100, 30);
ctx.setStrokeStyle('blue');
ctx.stroke();
ctx.beginPath();
ctx.rect(20, 50, 150, 50);
ctx.setStrokeStyle('yellow');
ctx.strokeRect(15, 75, 200, 35);
ctx.rect(20, 200, 150, 30);
ctx.setStrokeStyle('red');
ctx.stroke();
ctx.draw();
```
## beginPath
开始创建一个路径，需要调用 `fill` 或者 `stroke` 才会使用路径进行填充或描边。
> 在最开始的时候相当于调用了一次 `beginPath()`。
> 同一个路径内的多次`setFillStyle()`、`setStrokeStyle()`、`setLineWidth()`等设置，以最后一次设置为准。

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.rect(20, 20, 150, 50);
ctx.setFillStyle('blue');
ctx.fill();
ctx.beginPath();
ctx.rect(20, 50, 150, 40);
ctx.setFillStyle('yellow');
ctx.fillRect(20, 170, 150, 40);
ctx.rect(10, 100, 100, 30);
ctx.setFillStyle('red');
ctx.fill();
ctx.draw();
```
## closePath
关闭一个路径
> 关闭路径会连接起点和终点。
> 如果关闭路径后没有调用 `fill()` 或者 `stroke()` 并开启了新的路径，那之前的路径将不会被渲染。

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.moveTo(20, 20);
ctx.lineTo(150, 20);
ctx.lineTo(150, 150);
ctx.closePath();
ctx.stroke();
ctx.draw();
```

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.rect(20, 20, 150, 50);
ctx.closePath();
ctx.beginPath();
ctx.rect(20, 50, 150, 40);
ctx.setFillStyle('red');
ctx.fillRect(20, 80, 120, 30);
ctx.rect(20, 150, 150, 40);
ctx.setFillStyle('blue');
ctx.fill();
ctx.draw();
```
## moveTo
把路径移动到画布中的指定点，不创建线条。
> 用 `stroke()` 方法来画线条

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 目标位置 x 坐标 |
| y | Number | 目标位置 y 坐标 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.moveTo(20, 20);
ctx.lineTo(150, 15);
ctx.moveTo(20, 55);
ctx.lineTo(120, 60);
ctx.stroke();
ctx.draw();
```
## lineTo
`lineTo` 方法增加一个新点，然后创建一条从上次指定点到目标点的线。
> 用 `stroke()` 方法来画线条

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 目标位置 x 坐标 |
| y | Number | 目标位置 y 坐标 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.moveTo(20, 20);
ctx.rect(20, 20, 80, 30);
ctx.lineTo(120, 80);
ctx.stroke();
ctx.draw();
```
## arc
画一条弧线。
> 创建一个圆可以用 `arc()` 方法指定其实弧度为0，终止弧度为 `2 * Math.PI`。
> 用 `stroke()` 或者 `fill()` 方法来在 canvas 中画弧线。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 圆 x 坐标 |
| y | Number | 圆 y 坐标 |
| r | Number | 圆 半径 |
| sAngle | Number | 起始弧度，单位弧度（在3点钟方向） |
| eAngle | Number | 终止弧度 |
| counterclockwise | Boolean | 可选，指定弧度的方向是逆时针还是顺时针，默认为 false。 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.arc(200, 75, 50, 0, 2 * Math.PI);
ctx.setFillStyle('#CCCCCC');
ctx.fill();
ctx.beginPath();
ctx.moveTo(50, 65);
ctx.lineTo(170, 80);
ctx.moveTo(200, 35);
ctx.lineTo(200, 235);
ctx.setStrokeStyle('#AAAAAA');
ctx.stroke();
ctx.setFontSize(12);
ctx.setFillStyle('yellow');
ctx.fillText('0', 165, 78);
ctx.fillText('0.6*PI', 96, 148);
ctx.fillText('1*PI', 15, 57);
ctx.fillText('1.7*PI', 94, 20);
ctx.beginPath();
ctx.arc(200, 85, 2, 0, 2 * Math.PI);
ctx.setFillStyle('blue');
ctx.fill();
ctx.beginPath();
ctx.arc(200, 35, 2, 0, 2 * Math.PI);
ctx.setFillStyle('green');
ctx.fill();
ctx.beginPath();
ctx.arc(450, 60, 2, 0, 2 * Math.PI);
ctx.setFillStyle('red');
ctx.fill();
ctx.beginPath();
ctx.arc(150, 35, 50, 0, 1.8 * Math.PI);
ctx.setStrokeStyle('#666666');
ctx.stroke();
ctx.draw();
```
针对 `arc(150, 35, 50, 0, 1.8 * Math.PI)`的三个关键坐标如下：

- 绿色: 圆心 (15, 35)
- 红色: 起始弧度 (0)
- 蓝色: 终止弧度 (1.8 * Math.PI)

## bezierCurveTo
创建三次方贝塞尔曲线路径。
> 曲线的起始点为路径中前一个点。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| cp1x | Number | 第一个贝塞尔控制点 x 坐标 |
| cp1y | Number | 第一个贝塞尔控制点 y 坐标 |
| cp2x | Number | 第二个贝塞尔控制点 x 坐标 |
| cp2y | Number | 第二个贝塞尔控制点 y 坐标 |
| x | Number | 结束点 x 坐标 |
| y | Number | 结束点 y 坐标 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.beginPath();
ctx.arc(30, 30, 2, 0, 2 * Math.PI);
ctx.setFillStyle('red');
ctx.fill();
ctx.beginPath();
ctx.arc(250, 25, 2, 0, 2 * Math.PI);
ctx.setFillStyle('blue');
ctx.fill();
ctx.beginPath();
ctx.arc(20, 100, 2, 0, 2 * Math.PI);
ctx.arc(200, 100, 2, 0, 2 * Math.PI);
ctx.setFillStyle('green');
ctx.fill();
ctx.setFillStyle('yellow');
ctx.setFontSize(14);
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(30, 100);
ctx.lineTo(150, 75);
ctx.moveTo(250, 30);
ctx.lineTo(250, 80);
ctx.lineTo(70, 75);
ctx.setStrokeStyle('#EEEEEE');
ctx.stroke();
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(30, 150, 250, 150, 180, 20);
ctx.setStrokeStyle('black');
ctx.stroke();
ctx.draw();
```
针对 `moveTo(30, 30)` `bezierCurveTo(30, 150, 250, 150, 180, 20)` 的三个关键坐标如下：

- 红色：起始点(20, 20)
- 蓝色：两个控制点(20, 150) (250, 150)
- 绿色：终止点(180, 20)

## clip
将当前创建的路径设置为当前剪切路径。

## quadraticCurveTo
创建二次贝塞尔曲线路径。
> 曲线的起始点为路径中前一个点。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| cpx | Number | 贝塞尔控制点 x 坐标 |
| cpy | Number | 贝塞尔控制点 y 坐标 |
| x | Number | 结束点 x 坐标 |
| y | Number | 结束点 y 坐标 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.beginPath();
ctx.arc(30, 30, 2, 0, 2 * Math.PI);
ctx.setFillStyle('red');
ctx.fill();
ctx.beginPath();
ctx.arc(250, 20, 2, 0, 2 * Math.PI);
ctx.setFillStyle('blue');
ctx.fill();
ctx.beginPath();
ctx.arc(30, 200, 2, 0, 2 * Math.PI);
ctx.setFillStyle('green');
ctx.fill();
ctx.setFillStyle('black');
ctx.setFontSize(12);
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.lineTo(30, 150);
ctx.lineTo(250, 30);
ctx.setStrokeStyle('#AAAAAA');
ctx.stroke();
ctx.beginPath();
ctx.moveTo(30, 30);
ctx.quadraticCurveTo(30, 150, 250, 25);
ctx.setStrokeStyle('black');
ctx.stroke();
ctx.draw();
```
针对 `moveTo(30, 30)` `quadraticCurveTo(30, 150, 250, 25)` 的三个关键坐标如下：

- 红色：起始点(30, 30)
- 蓝色：控制点(30, 150)
- 绿色：终止点(250, 25)

## scale
在调用`scale`方法后，之后创建的路径其横纵坐标会被缩放。多次调用`scale`，倍数会相乘。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| scaleWidth | Number | 横坐标缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%) |
| scaleHeight | Number | 纵坐标轴缩放倍数 (1 = 100%，0.5 = 50%，2 = 200%) |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.strokeRect(15, 15, 30, 25);
ctx.scale(3, 3);
ctx.strokeRect(15, 15, 30, 25);
ctx.scale(3, 3);
ctx.strokeRect(15, 15, 30, 25);
ctx.draw();
```

## rotate
以原点为中心，原点可以用 [translate](canvas)方法修改。顺时针旋转当前坐标轴。多次调用`rotate`，旋转的角度会叠加。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| rotate | Number | 旋转角度，以弧度计(degrees * Math.PI/180；degrees 范围为0~360) |

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.strokeRect(200, 20, 180, 150);
ctx.rotate(30 * Math.PI / 180);
ctx.strokeRect(200, 20, 180, 150);
ctx.rotate(30 * Math.PI / 180);
ctx.strokeRect(200, 20, 180, 150);
ctx.draw();
```

## translate
对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | 水平坐标平移量 |
| y | Number | 竖直坐标平移量 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.strokeRect(20, 20, 250, 80);
ctx.translate(30, 30);
ctx.strokeRect(20, 20, 250, 80);
ctx.translate(30, 30);
ctx.strokeRect(20, 20, 250, 80);
ctx.draw();
```

## setFontSize
设置字体大小。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| fontSize | Number | 字号 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.setFontSize(14)；
ctx.fillText('14', 20, 20)；；；
ctx.setFontSize(22)
ctx.fillText('22', 40, 40)
ctx.setFontSize(30)；
ctx.fillText('30', 60, 60)；
ctx.setFontSize(38)；
ctx.fillText('38', 90, 90)；
ctx.draw()；
```

## fillText
在画布上绘制被填充的文本。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| text | String | 文本 |
| x | Number | 绘制文本的左上角 x 坐标 |
| y | Number | 绘制文本的左上角 y 坐标 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.setFontSize(42)
ctx.fillText('Hello', 30, 30)；；
ctx.fillText('alipay', 200, 200)
ctx.draw()；
```

## drawImage
绘制图像，图像保持原始尺寸。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| imageResource | String | 图片资源, 只支持线上 cdn 地址或离线包地址，线上 cdn 需返回头 `Access-Control-Allow-Origin: *` |
| x | Number | 图像左上角 x 坐标 |
| y | Number | 图像左上角 y 坐标 |
| width | Number | 图像宽度 |
| height | Number | 图像高度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.drawImage('https://img.alicdn.com/tfs/TB1GvVMj2BNTKJjy0FdXXcPpVXa-520-280.jpg', 2, 2, 250, 80)；
ctx.draw()；
```

## setGlobalAlpha
设置全局画笔透明度。

### 入参
| 参数 | 类型 | 范围 | 说明 |
| :--- | :--- | :--- | :--- |
| alpha | Number | 0~1 | 透明度，0 表示完全透明，1 表示不透明 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.setFillStyle('yellow')；
ctx.fillRect(10, 10, 150, 100)；
ctx.setGlobalAlpha(0.2)；
ctx.setFillStyle('blue')；
ctx.fillRect(50, 50, 150, 100)；
ctx.setFillStyle('red')；
ctx.fillRect(100, 100, 150, 100)；
ctx.draw();
```

## setLineDash
设置虚线的样式

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| segments | Array | 一组描述交替绘制线段和间距（坐标空间单位）长度的数字。 如果数组元素的数量是奇数， 数组的元素会被复制并重复。例如， [5, 15, 25] 会变成 [5, 15, 25, 5, 15, 25]。 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.setLineDash([5, 15, 25]);
ctx.beginPath();
ctx.moveTo(0,100);
ctx.lineTo(400, 100);
ctx.stroke();
ctx.draw();
```

## transform
使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。你可以缩放、旋转、移动和倾斜上下文。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| scaleX | Number | 水平缩放 |
| skewX | Number | 水平倾斜 |
| skewY | Number | 垂直倾斜 |
| scaleY | Number | 垂直缩放 |
| translateX | Number | 水平移动 |
| translateY | Number | 垂直移动 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.rotate(45 * Math.PI / 180);
ctx.setFillStyle('red');
ctx.fillRect(70,0,100,30);
ctx.transform(1, 1, 0, 1, 0, 0);
ctx.setFillStyle('#000');
ctx.fillRect(0, 0, 100, 100);
ctx.draw();
```

## setTransform
使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| scaleX | Number | 水平缩放 |
| skewX | Number | 水平倾斜 |
| skewY | Number | 垂直倾斜 |
| scaleY | Number | 垂直缩放 |
| translateX | Number | 水平移动 |
| translateY | Number | 垂直移动 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.rotate(45 * Math.PI / 180);
ctx.setFillStyle('red');
ctx.fillRect(70,0,100,30);
ctx.setTransform(1, 1, 0, 1, 0, 0);
ctx.setFillStyle('#000');
ctx.fillRect(0, 0, 100, 100);
ctx.draw();
```

## getImageData
获取 canvas 区域隐含的像素数据。


### 入参
| 入参 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| x | Number | 是 | 将要被提取的图像数据矩形区域的左上角横坐标 |
| y | Number | 是 | 将要被提取的图像数据矩形区域的左上角纵坐标 |
| width | Number | 是 | 将要被提取的图像数据矩形区域的宽度 |
| height | Number | 是 | 将要被提取的图像数据矩形区域的高度 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 完成回调 |

### success 回调
参数

| 属性 | 类型 | 说明 |
| :--- | :--- | :--- |
| width | Number | 图像数据矩形的宽度 |
| height | Number | 图像数据矩形的高度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.getImageData
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```

## putImageData
将像素数据绘制到画布。

### 入参
| 参数 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| data | Uint8ClampedArray | 是 | 图像像素点数据，一维数组，每四项表示一个像素点的 rgba |
| x | Number | 是 | 源图像数据在目标画布中的位置偏移量（x 轴方向的偏移量） |
| y | Number | 是 | 源图像数据在目标画布中的位置偏移量（y 轴方向的偏移量） |
| width | Number | 是 | 源图像数据矩形区域的宽度 |
| height | Number | 是 | 源图像数据矩形区域的高度 |
| success | Function | 否 | 成功回调 |
| fail | Function | 否 | 失败回调 |
| complete | Function | 否 | 完成回调 |

### 示例代码

```Javascript
const data = new Uint8ClampedArray([255, 0, 0, 1])
const ctx = my.createCanvasContext('awesomeCanvas')；
ctx.putImageData({
    x: 0,
    y: 0,
    width: 1,
    height: 1,
    data: data,
    success(res) {}
})
```
## save
保存当前的绘图上下文。

## restore
恢复之前保存的绘图上下文。

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.save();
ctx.setFillStyle('red');
ctx.fillRect(20, 20, 250, 80);
ctx.restore();
ctx.fillRect(60, 60, 155, 130);
ctx.draw();
```
## draw
将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中。
> 绘图上下文需要由 `my.createCanvasContext(canvasId)` 来创建。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| reserve | Boolean | 非必填。本次绘制是否接着上一次绘制，即 reserve 参数为 false 时则在本次调用 drawCanvas绘制之前 native 层应先清空画布再继续绘制；若 reserver 参数为true 时，则保留当前画布上的内容，本次调用drawCanvas绘制的内容覆盖在上面，默认 false |
| callback | Function | 绘制完成后执行的回调函数。|

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setFillStyle('blue');
ctx.fillRect(20, 20, 180, 80);
ctx.draw();
ctx.fillRect(60, 60, 250, 120)；
ctx.draw(true);
```

## measureText
测量文本尺寸信息，目前仅返回文本宽度。同步接口。

### 入参
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| text | String | 必填。要测量的文本 |

### 返回
返回 TextMetrics 对象，结构如下：

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| width | Number | 文本的宽度 |

### 示例代码

```Javascript
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.font = 'italic bold 50px cursive';
const { width } = ctx.measureText('hello world');
console.log(width);
```
