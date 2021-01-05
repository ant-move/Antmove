# audio

音频。

扫码体验：

![audio.png](https://cache.amap.com/ecology/tool/miniapp/1563520781642.png)

### API
| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| --- | :---: | :---: | :--- | :--- |
| id | String |  | audio组件的唯一标识符 | v8.90 |
| src | String |  | 要播放音频的资源地址 | v8.90 |
| loop | Boolean | false | 是否循环播放 | v8.90 |
| controls | Boolean | true | 是否显示默认控件 | v8.90 |
| poster | String | 默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效 |  | v8.90 |
| name | String | 未知音频 | 默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效 | v8.90 |
| author | String | 未知作者 | 默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效 | v8.90 |
| onError | EventHandle |  | 当发生错误时触发 error 事件，detail = {errMsg: MediaError.code} | v8.90 |
| onPlay | EventHandle |  | 当开始/继续播放时触发play事件 | v8.90 |
| onPause | EventHandle |  | 当暂停播放时触发 pause 事件 | v8.90 |
| onTimeUpdate | EventHandle |  | 当播放进度改变时触发 timeupdate 事件，detail = {currentTime, duration} | v8.90 |
| onEnded | EventHandle |  | 当播放到末尾时触发 ended 事件 | v8.90 |

MediaError.code

| 返回错误码 | 描述 |
| --- | --- |
| MEDIA_ERR_ABORTED | 获取资源被用户禁止 |
| MEDIA_ERR_NETWORD | 网络错误 |
| MEDIA_ERR_DECODE | 解码错误 |
| MEDIA_ERR_SRC_NOT_SUPPOERTED | 不合适资源 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/HGZTqALbFAwtCvpSBiBw.png#align=left&display=inline&height=153&originHeight=358&originWidth=750&status=done&width=320)

### 示例

```html
<view class="page">
  <view class="page-description">音频</view>
  <view class="page-section">
    <view class="page-section-demo">
      <audio
        id="myAudio"
        name="{{name}}"
        author="{{author}}"
        poster="{{poster}}"
        src="{{src}}"
        loop="true"
        controls
        onError="error"
        onEnded="end"
        onTimeUpdate="timeUpdate"
      />
      <view class="page-section-btns">
        <view><button size="mini" plain type="primary" onTap="audioPlay">播放</button></view>
        <view><button size="mini" plain type="primary" onTap="audioPause">暂停</button></view>
        <view><button size="mini" plain type="primary" onTap="audioSeek">跳到 1分30秒</button></view>
      </view>
      <view class="page-section-btns">
        <view><button size="mini" plain type="primary" onTap="audioStart">回到开头</button></view>
        <view><button size="mini" plain type="primary" onTap="changeMusic">换首歌</button></view>
      </view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    poster: 'http://img.xiami.net/images/album/img58/23258/4139691291281159_2.jpg',
    name: '最美的期待',
    author: '周笔畅',
    src: 'http://sc1.111ttt.cn/2018/1/03/13/396131153555.mp3',
  },
  onReady() {
    this.audioCtx = my.createAudioContext('myAudio')
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audioSeek() {
    this.audioCtx.seek(90)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
  changeMusic() {
    this.setData({
      ...this.data,
      name: 'Hello',
      src: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
    })
  },
  timeUpdate() {
    console.log('timeUpdate')
  },
  end() {
    my.alert({
      content: JSON.stringify('结束'),
    })
  },
  error(err) {
    my.alert({
      content: JSON.stringify(`err${err}`),
    })
  },
})
```
