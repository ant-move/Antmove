# 背景音频管理器

使用之前请先阅读[权限说明](innerpermissiondescription)

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563531934945.png)

## my.getBackgroundAudioManager()

获取**全局唯一**的背景音频管理器。 小程序切入后台，如果音频处于播放状态，可以继续播放。但是后台状态不能通过调用API操纵音频的播放状态。


**backgroundAudioManager**
### backgroundAudioManager 对象属性列表
| 属性 | 类型 | 只读 | 说明 |
| --- | --- | --- | --- |
| duration | Number | 是 | 当前音频的长度（单位：s），只有在当前有合法的 src 时返回 |
| currentTime	 | Number | 是 | 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回 |
| paused | Boolean | 是 | 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放	 |
| src | String | 否 | 音频的数据源，默认为空字符串，当设置了新的 src 时，会自动开始播放 ，目前支持的格式有 m4a, aac, mp3, wav	 |
| startTime | Number | 否 | 音频开始播放的位置（单位：s）	 |
| buffered | Number | 是 | 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。	 |
| title | String | 否 | 音频标题，用于做原生音频播放器音频标题。原生音频播放器中的分享功能，分享出去的卡片标题，也将使用该值。	 |
| epname | String | 否 | 专辑名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。	 |
| singer | String | 否 | 歌手名，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。	 |
| coverImgUrl | String | 否 | 封面图url，用于做原生音频播放器背景图。原生音频播放器中的分享功能，分享出去的卡片配图及背景也将使用该图。	 |
| webUrl | String | 否 | 页面链接，原生音频播放器中的分享功能，分享出去的卡片简介，也将使用该值。	 |
| isRecordAudioPlayState | Boolean | 否 | 标记是否记录当前url播放进度到本地存储，记录的可以通过接口查询，以便恢复播放现场；（Since 10.1.62） |

### backgroundAudioManager 对象的方法列表
| 方法 | 参数 | 说明 |
| --- | --- | --- |
| play	 | 无 | 播放 |
| pause	 | 无 | 暂停 |
| stop	 | 无 | 停止 |
| seek	 | position | 跳转到指定位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度	 |
| onCanplay | callback | 监听背景音频进入可以播放状态。但不保证后面可以流畅播放 |
| onWaiting | callback | 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发 |
| onError | callback | 监听背景音频播放错误事件 |
| onPlay | callback | 监听背景音频播放事件 |
| onPause | callback | 监听背景音频暂停事件 |
| onSeeking | callback | 监听背景音频开始跳转操作事件 |
| onSeeked | callback | 监听背景音频完成跳转操作事件 |
| onEnded | callback | 监听背景音频自然播放结束事件 |
| onStop | callback | 监听背景音频停止事件 |
| onTimeUpdate | callback | 监听背景音频播放进度更新事件 |
| onNext | callback | 监听用户在系统音乐播放面板点击下一曲事件 |
| onPrev | callback | 监听用户在系统音乐播放面板点击上一曲事件 |

### [](#ohq9wq)错误码
| errCode | 说明 |
| --- | --- |
| 10001 | 系统错误 |
| 10002 | 网络错误 |
| 10003 | 文件错误 |
| 10004 | 格式错误 |
| -1	 | 未知错误 |

### [](#a1nqoo)代码示例
```html
<view class="page">
    <view class="page-description">背景音频管理器</view>
    <view class="page-section">
        <view class="page-section-title">
            <view class="page-section-name">getBackgroundAudioManager</view>
            请先确认是否有权限使用该功能
        </view>
        <view class="page-section-demo">
            <button onTap="audioPlay" type="primary">播放</button>
            <button onTap="audioPause" type="primary">暂停</button>
            <button onTap="audioStop" type="primary">停止</button>
            <button onTap="audio14" type="primary">seek到14秒</button>
            <button onTap="audioStart" type="primary">seek开头</button>
            <button onTap="getAllProps" type="primary">获取后台音频属性</button>
        </view>
    </view>
</view>
```
```javascript
Page({
  onReady() {
    this.backgroundAudioManager = my.getBackgroundAudioManager()
    this.backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    this.backgroundAudioManager.onPlay(() => {
      console.log('back onPlay')
      my.alert({
        content: '开始播放',
      })
    })
    this.backgroundAudioManager.onPause(() => {
      console.log('back onPause')
      my.alert({
        content: '暂停播放',
      })
    })
    this.backgroundAudioManager.onCanplay(() => {
      console.log('back onCanplay')
      my.alert({
        content: '音频进入可以播放状态',
      })
    })
    this.backgroundAudioManager.onStop(() => {
      console.log('back onStop')
      my.alert({
        content: '背景音频停止事件',
      })
    })
    this.backgroundAudioManager.onEnded(() => {
      console.log('back onEnded')
      my.alert({
        content: '背景音频自然播放结束事件',
      })
    })
    this.backgroundAudioManager.onTimeUpdate(() => {
      console.log('onTimeUpdate')
    })
    this.backgroundAudioManager.onPrev(() => {
      console.log('back onPrev')
      my.alert({
        content: '点击上一曲事件',
      })
    })
    this.backgroundAudioManager.onNext(() => {
      console.log('back onNext')
      my.alert({
        content: '点击下一曲事件',
      })
    })
    this.backgroundAudioManager.onError(() => {
      console.log('back onError')
      my.alert({
        content: '背景音频播放错误事件',
      })
    })
    this.backgroundAudioManager.onWaiting(() => {
      console.log('back onWaiting')
    })
  },
  audioPlay() {
    console.log('call play')
    this.backgroundAudioManager.play()
    console.log('call play end')
  },
  audioPause() {
    console.log('call pause')
    this.backgroundAudioManager.pause()
  },
  audioStop() {
    console.log('call stop')
    this.backgroundAudioManager.stop()
  },
  audio14() {
    console.log('call seek 14')
    this.backgroundAudioManager.seek(14)
  },
  audioStart() {
    console.log('call seek 0')
    this.backgroundAudioManager.seek(0)
  },
  getAllProps() {
    const result = {
      duration: this.backgroundAudioManager.duration,
      currentTime: this.backgroundAudioManager.currentTime,
      paused: this.backgroundAudioManager.paused,
      startTime: this.backgroundAudioManager.startTime,
      buffered: this.backgroundAudioManager.buffered,
      src: this.backgroundAudioManager.src,
    }
    my.alert({ content: JSON.stringify(result) })
  },
})
```
