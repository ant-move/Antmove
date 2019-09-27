let eventObj = {
    'onTap': 'bindtap',
    'onTimeUpdate': 'bindtimeupdate',
    'onLineChange': 'bindlinechange',
    'onTouchStart': 'bindtouchstart',
    'onTouchMove': 'bindtouchmove',
    'onTouchEnd': 'bindtouchend',
    'onTouchCancel': 'bindtouchcancel',
    'onLongTap': 'bindlongtap',
    'onScrollToUpper': 'bindscrolltoupper',
    'onScrollToLower': 'bindscrolltolower',
};

function processEvent (info = {}) {
    let temp = {};
    Object.keys(info)
        .forEach(function (key) {
            const eventName = key.substring(2);
            temp[key] = info[key].toLowerCase();
            temp['catch' + eventName] = info[key].replace(/^bind/, 'catch').toLowerCase();
        });
    return temp;
}

module.exports = {
    ...processEvent(eventObj)
};