# 前景音频播放

使用之前请先阅读权限说明：[https://yuque.antfin-inc.com/tiny-tmp/api/pfrxxs](https://yuque.antfin-inc.com/tiny-tmp/api/pfrxxs)

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563531492443.png)

### my.createInnerAudioContext
创建并返回内部 audio 上下文 `innerAudioContext` 对象。

#### innerAudioContext 对象属性列表：
| 属性 | 类型 | 只读 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| src | String | 否 | 音频的数据链接，用于直接播放。 | v8.90 |
| startTime	 | Number | 否 | 开始播放的位置（单位：s），默认 0 | v8.90 |
| autoplay | Boolean | 否 | 是否自动开始播放，默认 false	 | v8.90 |
| loop | Boolean | 否 | 是否循环播放，默认 false	 | v8.90 |
| obeyMuteSwitch | Boolean | 否 | 是否遵循系统静音开关，当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音，默认值 true	 | v8.90 |
| duration | Number | 是 | 当前音频的长度（单位：s），只有在当前有合法的 src 时返回	 | v8.90 |
| currentTime | Number | 是 | 当前音频的播放位置（单位：s），只有在当前有合法的 src 时返回，时间不取整	 | v8.90 |
| paused | Boolean | 是 | 当前是是否暂停或停止状态，true 表示暂停或停止，false 表示正在播放	 | v8.90 |
| buffered | Number | 是 | 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲。	 | v8.90 |
| volume | Number | 否 | 音量。范围 0~1。 | v8.90 |

**innerAudioContext 对象的方法列表：**

| 方法 | 参数 | 说明 | 最低版本 |
| --- | --- | --- | --- |
| playForegroundAudio	 | 无 | 播放 | v8.90 |
| pauseForegroundAudio | 无 | 暂停 | v8.90 |
| stopForegroundAudio | 无 | 停止 | v8.90 |
| seekForegroundAudio | position | 跳转到指定位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度	 | v8.90 |
| destroyForegroundAudio | 无 | 销毁当前实例	 | v8.90 |
| onCanplay | callback | 音频进入可以播放状态，但不保证后面可以流畅播放	 | v8.90 |
| onPlay | callback | 音频播放事件	 | v8.90 |
| onPause | callback | 音频暂停事件	 | v8.90 |
| onStop | callback | 音频停止事件	 | v8.90 |
| onEnded | callback | 音频自然播放结束事件	 | v8.90 |
| onTimeUpdate | callback | 音频播放进度更新事件	 | v8.90 |
| onError | callback | 音频播放错误事件	 | v8.90 |
| onWaiting | callback | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发	 | v8.90 |
| onSeeking | callback | 音频进行 seek 操作事件	 | v8.90 |
| onSeeked | callback | 音频完成 seek 操作事件	 | v8.90 |
| offCanplay | callback | 取消监听 onCanplay 事件	 | v8.90 |
| offPlay | callback | 取消监听 onPlay 事件	 | v8.90 |
| offPause | callback | 取消监听 onPause 事件	 | v8.90 |
| offStop | callback | 取消监听 onStop 事件	 | v8.90 |
| offEnded | callback | 取消监听 onEnded 事件	 | v8.90 |
| offTimeUpdate | callback | 取消监听 onTimeUpdate 事件	 | v8.90 |
| offError | callback | 取消监听 onError 事件	 | v8.90 |
| offWaiting | callback | 取消监听 onWaiting 事件	 | v8.90 |
| offSeeking | callback | 取消监听 onSeeking 事件	 | v8.90 |
| offSeeked | callback | 取消监听 onSeeked 事件	 | v8.90 |

#### errCode 说明：
| 错误码 | 描述 | 解决方案 |
| --- | --- | --- |
| 10001 | 系统错误 | |
| 10002 | 网络错误 | |
| 10003 | 文件错误 | |
| 10004 | 格式错误 | |
| -1	 | 未知错误 | |

