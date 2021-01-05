# 生命周期

组件的生命周期函数在特殊的时间点由框架触发。<br />

生命周期函数具体信息见下表：

| 生命周期   | 参数                 | 说明               | 最低版本 |
| ---------- | -------------------- | ------------------ | -------- |
| didMount   | 无                   | 组件创建完毕时触发 |     v8.90.0     |
| didUpdate  | (prevProps,prevData) | 组件更新完毕时触发 |    v8.90.0      |
| didUnmount | 无                   | 组件删除时触发     |    v8.90.0      |

## didMount

didMount 为自定义组件首次渲染完毕后的回调，此时页面已经渲染，通常在这时请求服务端数据。

```javascript
Component({
  data: {},
  didMount() {
    let that = this
    my.httpRequest({
      url: 'http://httpbin.org/post',
      success: function(res) {
        console.log(res)
        that.setData({ name: 'xiaoming' })
      },
    })
  },
})
```

## didUpdate

didUpdate 为自定义组件数据更新后的回调，每次组件数据变更的时候都会调用。

```javascript
Component({
  data: {},
  didUpdate(prevProps, prevData) {
    console.log(prevProps, this.props, prevData, this.data)
  },
})
```

**注意：**

- 组件内部调用 `this.setData` 会触发 didUpdate
- 外部调用者调用 `this.setData` 也会触发 didUpdate

## didUnmount

didUnmount 为自定义组件被卸载后的回调，每当组件实例从页面卸载的时候都会触发此回调。

```javascript
Component({
  data: {},
  didUnmount() {
    console.log(this)
  },
})
```
