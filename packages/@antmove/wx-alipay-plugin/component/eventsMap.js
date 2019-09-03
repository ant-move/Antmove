let eventObj = {
    'bindtap': 'onTap',
    'bindtimeupdate': 'onTimeUpdate',
    'bindlinechange': 'onLineChange',
    'bindtouchstart': 'onTouchStart',
    'bindtouchmove': 'onTouchMove',
    'bindtouchend': 'onTouchEnd',
    'bindtouchcancel': 'onTouchCancel',
    'bindlongtap': 'onLongTap',
    'bindscrolltoupper': 'onScrollToUpper',
    'bindscrolltolower': 'onScrollToLower',
    "catchtouchmove": "catchTouchMove",
    "catchtouchend": "catchTouchEnd",
    "catchtouchcancel": "catchTouchCancel",
    "catchtouchstart": "catchTouchStart"
};

function processEvent (info = {}) {
    let temp = {};
    Object.keys(info)
        .forEach(function (key) {
            let eventName = key.substring(4);
            temp[key] = info[key];
            temp['bind:' + eventName] = info[key];
            temp['catch:' + eventName] = info[key].replace(/^on/, 'catch');
            temp['catch' + eventName] = info[key].replace(/^on/, 'catch');
        });
    return temp;
}


module.exports = {
    ...processEvent(eventObj)
};