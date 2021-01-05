# FaceDetection 人脸检测

用于打开摄像头进行人脸检测

**使用 useLiveFaceCheck 需要 客户端版本为10.1.22及以后，可使用my.getSystemInfo进行版本判断**
**不使用 useLiveFaceCheck 的场景，10.1.22 会降级为用户自己拍照并确认效果，用户确认效果后，回调给业务方**

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
|----|----|----|----|----|
| facing | 使用的摄像头，front表示前置摄像头, back表示后置摄像头 | string | front | false |
| appName | 用于显示在界面上的小程序名称 | string |  | true |
| serviceName | 用于显示在界面上的服务名称 | string |  | true |
| onFaceStatusChange | 人脸图片数据返回，该方法返回值必须为promise，imageBase64表示图片内容，faceRect表示人脸范围 | (FaceDetectionData, FaceDetectionContext) => void | | false |
| useLiveFaceCheck | 是否开启活体检测 | boolean | false | false |
| onFail | 人脸识别失败，code表示错误码，message表示错误信息 | ({ code: number, message: string }) => void |  | false |
| onSuccessBtnTap | 成功后点击按钮的回调 | function | | false |
| btnText | 成功按钮的显示文案 | string | | false |
| minRotate | 最小旋转角度，必须大于0，只在做左右脸检测时需要 | number |  | false |

**说明：useLiveFaceCheck为是否开启活体检测属性，支持检测左脸和右脸，如果开启可以在onFaceStatusChange中进行左右脸的检测**
### FaceDetectionData
   imageBase64: 图片base64内容
   faceRect: [top, left, width, height] 人脸坐标信息
### FaceDetectionContext
   async doLeftFaceCheck:function; 人脸左转检测
   async doRightFaceCheck:function; 人脸右转检测

## 异常码

| code | message |
| ---- | ---- |
| 100  | 相机被占用 |
| 101  | 没有相机权限 |
| 102  | 用户拒绝相机授权 |
| 201  | 系统版本不支持 |
| 202  | Webview 不支持 |
| 203  | 系统不支持webgl |
| 301  | 客户端版本过低 |
| 302  | 没有webar 权限 |
| 303  | 没有人脸检测权限 |
| 500  | 未知错误 |
| 600  | 当前状态不能使用活体检测 |
| 601  | 当前客户端不支持活体检测 |
| 602  | 活体检测只能用前置摄像 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "face-detection": "mini-antui/es/face-detection/index"
  }
}
```

```html
<view>
  <face-detection
    appName="demo小程序"
    serviceName="身份录入"
    onFaceStatusChange="onFaceStatusChange"
    onFail="onFail"
    useLiveFaceCheck="{{true}}"
    btnText="成功了"
    onSuccessBtnTap="onSuccessBtnTap"
  />
</view>
```

```javascript
Page({
  onFaceStatusChange(data, context) {
    return new Promise((resolve, reject) => {
      context.doLeftFaceCheck().then((leftImageBase64) => {
        context.doRightFaceCheck().then((rightImageBase64) => {
          resolve();
        }).catch(() => {
          reject();
        });
      }).catch(() => {
        reject();
      });
    });
  },
  onFail(error) {
    console.log('error', error);
  },
  onSuccessBtnTap() {
    my.alert({
      content: 'success',
    });
  },
});
```
