Component({
  data: {
    child:'child',
    relations: {
      './com': {
        type: 'parent', // 关联的目标节点应为子节点
        linked: function (target) {
          // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
        },
        linkChanged: function (target) {
          // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
        },
        unlinked: function (target) {
          // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
        }
      }
    },
  }
})