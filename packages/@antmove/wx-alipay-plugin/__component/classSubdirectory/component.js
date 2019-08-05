const utils = require('../../api/utils');
const { warnLife } = utils;

module.exports = {
    processTransformationComponent (_opts, options) {

        _opts = Object.assign(_opts, options);
        _opts.props = Object({}, options.properties);

        handleProps(_opts);
        let _life = {};
        if (options && options.lifetimes) {
            _life = options.lifetimes;
    
        } else if (options) {
            _life = options;
        
        }
        let arr = [];
        if (_life.created) {
            arr.push(_life.created);
        }
        if (_life.attached) {
            arr.push(_life.attached);
        }

        if (_life.ready) {
            arr.push(_life.ready);
        }

        if (_life.detached) {
            _opts.didUnmount = _life.detached;

        }

        if (_life.error) { 
            warnLife(`There is no error life cycle`, "error");

        }

        if (_life.moved) {
            warnLife(`There is no moved life cycle`, "moved");

        }

        if (options.observers) {
            _opts.didUpdate = function () {
                const prevData = arguments[1];
                const newObservers = {};
                for (let key in options.observers) {
                    let keyArr = key.split(",");
                    keyArr.forEach( its => {
                        newObservers[its] = options.observers[key];
                    });
                }
                for (let key in prevData) {
                    if (prevData[key]!== this.data[key]) {
                        newObservers[key] && newObservers[key](this.data[key]);
                    }
                }
            };
        }

        if (options.behaviors) {
            // this.properties = this.props;
            let minixs = [];
            minixs = _opts.behaviors.map(item =>{
                item.properties ? item.props = item.properties : false;
                delete item.properties;
                if (item.lifetimes) {
                    Object.keys(item.lifetimes).forEach(its => {
                        if (my.canIUse('component2')) {
                            if (its==="created") { 
                                item.onInit =  item.lifetimes.created;
                            }
                            if (its==="attached") { 
                                item.deriveDataFromProps =  item.lifetimes.attached;
                            }
                        } else {
                            if (its==="created") { 
                                warnLife(`created is Unsupported`, "behaviors/created");
                            }
                            if (its==="attached") { 
                                warnLife(`attached is Unsupported`, "behaviors/attached");
                            }
                        }
                            
                        if (its==="ready") { 
                            item.didMount =  item.lifetimes.ready;
                        }
                        
                        if (its==="detached") {
                            item.didUnmount =  item.lifetimes.detached;
                        }

                        if (its==="error") {
                            warnLife(`error is Unsupported`, "behaviors/error");
                        }

                        if (its==="moved") {
                            warnLife(`moved is Unsupported`, "behaviors/moved");
                        }

                    });
                    delete item.lifetimes;
                }  

                if (item.pageLifetimes) {
                    warnLife(`pageLifetimes is Unsupported`, "pageLifetimes");
                }

                // 兼容微信低版本生命周期
                if (item.created) {
                    if (my.canIUse('component2')) {
                        item.onInit =  item.created;
                    } else {
                        warnLife(`created is Unsupported`, "created");
                    }
                    delete item.created;
                }

                if (item.attached) {
                    if (my.canIUse('component2')) {
                        item.deriveDataFromProps =  item.attached;
                    } else {
                        warnLife(`attached is Unsupported`, "attached");
                    }
                    delete item.attached;
                }

                if (item.ready) {
                    item.didMount = item.ready;
                    delete item.ready;
                }

                if (item.detached) {
                    item.didUnmount = item.detached;
                    delete item.detached;
                }

                if (item.error) {
                    warnLife(`error is Unsupported`, "error");
                    delete item.error;
                }

                if (item.moved) {
                    warnLife(`moved is Unsupported`, "moved");
                    delete item.moved;
                }
                
                return item;
            });
            
            _opts.mixins = minixs; 
        }
        
        /**
         * process methods
         */
        if (options.methods) {
            _opts.methods = {};
            Object.keys(options.methods)
                .forEach(function (method) {
                    _opts.methods[method] = function (...p) {
                        this.$currentEvent = p[0];
                        options.methods[method].apply(this, p);
                    };
                });
        }
        _opts.didMount = function () {
            this.properties = this.properties || {};
            handleData.call(this);
            if (typeof this.props.__parentcomponent === 'function') {
                this.props.__parentcomponent.call(this);
            }
            if (typeof this.triggerEvent !== 'function') {
                this.triggerEvent = function (event, data = {}) {
                    let e = this.$currentEvent;
                    event = 'on' + event[0].toUpperCase() + event.substring(1);

                    processDataSet(e, this.props);
                    if (typeof this.props[event] === 'function') {
                        if (e && e.detail) {
                            e.detail = {
                                ...e.detail,
                                ...data
                            };
                        }
                        this.props[event](e, data);
                    }

                    // __wepy__ 
                    if (event === 'on_init' && this.props.on_init === '_initComponent') {
                        let e = {
                            target: {
                                dataset: {}
                            },
                            currentTarget: {
                                dataset: {}
                            }
                        };
                        this._initComponent({
                            detail: data,
                            ...e
                        });
                        return data;
                    }
                };
            }

            if (typeof this.getRelationNodes !== 'function') {
                
                this.getRelationNodes = function () {
                    warnLife(`getRelationNodes is Unsupported`, "getRelationNodes");
                    return [];
                };
            }
           
            let l = arr.length ;
            for ( let m = 0 ; m < l ; m ++ ) {
                arr[m].call(this);
            }

            if (this.props.genericSelectable) {
                warnLife(`generic:selectable is Unsupported`, "generic");
            }

            if ( options.pageLifetimes) {
                warnLife(`There is no page life cycle where the component resides,including(show,hide,resize)`, "getRelationNodes");
            }
        };
    }
};

function processDataSet (e = {
    target: {
        dataset: {}
    },
    currentTarget: {
        dataset: {}
    }
}, props = {}) {
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
}


function handleProps (opts = {}) {
    opts.props = opts.props || {};

    Object.keys(opts.props)
        .forEach(function (prop) {
            if (opts.props[prop].default !== undefined) {
                opts.props[prop] = opts.props[prop].default;
            } else {
                opts.props[prop] = undefined;
            }
        });
    
    opts.props['__parentcomponent'] = function () {
        return this;
    };
}

function handleData () {
  
}