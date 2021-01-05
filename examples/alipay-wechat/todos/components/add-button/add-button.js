import { SmallFourBeh,initialState } from '/utils/behavior.js'
Component({
  data:{
    message: '支付宝组件通信',
  },
  props: {
    text: 'Button',
    onClickMe: () => {},
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
  methods: {
    onClickMe() {
      this.props.onClickMe('传递父组件', '传弟子组件');
      console.log(this)
    },
    onWXClick: function() {
      var myEventDetail = {a:1}
      this.triggerEvent("onPort", myEventDetail)
    },
  },
  behaviors: [SmallFourBeh],
  mixins: [initialState],
  observers: {
    'numberA, numberB': function (numberA, numberB) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      this.setData({
        sum: numberA + numberB
      })
    }
  },
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
  onInit() {
    console.log('onInit')
  },
  deriveDataFromProps() {
    console.log('deriveDataFromProps')
  },//组件生命周期函数，组件创建时和更新前触发
  didMount(){
    console.log('didMount',this.properties)
    console.log('didMount',this.props)
  }, // 生命周期函数
  didUpdate(){
    console.log('didUpdate')
  },
  didUnmount(){
    console.log('didUnmount')
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
});
