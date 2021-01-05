Component({
    properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      innerText: {
        type: String,
        value: 'default value',
      }
    },
    data: {
      // 这里是一些组件内部数据
      // someData: {}
      imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
      ],
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
    },
    methods: {
      // 这里是一个自定义方法
      // customMethod() {}
      changeIndicatorDots () {
        this.setData({
          indicatorDots: !this.data.indicatorDots
        });
      },
      changeAutoplay () {
        this.setData({
          autoplay: !this.data.autoplay
        });
      },
      bindchange (e) {
        console.log(e)
      },
      intervalChange (e) {
        console.log(e)
        this.setData({
          interval: e.detail.value
        });
      },
      durationChange (e) {
        console.log(e)
        this.setData({
          duration: e.detail.value
        });
      }
    }
  });