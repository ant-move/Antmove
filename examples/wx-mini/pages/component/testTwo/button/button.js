Component({
    data: {
    },
    methods: {
      onGetUserInfo (e) {
        console.log(e.detail.errMsg);
        console.log(e.detail.userInfo);
        console.log(e.detail.rawData);
      },
      onContact (e) {
        console.log(e);
      },
      onGetPhoneNumber (e) {
        console.log(e);
      },
      onError (e) {
        console.log(e);
      },
      onLanuchApp (e) {
        console.log(e);
      },
      onOpenSetting (e) {
        console.log(e);
      }
    }
  });