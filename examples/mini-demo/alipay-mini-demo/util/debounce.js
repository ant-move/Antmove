const _my = require("../__antmove/api/index.js")(my);
export function debounce(fn, wait) {
    let timeout;
    return function() {
        let ctx = this;
        let args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn.apply(ctx, args);
        }, wait);
    };
}
export function filterPage(apiList) {
    let filterMap = {};
    let list = [];

    for (let idx in apiList) {
        let api = apiList[idx];
        let keys = api["scopes"];

        for (let i in keys) {
            let key = keys[i];

            if (_my.canIUse(key)) {
                list.push(api);
                break;
            }
        }
    }

    return list;
}
