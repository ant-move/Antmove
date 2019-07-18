// components/comtest/comtest.js
const myBehavior = require("./behavour.js")
Component({
  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },

  data: {
    name: "老四"
  }, // 私有数据，可用于模板渲染
  relations: {
    './custom-li': {
      type: 'child', // 关联的目标节点应为子节点
      linked(target) {
        console.log('./custom-li,1', target)
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged(target) {
        console.log('./custom-li,2')

        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        console.log('./custom-li,3')
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  behaviors: [myBehavior],
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() {
      console.log("1.初始化",this.data);
     
     }, 
    attached() {
      console.log("2.实例化", this.data)
    },
    ready(){
     const nodes = this.getRelationNodes("we")
      console.log("3.渲染 ", nodes);
    },
    moved() { },
    detached() {
      console.log("消失")
    },
  },
  observers: {
    'name': function (name) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      console.log(`新名字：${name}`)
    }
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
//   attached() { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
 

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() { },
    hide() { },
    resize() { },
  },

  methods: {
    onMyButtonTap() {
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      });
      this.getRelationNodes()
    },
    onMyEvent: function (e) {
      console.log(e);
    },
    nameChange(){
      this.setData({
        name:"小六"
      })
      this.triggerEvent("bindmyevent",123)
      
    },
    mytap(){
      const myEventDetail = {
        name:"小小"
      } // detail对象，提供给事件监听函数
      
      this.triggerEvent('myevent', myEventDetail);

    },
    // 内部方法建议以下划线开头
    _myPrivateMethod() {
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange(newVal, oldVal) {

    }
  }
})
