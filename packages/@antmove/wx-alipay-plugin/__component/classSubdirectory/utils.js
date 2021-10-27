/**
 * 把支付宝的e转成对等的微信e
 */
function antmoveAction(e) {
  const wxEvent = {
    currentTarget: e.currentTarget,
    target: e.target,
    type: e.type.toLowerCase(),
    changedTouches: e.changedTouches,
    touches: e.touches,
    timeStamp: e.timeStamp,
  }

  const eventDetail = e.detail || {}

  const { pageX, pageY } = eventDetail

  if (!wxEvent.changedTouches) {
    wxEvent.changedTouches = [
      e.detail
    ]
  }

  if (!wxEvent.touches) {
    wxEvent.touches = [
      e.detail
    ]
  }

  if (typeof pageX !== 'undefined' && typeof pageY !== 'undefined') {
    wxEvent.detail = {
      x: pageX,
      y: pageY,
    }
  } else {
    wxEvent.detail = eventDetail
  }

  const userFnName
        = `antmove${
          wxEvent.type.replace(/^\w/, ($1) => {
            return $1.toUpperCase()
          })}`

  const userFn = e.currentTarget.dataset[userFnName]

  if (!userFn || !this[userFn]) {
    console.warn(
      `does not have a method "${userFnName}" to handle event "${wxEvent.type}"`,
    )
    return
  }

  delete e.currentTarget.dataset[userFnName]

  this[userFn](wxEvent)
}

module.exports = {
  connectNodes: function connectNodes(node, ast) {
    if (!node.$relationNode.$parent) { return false }
    const parentNodeId = node.$relationNode.$parent.$id
    const parentNodeRoute = node.$relationNode.$parent.$route

    const refNumbers
            = (node.$self.props.refNumbers
                && node.$self.props.refNumbers.length)
            || 1

    const parentArray = ast.$refNodes[parentNodeRoute][parentNodeId]
    let parent = null
    if (refNumbers > 1) {
      parentArray.forEach((_parent) => {
        if (_parent.$children.length < refNumbers && !parent) {
          parent = _parent
          return true
        }
      })
    } else {
      parent = parentArray[parentArray.length - 1]
    }
    if (parent) {
      node.setParent(parent)
    }
  },
  setIfWatch,
  antmoveAction,
}
function setIfWatch(res) {
  my.setStorageSync({
    key: 'ifWatch',
    data: res,
  })
}
