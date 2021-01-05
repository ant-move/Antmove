const utils = require('../../api/utils');
const { warnLife, fnAppClass } = utils;
let observerObj = {};  
let observersObj = {}; 
function getUrl () {
    let pages = getCurrentPages();
    let url = pages[pages.length - 1].route;
    let _arr = url.split('/');
    let _name = _arr[_arr.length - 1];
    my.setStorageSync({
        key: '_pageMsg',
        data: {
            pageName: _name,
            pagePath: url
        }
    });
    return url;
}
function processMethods (options = {}, _opts = {}) {
    _opts.methods = {};
    Object.keys(options.methods)
        .forEach(function (method) {
            _opts.methods[method] = function (...p) {                     
                this.$currentEvent = p[0];
                options.methods[method].apply(this, p);
                
            };
        });
    return _opts;
}
function behaviorsAssign (_opts, item, res) {
    let obj = {};
    if (_opts[res] ) {
        obj = Object.assign(_opts[res], ...item[res]);
    } else {
        obj = item[res];
    }
    return obj;
}

function compatibleLifetime (options) {
    let _life = {};
    if (options && options.lifetimes) {
        _life = options.lifetimes;

    } else if (options) {
        _life = options;    
    } 
    return _life;
}

function collectObserver (option, type="observer") {     
    Object.keys(option).forEach(function (prop) {  
        if (typeof option[prop] !== 'object' || !option[prop]) return false;
        if (option[prop].observer) {
            observerObj[prop] = option[prop].observer;
        } else if (type==="observers") {          
            observersObj[prop] = option[prop];
        }                
    });        
}

function processObservers (options,that) { 
    let arr = [];      
    if (options.observers) {            
        for (let key in options.observers) {
            let keyArr = key.split(","); 
            keyArr.forEach( its => {  
                its = its.trim();
                arr.push(that.data[its]);              
                collectObserver({[its]: options.observers[key]}, "observers");
            });
        }
    } 
    return arr;
}

function processInit () {
    getUrl();
    this.properties = this.props;
}

function processTriggerEvent () {
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
    };
}

function processgetRelationNodes () {
    this.getRelationNodes = function () {
        warnLife(`getRelationNodes is Unsupported`, "getRelationNodes");
        return [];
    }();
}

function observerHandle (observerObj, args, that ) {
    Object.keys(observerObj).forEach(function (obs) {
        if (args[0][obs] !== that.props[obs]) {         
            observerObj[obs].call(that, that.props[obs], args[0][obs]);
        }
    });
}

function observersHandle (observersObj, args, that, param) {
    Object.keys(observersObj).forEach(function (obs) {
        if (args[1][obs] !== that.data[obs]) {
            observersObj[obs].call(that, ...param);
        }
    });
}

function makeBehaviors (behavior, _opts, mixins) {
    mixins = behavior.behaviors.map(item =>{
        if (item.properties) {
            Object.keys(item.properties).forEach(function (prop) {
                if (item.properties[prop].value || item.properties[prop].value === undefined || item.properties[prop].value === null || item.properties[prop].value === 0) {
                    _opts.props[prop] = item.properties[prop].value;
                } 
            });
        }
        if (item.data) {
            _opts.data = Object.assign(behaviorsAssign(behavior, item, "data"), _opts.data);
        }
        if (item.methods) {
            _opts.methods = Object.assign(behaviorsAssign(behavior, item, "methods"), _opts.methods);
        }
        if (item.behaviors) {
            makeBehaviors(item, _opts);
        }
        let _lifeCircle = {};
        if (item.lifetimes) {
            _lifeCircle = item.lifetimes;
        } else {
            _lifeCircle = item;
        }
        if (_lifeCircle.created) {
            if (my.canIUse('component2')) {   
                item.onInit = _lifeCircle.created ;              
            } else {
                warnLife(`created is Unsupported`, "behaviors/created");
            }
        }
        if (_lifeCircle.attached) {
            item.didMount = _lifeCircle.attached;
        }
        if (_lifeCircle.ready) {
            item.didMount = _lifeCircle.ready;
        }
        if (_lifeCircle.detached) {
            item.didUnmount = _lifeCircle.detached;
        }
        _lifeCircle.moved && warnLife(`moved is Unsupported`, "behaviors/moved");
        _lifeCircle.error && warnLife(`error is Unsupported`, "behaviors/error");
        _lifeCircle.pageLifetimes && warnLife(`pageLifetimes is Unsupported`, "pageLifetimes");
        return item;
    });
    if (typeof behavior.mixins === "undefined") {
        behavior.mixins = mixins ;              
    } else {
        behavior.mixins = mixins.concat(behavior.mixins);
    }  
    return behavior;          
}

