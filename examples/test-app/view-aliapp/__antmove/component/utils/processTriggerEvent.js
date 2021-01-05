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

function processTriggerEvent () {
    this.triggerEvent = function (event, data = {}, opts = {}) {
        let e = this._currentEvent;
        let eventType = (event[0].toLowerCase() + event.substring(1));
        event = 'on' + event[0].toUpperCase() + event.substring(1);
        e.type = eventType;
        e = processDataSet(e, this.props);
        event = event.replace(/-\w+/, function (name) {
            name = name[1].toUpperCase() + name.substring(2);
            return name;
        });
        if (typeof this.props[event] === 'function') {
            if (e) {
                e.detail = e.detail || {};
                if (Array.isArray(data)) {
                    e.detail = data;
                } else if (typeof data === 'object') {
                    e.detail = {
                        ...e.detail,
                        ...data
                    };
                } else {
                    e.detail = data;
                }
            }
            this.props[event](e, data, opts);
        }
    };
}

module.exports =  processTriggerEvent;