Component({
    data: {
        nodes: [{
          name: 'div',
          attrs: {
            class: 'div_class',
            style: 'line-height: 60px; color: red;'
          },
          children: [{
            type: 'text',
            text: 'Hello&nbsp;World!'
          }]
        }]
      },
      method: {
        tapnodes () {
            console.log('111');
        }
      }
});