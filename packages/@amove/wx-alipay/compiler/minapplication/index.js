const { useReducer } = require('@amove/next')

// require("../../../common/Js/babel/behavourHandel");
// require("../common/Js/babel/getCallName");
// require("../common/Js/babel/alipayCodeBlock");
// require("../common/Js/babel/processHandleFn");
// require("../common/Js/babel/sharePath");

useReducer({
  MiniApplication(node, store) {
    this.addChild({
      type: 'JsConditionCompile',
      key: `${node.path}JsConditionCompile`,
      opts: {
        entry: 'wx',
        dist: 'alipay',
        code: 'wx.__target__',
      },
    })
    this.addChild({
      type: 'ComponentBehavior',
      key: `${node.path}ComponentBehavior`,
      body: this.$node.content,
    })
    this.addChild({
      type: 'commentBlock',
      key: `${node.path}commentBlock`,
    })
    this.addChild({
      type: 'AppShare',
      key: `${node.path}AppShare`,
      opts: {},
    })
  },
})
