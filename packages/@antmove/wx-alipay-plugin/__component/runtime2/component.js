const utils = require('../../api/utils');
const { warnLife, fnAppClass, browserPath } = utils;
const createNode = require('./relation');
const processRelationHandle = require('./processRelation');
const Relations = require('../../api/relations');
const SelectComponent = require('./selectComponent');
let _id = 0;
const {
    getUrl,
    updateData,
    processMethods,
    processRelationPath,
    _relationNode,
    findRelationNode,
    compatibleLifetime,
    collectObserver,
    collectObservers,
    processTriggerEvent,
    observerHandle,
    handleProps,
    handleExternalClasses,
    handleAfterInit,
    mergeOptions
} = require('../utils')

function getInfo (key, obj) {
    let val = {};
    Object.keys(obj)
        .forEach(function (item) {
            if (key === item) {
                val = obj[item];
            } else if (key.indexOf(item) !== -1) {
                val = obj[item];
            }
        });
    return val;
}

function processRelations (ctx, relationInfo = {}) {
    let route = ctx.is;
    if (!my.canIUse('component2')) {
        route = JSON.parse(JSON.stringify(my.getStorageSync({ key: 'activeComponent' }))).data.is;
    }
    route = route.replace(/\/node_modules\/[a-z-]+\/[a-z-]+/, '');
    ctx.is = route;
    ctx.$id = _id++;
    if (route[0] === '/') {
        route = route.substring(1);
    }
    let info = getInfo(route, relationInfo);
    if (info) {
        processRelationHandle(info, function (node) {
            ctx.methods = ctx.methods || {};
            let methods = ctx.methods;
            if (node.$id === 'saveChildRef0') {
                methods[node.$id] = function () {
                    this.$antmove.relationApp = this.$antmove.relationApp || {
                        fns: []
                    };
                    node.$index = 0;
                    node.$route = route;
                    createNode.call(this, this, null, node);
                    this.$antmove.relationApp.fns.forEach((fn) => {
                        fn.call(this);
                    });

                    let _arr = [];
                    this.$antmove.relationApp.relationFns.forEach((fn)=>{
                        if (!fn.call(this)) {
                            _arr.push(fn);
                        }
                    });

                    this.$antmove.relationApp.relationFns = _arr;
                    if (this.onRelationsUpdate) {
                        this.onRelationsUpdate();
                    }
                };

                return false;
            }
            methods[node.$id] = function (ref) {
                this.$antmove = this.$antmove || {};
                this.$antmove.refFns = this.$antmove.refFns || {};
                this.$antmove.relationApp = this.$antmove.relationApp || {
                    fns: [],
                    relationFns: []
                };
                if (!this.$antmove.refFns[ref.$id]) {
                    this.$antmove.refFns[ref.$id] = true;
                    this.$antmove.relationApp.fns.push(
                        function fn () {
                            this.selectComponentApp.preProcesscomponents(ref);
                            let ctx = this;
                            ctx.$antmove = ctx.$antmove || {};
                            if (ctx.$antmove[node.$id] === undefined) {
                                ctx.$antmove[node.$id] = 0;
                            } else {
                                ctx.$antmove[node.$id] += 1;
                            }
                            node.$index = ctx.$antmove[node.$id];
                            node.$route = route;
                            createNode.call(ctx, ref, null, node);
                    
                        }
                    );

                    this.$antmove.relationApp.relationFns.push(function () {
                        return ref.handleRelations && ref.handleRelations();
                    });
                }

                if (this.saveChildRef0) {
                    this.saveChildRef0();
                }
                
            };
        });
    } else {
        console.warn('Missing nodes relation of ', route);
    }
}

