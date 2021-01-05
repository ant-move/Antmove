Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
      iconSize: [20, 30, 40, 50, 60, 70],
      iconColor: [
        'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
      ],
      iconType: [
        'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
      ]
  },
  methods: {
    
  }
});