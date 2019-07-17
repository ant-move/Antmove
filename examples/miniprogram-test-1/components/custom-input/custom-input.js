const customFormControls = require('../commen/form.js')
Component({
  behaviors: [customFormControls],
  relations: {
    './custom-form': {
      type: 'ancestor', // 关联的目标节点应为祖先节点
    }
  }
})