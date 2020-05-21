function handleExternalClasses (opts = {}) {
    let arr = opts.externalClasses || [];
    let _class = [];
    arr.forEach(function (a) {
        _class.push(_transform(a) || '');
    });

    opts.data = opts.data || {};

    opts.data.__classNames = _class;
    opts.data.__classes = '';

    function _transform (str = '') {
        str = str.replace(/-(\w)/g, function (...$) {
            return $[1].toUpperCase();
        });

        return str || '';
    }
    return opts;
}

module.exports = handleExternalClasses;