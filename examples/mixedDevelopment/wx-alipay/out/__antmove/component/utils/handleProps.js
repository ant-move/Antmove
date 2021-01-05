function handleProps (opts = {}) {
    opts.props = opts.props || {};

    if (opts.relations) {
        opts.props.theRelations = opts.relations;
    }
    if (!opts.properties) return false;
    Object.keys(opts.properties)
        .forEach(function (prop) {
            let val = opts.properties[prop];
            if (!val) {
                opts.props[prop] = val;
                return false;
            }

            if (typeof val === 'function') {
                let obj = {
                    [Boolean]: false,
                    [String]: '',
                    [Array]: [],
                    [Object]: {}
                };
                opts.props[prop] = obj[val];
                return false;
            }

            if (val.hasOwnProperty('value')) {
                opts.props[prop] = val.value;
            } else if (val.type !== 'observer') {
                let info = {
                    [String]: '',
                    [Number]: 0,
                    [Object]: {},
                    [null]: null
                };

                opts.props[prop] = info[val.type];
            }
        });
}

module.exports = handleProps;