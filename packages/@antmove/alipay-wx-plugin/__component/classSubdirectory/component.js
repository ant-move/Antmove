function judgeType (data) {
    if (data === undefined) return null;
    if (typeof data === 'number') {
        return 'Number';
    }
    if (typeof data === 'string') {
        return 'String';
    }
    if (typeof data === 'boolean') {
        return 'Boolean';
    }
    if (typeof data === 'function') {
        return 'Function';
    }
    if (data === null) {
        return null;
    }
    if (typeof data === 'object') {
        if (Array.isArray(data)) {
            return 'Array';
        }
        return 'Object';
    }
}

function transformProps (props = {}) {
    let properties = {};
    let temp = Object.assign({}, props);
    for (let i in temp) {
        const type = judgeType(temp[i]);
        if (type !== 'Function') {
            properties = Object.assign(properties, {
                [i]: {
                    type,
                    value: temp[i]
                }
            });
        }
    }
    return properties;
}

function processCustomEvent (opts = {}) {
    let props = opts.props || {};
    let self = this;
    this.props = Object.assign({}, props);
    for (let i in this.props) {
        if (i.match(/on[A-Z]\w*/)) {
            let eventName = i.substring(2);
            eventName = eventName.toLowerCase();
            this.props[i] = function (...params) {
                self.triggerEvent(eventName, {...params}, {});
            };
        }
    }
}

function makeLifes (_opts, options) {
    if (options.didUpdate) {
        console.warn("生命周期 didUpdate 不支持");
    }
    if (options.deriveDataFromProps) {
        console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
    }
    const transformLife = [
        {
            original: 'onInit',
            target: 'created'
        },
        {
            original: 'deriveDataFromProps',
            target: 'attached'
        },
        {
            original: 'didUnmount',
            target: 'detached'
        },
        {
            original: 'didMount',
            target: 'ready'
        }
    ];
    transformLife.map(obj => {
        const oname = options[obj.original];
        const tname = options[obj.target];
        _opts[obj.target] = function () {
            if (obj.target === "ready") {
                this.props = options.props || {};
                const Obj = {};
                // 处理用户的自定义
                Object.keys(this.props).map(key => {
                    if (this.properties[key] === undefined || this.properties[key] === null) {
                        Obj[key] = this.props[key];
                    }
                });
                this.setData(Obj);
                this.props = this.properties;
                processCustomEvent.call(this, options);
                this.$page = {};
                this.$id = this.id;
                this.is = "";
            }
            oname && oname.call(this);
            tname && tname.call(this);
        };
        delete options[obj.original];
        delete options[obj.target];
    });
}

function makeMixin (_opts, options) {
    if (options.mixins) {
        const behavourMade = (mixins = []) => {
            let behavour = mixins.map(mixin => {
                if (mixin.mixins) {
                    mixin.behaviors = behavourMade(mixin.mixins);
                    delete mixin.mixins;
                }
                mixin.created = mixin.onInit;
                if (mixin.deriveDataFromProps) {
                    console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
                }
                mixin.attached = mixin.deriveDataFromProps;
                mixin.ready = mixin.didMount;
                mixin.detached = mixin.didUnmount;
                delete mixin.onInit;
                delete mixin.deriveDataFromProps;
                delete mixin.didMount;
                delete mixin.didUnmount;
                if (mixin.didUpdate) {
                    console.warn("生命周期 didUpdate 不支持");
                }
                return Behavior(mixin);
            });
            return behavour;
        };
        _opts.behaviors = behavourMade(options.mixins);
        delete _opts.mixins;
    }
}

function makeEventObj (_opts, options) {
    if (options.methods) {
        const methods = options.methods;
        const newMethods = {};
        Object.keys(methods).forEach(key => {
            newMethods[key] = function (event) {
                (event && event.target) && (event.target.dataset = { ...event.currentTarget.dataset } || {});
                methods[key].call(this, event);
            };
        });
        _opts.methods = newMethods;
    }
}

function makeProperties (opts) {
    opts.properties = opts.properties || {};
    opts.props = transformProps(opts.props);
    opts.properties = Object.assign(opts.properties, opts.props);
}

module.exports = {
    processTransformationComponent (_opts, options) {
        makeLifes(_opts, options);
        _opts = Object.assign(_opts, options);
        makeEventObj(_opts, options);
        makeMixin(_opts, options);
        makeProperties(_opts);
        return _opts;
    }
};
