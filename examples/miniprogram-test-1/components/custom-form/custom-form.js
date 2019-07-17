// components/custom-form/custom-form.js
const customFormControls = require('../commen/form.js')
Component({
  relations: {
    customFormControls: {
      type: 'descendant', // 关联的目标节点应为子孙节点
      target: customFormControls
    }
  }
})
