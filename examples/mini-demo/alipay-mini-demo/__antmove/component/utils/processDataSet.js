function processDataSet (e, props = {}) {
    if (e.timeStamp === undefined) {
        e = {
            ...e,
            target: {
                dataset: {}
            },
            currentTarget: {
                dataset: {}
            }
        };
    }
    Object.keys(props)
        .forEach(function (prop) {
            if (prop.match(/^data-/)) {
                let originProp = prop;
                prop = prop.replace(/[A-Z]/g, function ($) {
                    return $.toLowerCase();
                });


                prop = prop.split('-');
                prop.shift();
                prop = prop.join('');
                e.target.dataset[prop] = props[originProp];
                e.currentTarget.dataset[prop] = props[originProp];
            }
        });
    return e;
}

module.exports = processDataSet;