#### 代码示例
```html
<view class="page">
    <view class="page-description">前景音频播放</view>
    <view class="page-section">
        <view class="page-section-title">
            <view class="page-section-name">createInnerAudioContext</view>
            请先确认是否有权限使用该功能
        </view>
        <view class="page-section-demo">
            <view class="page-current-title">{{title}}</view>
            <button type="primary" onTap="play">播放</button>
            <button type="primary" onTap="pause">暂停</button>
            <button type="primary" onTap="seek">seek{{seek}}s播放</button>
            <button type="primary" onTap="stop">停止播放</button>
            <button type="primary" onTap="destroy">destroy</button>
            <button type="primary" onTap="getAllProps">显示属性</button>

            <picker onChange="offCallback" value="{{callbackIndex}}" range="{{callbackArr}}">
                <view class="row">
                    <view class="row-title">offCallback</view>
                    <view class="row-extra">当前选择：{{callback}}</view>
                </view>
            </picker>

            <button type="primary" onTap="play2">播放audio2</button>
            <button type="primary" onTap="pause2">暂停audio2</button>
            <button type="primary" onTap="getAllProps2">显示属性2</button>

        </view>
    </view>
</view>
```

```javascript
Page({
  data: {
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    // src : '&*()E$$$1',
    title: 'initial',
    autoplay: false,
    loop: 'false',
    startTime: 0,
    volume: 0.5,
    obeyMuteSwitch: 'false',
    seek: 0,
    callbackArr: [
      'offCanplay',
      'offPlay',
      'offPause',
      'offStop',
      'offEnded',
      'offTimeUpdate',
      'offError',
      'offWaiting',
      'offSeeking',
      'offSeeked',
    ],
    callbackIndex: 0,
    callback: 'offCanplay',
  },

  onReady() {
    this.innerAudioContext = my.createInnerAudioContext()
    this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'

    console.log('onReady over')
    this.onCanplay = this.onCanplay.bind(this)
    this.innerAudioContext.onCanplay(this.onCanplay)

    this.onPlay = this.onPlay.bind(this)
    this.innerAudioContext.onPlay(this.onPlay)

    this.onPause = this.onPause.bind(this)
    this.innerAudioContext.onPause(this.onPause)

    this.onStop = this.onStop.bind(this)
    this.innerAudioContext.onStop(this.onStop)

    this.onError = this.onError.bind(this)
    this.innerAudioContext.onError(this.onError)

    this.onEnded = this.onEnded.bind(this)
    this.innerAudioContext.onEnded(this.onEnded)

    this.onTimeUpdate = this.onTimeUpdate.bind(this)
    this.innerAudioContext.onTimeUpdate(this.onTimeUpdate)

    this.onWaiting = this.onWaiting.bind(this)
    this.innerAudioContext.onWaiting(this.onWaiting)

    this.onSeeking = this.onSeeking.bind(this)
    this.innerAudioContext.onSeeking(this.onSeeking)

    this.onSeeked = this.onSeeked.bind(this)
    this.innerAudioContext.onSeeked(this.onSeeked)

    this.innerAudioContext2 = my.createInnerAudioContext()
    console.log(`--------${JSON.stringify(this.data)}`)
    this.innerAudioContext2.src = 'http://sc1.111ttt.cn/2018/1/03/13/396131153555.mp3'
    this.innerAudioContext2.onPlay(() => {
      console.log('开始播放2')
    })
    this.innerAudioContext2.onPause(() => {
      console.log('停止播放2')
    })
  },

  play() {
    console.log('call play')
    this.innerAudioContext.play()
    console.log('finish call play')
  },

  play2() {
    console.log('call play2')
    this.innerAudioContext2.play()
    console.log('finish call play2')
  },

  pause2() {
    console.log('call pause2')
    this.innerAudioContext2.pause()
    console.log('finish call pause2')
  },

  pause() {
    console.log('call pause')
    this.innerAudioContext.pause()
    console.log('finish call pause')
  },
  stop() {
    console.log('call stop')
    this.innerAudioContext.stop()
    console.log('finish call stop')
  },
  seek() {
    console.log('call seek')
    const seekVal = this.data.seek
    console.log(`seek to: ${seekVal}`)
    this.innerAudioContext.seek(380)
    console.log('finish call seek')
  },
  destroy() {
    console.log('call destroy')
    this.innerAudioContext.destroy()
    console.log('finish call destroy')
  },

  onCanplay() {
    this.innerAudioContext.onCanplay(() => {
      this.setData({ title: 'onCanplay' })
      console.log('onCanplay')
    })
  },
  onPlay() {
    this.setData({ title: 'onPlay' })
    console.log('onPlay')
  },
  onPause() {
    this.setData({ title: 'onPause' })
    console.log('onPause')
  },
  onEnded() {
    this.setData({ title: 'onEnded' })
    console.log('onEnded')
  },
  onTimeUpdate() {
    this.setData({ title: 'onTimeUpdate' })
    console.log('onTimeUpdate')
  },
  onError() {
    this.setData({ title: 'onError' })
    console.log('onError')
  },
  onStop() {
    this.setData({ title: 'onStop' })
    console.log('onStop')
  },
  onWaiting() {
    this.setData({ title: 'onWaiting' })
    console.log('onWaiting')
  },
  onSeeking() {
    this.setData({ title: 'onSeeking' })
    console.log('onSeeking')
  },
  onSeeked() {
    this.setData({ title: 'onSeeked' })
    console.log('onSeeked')
  },

  offCallback(e) {
    const index = e.detail.value
    const { callbackArr } = this.data

    this.setData({
      callback: callbackArr[index],
    })
    switch (callbackArr[index]) {
      case 'offCanplay':
        this.innerAudioContext.offCanplay(this.onCanplay)
        console.log('offCanplay')
        break
      case 'offPlay':
        console.log('offPlay--------1')
        this.onPlay()
        console.log('offPlay')
        this.innerAudioContext.offPlay(this.onPlay)
        console.log('offPlay--------2')
        break
      case 'offPause':
        this.innerAudioContext.offPause(this.onPause)
        console.log('offPause')
        break
      case 'offStop':
        this.innerAudioContext.offStop(this.onStop)
        console.log('offStop')
        break
      case 'offEnded':
        this.innerAudioContext.offEnded(this.onEnded)
        console.log('offEnded')
        break
      case 'offTimeUpdate':
        this.innerAudioContext.offTimeUpdate(this.onTimeUpdate)
        console.log('offTimeUpdate')
        break
      case 'offError':
        this.innerAudioContext.offError(this.onError)
        console.log('offError')
        break
      case 'offWaiting':
        this.innerAudioContext.offWaiting(this.onWaiting)
        break
      case 'offSeeking':
        this.innerAudioContext.offSeeking(this.onSeeking)
        console.log('offSeeking')
        break
      case 'offSeeked':

        this.innerAudioContext.offSeeked(this.onSeeked)
        console.log('offSeeked')
        break
      default: break
    }
  },

  getAllProps() {
    const { src } = this.innerAudioContext
    const { startTime } = this.innerAudioContext
    const { autoplay } = this.innerAudioContext
    const { loop } = this.innerAudioContext
    const { obeyMuteSwitch } = this.innerAudioContext
    const { duration } = this.innerAudioContext
    const { currentTime } = this.innerAudioContext
    const { paused } = this.innerAudioContext
    const { buffered } = this.innerAudioContext
    const { volume } = this.innerAudioContext
    const result = `src: ${src}\n` +
                 `startTime: ${startTime}\n` +
                 `autoplay: ${autoplay}\n` +
                 `loop: ${loop}\n` +
                 `obeyMuteSwitch: ${obeyMuteSwitch}\n` +
                 `duration: ${duration}\n` +
                 `currentTime: ${currentTime}\n` +
                 `paused: ${paused}\n` +
                 `buffered: ${buffered}\n` +
                 `volume: ${volume}\n`
    my.alert({ content: `音频属性：${result}` })
    console.log(result)
  },

  getAllProps2() {
    const { src } = this.innerAudioContext2
    const { startTime } = this.innerAudioContext2
    const { autoplay } = this.innerAudioContext2
    const { loop } = this.innerAudioContext2
    const { obeyMuteSwitch } = this.innerAudioContext2
    const { duration } = this.innerAudioContext2
    const { currentTime } = this.innerAudioContext2
    const { paused } = this.innerAudioContext2
    const { buffered } = this.innerAudioContext2
    const { volume } = this.innerAudioContext2
    const result = `src: ${src}\n` +
                 `startTime: ${startTime}\n` +
                 `autoplay: ${autoplay}\n` +
                 `loop: ${loop}\n` +
                 `obeyMuteSwitch: ${obeyMuteSwitch}\n` +
                 `duration: ${duration}\n` +
                 `currentTime: ${currentTime}\n` +
                 `paused: ${paused}\n` +
                 `buffered: ${buffered}\n` +
                 `startTime: ${startTime}\n` +
                 `volume: ${volume}\n`
    my.alert({ content: `音频属性：${result}` })
    console.log(result)
  },
})
```
```css
.row {
 height: 40px;
 background: white;
 margin:10px 20px 0 20px;
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 0 0 0 12px;
 justify-content: space-between
}
.row-extra {
  width: 200px;
  margin-left: 50px;
}
.page-current-title{
  background-color:#e0e0e0;
  padding:30rpx 0;
  text-align: center; 
  margin :30rpx 0;
}
```
