// components/comtest/custom-li.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  relations: {
    './comtest': {
      type: 'parent', // 关联的目标节点应为父节点
      linked(target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged(target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked(target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    name:222,
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clicked(){
      this.data.num++;
      this.setData({
        name:"333",
        num: this.data.num
      })
      console.log(this.data.num)
      this.triggerEvent('myevent', { paramBtoA: 123 });
      console.log("惦记你")
    }
  }
})
