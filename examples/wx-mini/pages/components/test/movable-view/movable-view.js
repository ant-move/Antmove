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
      x: 0,
      y: 0,
      scale: 1,
    },
    methods: {
      // 这里是一个自定义方法 
        tap () {
          this.setData({
            x: 30,
            y: 30
          });
        },
        tap2 () {
          this.setData({
            scale: 3
          });
        },
        onChange (e) {
          console.log(e.detail);
        },
        onScale (e) {
          console.log(e.detail);
        }
    }
  });