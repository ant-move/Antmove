Component({
    properties: {
      // 这里定义了innerText属性，属性值可以在组件使用时指定
      innerText: {
        type: String,
        value: 'default value',
      }
    },
    data: {
      toView: 'red',
      scrollTop: 100
    },
    methods: {
      // 这里是一个自定义方法
      upper (e) {
        console.log(e);
      },
      lower (e) {
        console.log(e);
      },
      scroll (e) {
        console.log(e);
      },
    }
  });