function handleRelations () {
    let isFinished = true;
    if (this.props.theRelations) {
        Object.keys(this.props.theRelations)
            .forEach((relation)=> {
                let _p = processRelationPath(this, relation);
                let relationInfo = this.props.theRelations[relation];
                let nodes = null;
                if (relationInfo.type === 'child' || relationInfo.type === 'descendant') {
                    return false;
                }
                nodes = findRelationNode(this.$node, _p, relationInfo.type, true);
                if (!nodes || nodes[0] === undefined) {
                    
                    // 有一个 relations 节点没绑上就表示还未完成
                    isFinished = false;
                    return false;
                }

                nodes.forEach((n) => {
                    if (!n) {
                        // console.error('wrong relation reference of ', relationInfo);
                        // console.error('from: ', this.$node.$self.is, 'to: ', _p);
                        return false;
                    }
                    _relationNode.call(this, n, {
                        relationInfo,
                        _p,
                        relation
                    });
                });
  
                
            });
    }

    return isFinished;
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


function processObservers (observersObj, options, param) { 
    if (options.observers) {  
        collectObservers.call(this, observersObj, options, param);
    } 
}

function processInit () {
    getUrl();
    this._currentEvent = {};
    this.setData({
        theId: this.$id
    });
}


function processIntersectionObserver (context) {
    context.createIntersectionObserver = function (...p) {
        return my.createIntersectionObserver&&my.createIntersectionObserver(...p);
    };
}

function preProcesscomponents () {
    if (this.props.id) {
        this.$node.addComponentNodeId(this.props.id, this);
    }
    if (this.props.className) {
        this.$node.addComponentNode(this.props.className, this);
    }
}

/**
 * 
 * @param {*} behavior 
 * @param {*} _opts 
 * @param {*} mixins 
 */

module.exports = {
    processTransformationComponent (_opts, options) {
        let fnApp = fnAppClass();
        options.properties = options.properties || {};
        let behaviors = options.behaviors || [];
        let mixins = options.mixins || [];
        delete options.behaviors;
        delete options.mixins;
        let retMixins = {};
        
        processBehavior(retMixins, behaviors);
        processBehavior(retMixins, mixins); 
        mergeOptions(retMixins, options);
        
        Object.keys(options)
            .forEach(function (key) {
                _opts[key] = options[key];
            });
        _opts.observerObj = {};  
        _opts.observersObj = {}; 

        handleProps(_opts);
        handleExternalClasses(_opts);

        let _life = compatibleLifetime(options); 
        if (options.properties) {
            collectObserver(_opts.observerObj, options.properties, options);
        }

        if (_opts.methods) {
            processMethods(_opts);
        }
        processRelations(_opts, Relations);

        let didMount = function () {
            /**
             * for child ref
             * 
             * 当父级组件挂载后再执行父级组件传递下来的属性回调函数
             */
            this.setData({
                isMounted: true
            });
            _life.error && warnLife(`There is no error life cycle`, "error");
            _life.move && warnLife(`There is no moved life cycle`, "moved");
            _life.pageLifetimes && warnLife(`There is no page life cycle where the component resides,including(show,hide,resize)`, "pageLifetimes");
            this.props.genericSelectable && warnLife(`generic:selectable is Unsupported`, "generic"); 
            if (typeof this.triggerEvent !== 'function') {
                processTriggerEvent.call(this);
            }
        };      
        fnApp.add('onInit', function () {
            processIntersectionObserver(this);
        });

        fnApp.add('deriveDataFromProps', function () {
        });
        
        fnApp.add('didMount', didMount);
        fnApp.add('onInit', options.created);
        fnApp.insert('onInit', function () {
            this.getRelationNodes = function () {
                return [];
            };
            this.selectComponentApp = new SelectComponent(this);

            let self = this;
            this.handleRelations = function () {
                handleRelations.call(self);
            };
            this.properties = {
                ..._opts.properties
            };
            processInit.call(this, _opts, options, _life, fnApp);
            updateData.call(this);
            this.selectComponentApp.connect();

            observerHandle(_opts.observerObj, [_opts.props, this.data], this , true);
        });
        fnApp.bind('onInit', _opts);
        fnApp.add('didMount', _opts.attached);
        fnApp.add('didMount', _opts.ready);
        fnApp.insert('didMount', function () {
            if (!my.canIUse('component2')) {
                _opts.onInit.call(this);
            }
        });
        

        let didUpdate = function (...param) { 
            if (this.props._parent_ref && !this.isInitRelation) {

                if (this.props.onChildRef) {
                    this.isInitRelation = true;
                    this.props.onChildRef(this);
                }
            }
            updateData.call(this, param);

            processObservers.call(this, _opts.observersObj, options, param);
            observerHandle(_opts.observerObj, param, this);
        };
        fnApp.add('didUpdate', didUpdate);
        fnApp.add('didUpdate', function () {
            handleAfterInit.call(this);        
        });

        fnApp.bind('deriveDataFromProps', _opts);
        fnApp.bind('didUpdate', _opts); 
        fnApp.bind('didMount', _opts);
        fnApp.add('didUnmount', options.detached);
        fnApp.add('didUnmount', function () {
            if (this.$node) {
                this.$node.parent.removeChild(this.$node);
                let refId = this.$node.$relationNode.$id;
                this.$antmove[refId]--;
            }
        });
        fnApp.bind("didUnmount", options.didUnmount);
    }
};


function handleData (otps = {}) {
  
}



/**
 * behavior
 */
function processBehavior (_opts = {}, opts) {
    if (Array.isArray(opts)) {
        opts.forEach(function (item) {
            if (typeof item === 'object') {
                _process(_opts, item);
            }
        });
    } else {
        if (typeof opts === 'object') {
            _process(_opts, opts);
        }
    }
  
    function _process (__opts = {}, opt = {}) {
        if (opt.behaviors) {
            processBehavior(__opts, opt.behaviors);
            delete opt.behaviors;
        }
  
        if (opt.mixins) {
            processBehavior(__opts, opt.mixins);
            delete opt.mixins;
        }
        mergeOptions(opt, __opts);
    }
}
  