module.exports = {
    processTransformationComponent (_opts, options) {
        let fnApp = fnAppClass();
        options.properties = options.properties || {};
        _opts = Object.assign(_opts, options);
        _opts.props = Object({}, options.properties);
        handleProps(_opts);
        handleExternalClasses(_opts);
        let _life = compatibleLifetime(options); 
        if (options.properties) {
            collectObserver(options.properties);
        }       
        if (options.behaviors) {
            let mixins = [] ;
            options.mixins = makeBehaviors(_opts, _opts, mixins);
        }    
        _opts.onInit = function () {  
            processInit.call(this);
        };

        if (options.methods) {
            processMethods(options, _opts);
        }
        
        _opts.didMount = function () {
            getterData.call(this);
            _life.error && warnLife(`There is no error life cycle`, "error");
            _life.move && warnLife(`There is no moved life cycle`, "moved");
            _life.pageLifetimes && warnLife(`There is no page life cycle where the component resides,including(show,hide,resize)`, "pageLifetimes");
            this.props.genericSelectable && warnLife(`generic:selectable is Unsupported`, "generic"); 
            if (typeof this.triggerEvent !== 'function') {
                processTriggerEvent.call(this)
            };
            if (typeof this.getRelationNodes !== 'function') {              
                processgetRelationNodes.call(this)
            };
        };       
        _opts.didUpdate = function (...param) {          
            let res = processObservers(options,this)
            observersHandle(observersObj,param,this,res)
            observerHandle(observerObj,param,this)
        };
        fnApp.add('onInit',options.created);
        fnApp.add('onInit',options.onInit);
        fnApp.bind('onInit',_opts);
        fnApp.add('didMount',options.attached);
        fnApp.add('didMount',options.ready);
        fnApp.add('didUpdate', function () {
            handleAfterInit.call(this);          
        });
        fnApp.add('didUpdate',options.didUpdate);
        fnApp.bind('didUpdate', _opts); 
        fnApp.bind('didMount',_opts);
        fnApp.add('didUnmount',options.detached);
        fnApp.bind("didUnmount",options.didUnmount);
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

    Object.keys(opts.properties)
        .forEach(function (prop) {
            let val = opts.properties[prop];
            if (!val) {
                opts.props[prop] = val;
                return false;
            }
            if (val.hasOwnProperty('value')) {
                opts.props[prop] = val.value;
            } else if (val.type !== undefined) {
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

function handleData (otps = {}) {
  
}

function handleExternalClasses (opts = {}) {
    let arr = opts.externalClasses || [];
    let _class = [];
    arr.forEach(function (a) {
        _class.push(_transform(a));
    });

    opts.data = opts.data || {};

    opts.data.__classNames = _class;
    opts.data.__classes = '';

    function _transform (str = '') {
        str = str.replace(/-(\w)/g, function (...$) {
            return $[1].toUpperCase();
        });

        return str;
    }
    return opts;
}

function handleAfterInit () {
    let classStr = '';
    this.data.__classNames
        .forEach((key) => {
            classStr += this.props[key];
        });
    this.setData({
        _classes: classStr
    });
}

/**
 * data => props
 * @param {*} ctx 
 */
function getterData (ctx = {}) {
    ctx.props = ctx.props || {};
    Object.keys(ctx.props)
        .forEach(function (key) {
            Object.defineProperty(ctx.data, key, {
                get () {
                    return ctx.props[key];
                
                }
            });
        });
}