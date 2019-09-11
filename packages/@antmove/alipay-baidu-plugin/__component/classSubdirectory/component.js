
module.exports = {
    processTransformationComponent (_opts, options) {
        options = makeMixin (options);
        if (options.deriveDataFromProps) {
            console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
        }
        
        // 封装 百度端生命周期的处理
        _opts = Object.assign(_opts, options);
        _opts.props = _opts.props || {};
        _opts.properties =  Object.assign( {}, _opts.props);
        
       
        makeLifes(_opts, options);
        addObserver(_opts);
        makeEventObj (_opts, options);
    }
};

function makeLifes (_opts, options) {
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
        if (obj.target==="created") {
            _opts[obj.target] = function () {
                if (this.didUpdate) {
                    const setData = this.setData;
                    this.setData = (obj, cb=()=>{} ) => {
                        let proData = JSON.stringify(this.data);
                        return setData.call(this, obj, ()=> {
                            this.didUpdate(this.props, JSON.parse(proData));
                            cb();
                        });
                    };
                }
                const initData = {};
                Object.keys(this.props).map(key => {
                    if (this.properties[key]===undefined || this.properties[key]===null) {
                        initData[key] = this.props[key];
                    }
                });
                this.setData(initData);
                this.props = Object.assign(this.props, this.properties);
                this.$page = {};
                this.$id = this.id;
                this.is = "";
                const properties = {... this.properties};
                if (properties['antmoveEvent']) {
                    const antmoveEvent = JSON.parse(properties['antmoveEvent']);
                    antmoveEvent.forEach(key => {
                        this.props[key] = (...res) => {
                            let newkey = key.substr(2, key.length).toLowerCase();
                            if (res[0]&&res[0].detail) {
                                this.triggerEvent(newkey, res[0].detail);
                            } else {
                                this.triggerEvent(newkey);
                            }
                        };
                    });
                }
                oname&&oname.call(this);
                tname&&tname.call(this);
            };
        } else {
            _opts[obj.target] = function () {
                oname&&oname.call(this);
                tname&&tname.call(this);
            };
        }
        
        delete options[obj.original];
        delete options[obj.target];
    });
}

function makeMixin ( options) {
    if (options.mixins) {
        options.mixins.forEach( mixin => {
            const objArr = ['data', 'props', 'methods'];
            Object.keys(mixin).forEach(key => {
                if (objArr.indexOf(key)!==-1) {
                    options[key] = options[key]|| {};
                    Object.assign(options[key], mixin[key]);
                } else {
                    if (!options[key]) {
                        options[key] = mixin[key];
                    } else if (typeof options[key] === 'function' &&typeof mixin[key] === 'function' ) {
                        const swanFn = options[key];
                        options[key] = function (...res) {
                            mixin[key].call(this, ...res);
                            swanFn.call(this, ...res);
                        };   
                    }
                }
            });
        });
    }
    return options;
}

function makeEventObj (_opts, options) {
    if (options.methods) {
        const methods = options.methods;
        const newMethods = {};
        Object.keys(methods).forEach(key => {
            newMethods[key] =  function (...res) {
                if (res[0]&&res[0].target) {
                    res[0].target.dataset ={ ...res[0].currentTarget.dataset}||{};
                    return methods[key].call(this, res[0]);
                } 
                return methods[key].apply(this, res);
                
                
            };    
        });
        _opts.methods = newMethods;
    }
}

function addObserver (obj) {
    if (!obj.didUpdate||typeof obj.didUpdate!=='function') {
        return false;
    }
    const propsInit =JSON.parse( JSON.stringify(obj.props));
    obj.properties && Object.keys(obj.properties).map(key => {

        const observer = function ( newVal, oldVal) {
            const props = {...this.props};
            if ( typeof props[key] === 'object') {
                const objstr = JSON.stringify(this.props);
                props[key] = JSON.parse(objstr);
            }
            this.props[key] = newVal;
            if (typeof oldVal !=='object') {
                if (propsInit[key] !== oldVal) {
                    obj.didUpdate.call(this, props, obj.data);
                }
            } else {
                if (JSON.stringify(propsInit[key]) !== JSON.stringify(oldVal)) {
                    obj.didUpdate.call(this, props, obj.data);
                }
            }
            
        };
        if (obj.properties[key]!==undefined||obj.properties[key]!==null) {
            if (obj.properties[key] instanceof Array) {
                obj.properties[key] = {
                    type: Array,
                    value: obj.properties[key],
                    observer: observer
                };
               
            } else {
                let dataType = typeof obj.properties[key];
                obj.properties[key] = {
                    type: testDataType(dataType),
                    value: obj.properties[key],
                    observer: observer
                };
            }
        }
        
    });
    
}



function testDataType (a) {

    const dataType = {
        object: Object,
        number: Number,
        'function': Function,
        string: String,
        'null': null,
        boolean: Boolean
    };
    if (dataType[a]) {
        return dataType[a];
    } 
    return Object;
    
}