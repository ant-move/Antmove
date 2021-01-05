import { SmallFourBeh,initialState } from '../../../utils/behavior.js'
Component({
  data: {
    show: "我来了",
  },
  properties: {
    min: {
      type: String,
      value: 'haha',
      observer: function (newVal, oldVal) {
        // 属性值变化时执行
        console.log('1111', newVal, oldVal)
      }
    },
    lastLeaf: {
      // 这个属性可以是 Number 、 String 、 Boolean 三种类型中的一种
      type: Number,
      optionalTypes: [String, Object],
      value: 0
    },
    onport: {
      type: Function
    },
  },
  props: {
    min: "hahaha",
    max: '3',
    lastLeaf: 1,
    onport: ()=>{},
    onMessage: ()=>{}
  },
  methods: {
    count: function () {
      this.setData({
        sum: this.data.sum + 2
      })
    },
    onWXClick: function() {
      var myEventDetail = {a:1}
      this.triggerEvent("onPort", myEventDetail)
    },
    onClick: function() {
      var myEventDetail = {a:1}
      this.props.onMessage(myEventDetail)
    },
  },
  observers: {
    'numberA, numberB': function (numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      })
    }
  },
  behaviors: [SmallFourBeh],
  mixins: [initialState],
  relations: {
    './child': {
      type: 'child', // 关联的目标节点应为父节点
      linked: function (target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  externalClasses: ['test-class'],
  // lifetimes: {
  //   // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  //   attached: function () { },
  //   moved: function () { },
  //   detached: function () { },
  // },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    styleIsolation: 'isolated'
  },
  created: function () {
    console.log('000',this.properties)
    console.log('111',this.props)
  },
  attached: function () {
    this.setData({
      numberA: 2,
      numberB: 2,
    })
  },
  error: function () {
    console.log('error')
  },
  ready: function() {
    console.log('ready')
  },
  moved: function () {
    console.log('moved')
  },
  detached: function() {
    console.log('detached')
  },
  onInit: function() {
    console.log('onInit')
  },
  deriveDataFromProps: function() {
    console.log('deriveDataFromProps')
  },
  didMount() {
    console.log('didMount')
  },
  didUpdate() {
    console.log('didUpdate')
  },
  didUnmount() {
    console.log('didUnmount')
  },
});