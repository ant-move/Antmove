
module.exports = function (key, value, props) {
    if (key.match(/data-/)) {
        /**
         * data-shopType => data-shoptype
         */
        let _key = key.toLowerCase();
        props[_key] = value;
        if (_key !== key) {
            delete props[key];
        }
    }
};