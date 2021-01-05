Component({
  props: {
    facing: 'front',
    appName: '',
    serviceName: '',
    useLiveFaceCheck: false,
    minRotate: -1,
  },
  didMount() {
    this.webViewContext = my.createWebViewContext('am-face-detection');
    this.doFaceLeftResolve = null;
    this.isDidFaceLeftResolve = false;
    this.doFaceRightResolve = null;
    this.isDidFaceRightResolve = false;
  },
  didUnMount() {
    this.webViewContext.postMessage({ action: 'releaseCamera' });
  },
  methods: {
    doLeftFaceCheck() {
      return new Promise((resolve, reject) => {
        this.isDidFaceLeftResolve = false;
        this.webViewContext.postMessage({ action: 'doFaceLeft', data: { minRotate: this.props.minRotate } });
        this.doFaceLeftResolve = resolve;
        setTimeout(() => {
          if (!this.isDidFaceLeftResolve) {
            reject();
          }
        }, 30000);
      });
    },
    doRightFaceCheck() {
      return new Promise((resolve, reject) => {
        this.isDidFaceRightResolve = false;
        this.webViewContext.postMessage({ action: 'doFaceRight', data: { minRotate: this.props.minRotate } });
        this.doFaceRightResolve = resolve;
        setTimeout(() => {
          if (!this.isDidFaceRightResolve) {
            reject();
          }
        }, 30000);
      });
    },
    onMessage(e) {
      const { onFaceStatusChange, onFail, onSuccessBtnTap } = this.props;
      const { action, data } = e.detail;

      if (action === 'resignSuccessBtnClick') {
        if (onSuccessBtnTap) {
          onSuccessBtnTap();
        }
      }

      if (action === 'faceRotated' && data.forward === 'left') {
        this.isDidFaceLeftResolve = true;
        this.doFaceLeftResolve(data.imageBase64);
        return;
      }

      if (action === 'faceRotated' && data.forward === 'right') {
        this.isDidFaceRightResolve = true;
        this.doFaceRightResolve(data.imageBase64);
        return;
      }

      if (action === 'captureImage') {
        if (onFaceStatusChange) {
          const promise = onFaceStatusChange(
            {
              imageBase64: data.imageBase64,
              faceRect: data.faceRect,
            },
            {
              doLeftFaceCheck: this.doLeftFaceCheck.bind(this),
              doRightFaceCheck: this.doRightFaceCheck.bind(this),
            },
          );

          if (promise instanceof Promise) {
            promise.then(() => {
              this.webViewContext.postMessage({ action: 'requestSuccess' });
            }).catch(() => {
              this.webViewContext.postMessage({ action: 'requestFailure' });
            });
          } else {
            this.webViewContext.postMessage({ action: 'requestSuccess' });
          }
        }
      } else {
        /* eslint-disable */
        if (onFail) {
          onFail({ code: data.code, message: data.message });
        }
      }
    },
  },
});
