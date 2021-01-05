const eventObj = {
  bindtap: 'onTap',
  bindtimeupdate: 'onTimeUpdate',
  bindlinechange: 'onLineChange',
  bindtouchstart: 'onTouchStart',
  bindtouchmove: 'onTouchMove',
  bindtouchend: 'onTouchEnd',
  bindtouchcancel: 'onTouchCancel',
  bindlongtap: 'onLongTap',
  bindlongpress: 'onLongTap',
  bindscrolltoupper: 'onScrollToUpper',
  bindscrolltolower: 'onScrollToLower',
  catchtouchmove: 'catchTouchMove',
  catchtouchend: 'catchTouchEnd',
  catchtouchcancel: 'catchTouchCancel',
  catchtouchstart: 'catchTouchStart',
}

function processEvent(info = {}) {
  const temp = {}
  Object.keys(info)
    .forEach((key) => {
      let eventName = ''
      if (key.charAt(0) === 'b') {
        eventName = key.substring(4)
      } else {
        eventName = key.substring(5)
      }
      temp[key] = info[key]
      temp[`bind:${eventName}`] = info[key]
      temp[`catch:${eventName}`] = info[key].replace(/^on/, 'catch')
      temp[`catch${eventName}`] = info[key].replace(/^on/, 'catch')
    })
  return temp
}


module.exports = {
  ...processEvent(eventObj),
}
