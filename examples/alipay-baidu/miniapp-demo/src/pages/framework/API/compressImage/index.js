Page({
  data: {},
  onLoad() {},
  compressImage() {
    my.compressImage({
      apFilePaths: ['https://resource/apmlcc0ed184daffc5a0d8da86b2f518cf7b.image'],
      compressLevel: 1,
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
      },
    })
  },
})
