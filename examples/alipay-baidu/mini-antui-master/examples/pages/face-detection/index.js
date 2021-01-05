Page({
  onFaceStatusChange(data, context) {
    console.log('data', data);
    return new Promise((resolve, reject) => {
      context.doLeftFaceCheck().then((leftImageBase64) => {
        console.log(leftImageBase64);
        context.doRightFaceCheck().then((rightImageBase64) => {
          console.log(rightImageBase64);
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
