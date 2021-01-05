Page({
  data: {
    nodes: [{
      type: 'node',
      name: 'div',
      attrs: {
        class: 'test_div_class',
        style: 'color: green;',
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World! This is a text node.',
      }],
    }],
  },
  tap() {
    console.log('tap')
  },
})
