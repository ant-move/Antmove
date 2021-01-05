const eventObj = {
  onTap: 'bindtap',
  onTimeUpdate: 'bindtimeupdate',
  onLineChange: 'bindlinechange',
  onTouchStart: 'bindtouchstart',
  onTouchMove: 'bindtouchmove',
  onTouchEnd: 'bindtouchend',
  onTouchCancel: 'bindtouchcancel',
  onLongTap: 'bindlongtap',
  onScrollToUpper: 'bindscrolltoupper',
  onScrollToLower: 'bindscrolltolower',
}

function processEvent(info = {}) {
  const temp = {}
  Object.keys(info)
    .forEach((key) => {
      const eventName = key.substring(2)
      temp[key] = info[key].toLowerCase()
      temp[`catch${eventName}`] = info[key].replace(/^bind/, 'catch').toLowerCase()
    })
  return temp
}

module.exports = {
  ...processEvent(eventObj),
}
