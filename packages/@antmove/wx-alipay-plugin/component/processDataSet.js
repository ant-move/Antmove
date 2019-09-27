
module.exports = function (key, value, props) {
    let _key = key;
    if (key.match(/data-/)) {
        /**
         * data-shopType => data-shoptype
         */
        _key = key.toLowerCase();
        props[_key] = value;
        if (_key !== key) {
            delete props[key];
        }

    }
    return _key;
};