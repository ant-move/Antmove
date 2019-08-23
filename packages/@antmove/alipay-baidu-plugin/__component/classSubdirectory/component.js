
module.exports = {
    processTransformationComponent (_opts, options) {

        if (options.didUpdate) {
            console.warn("生命周期 didUpdate 不支持");
        }
        if (options.deriveDataFromProps) {
            console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
        }
        
        // 封装 百度端生命周期的处理
        makeLifes(_opts, options);
        _opts = Object.assign(_opts, options);
        
        makeEventObj (_opts, options);
        makeMixin (_opts, options);
        
        
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
        _opts[obj.target] = function () {
            if (obj.target==="created") {
                this.props = this.props || {};
                const Obj = {};
                // 处理用户的自定义
                Object.keys(this.props).map(key => {
                    if (this.properties[key]===undefined||this.properties[key]===null) {
                        Obj[key] = this.props[key];
                    }      
                });
                this.setData(Obj);
                this.props = this.properties;
                this.$page = {};
                this.$id = this.id;
                this.is = "";
                if (this.props.oldEvent) {
                    const that = this;
                    const oldEvent = JSON.parse(this.props.oldEvent);
                    oldEvent.map(key => {
                        that.props[key] = function (...res) {
                            let newkey = key.substr(2, key.length).toLowerCase();
                            if (res[0]&&res[0].detail) {
                                that.triggerEvent(newkey, res[0].detail);
                            } else {
                                that.triggerEvent(newkey, res);
                            }
                        }
                    })
                }
                
            }
            oname&&oname.call(this);
            tname&&tname.call(this);
        };
        delete options[obj.original];
        delete options[obj.target];
    });
}

function makeMixin (_opts, options) {
    if (options.mixins) {
        const behavourMade = (mixins=[]) => {
            let behavour = mixins.map( mixin => {
                if (mixin.mixins) {
                    mixin.behaviors =  behavourMade(mixin.mixins);   
                    delete mixin.mixins;
                }
                mixin.created = mixin.onInit;
                if (mixin.deriveDataFromProps) {
                    console.warn("生命周期 deriveDataFromProps 不支持更新前触发情景");
                }
                mixin.attached = mixin.deriveDataFromProps;
                mixin.ready= mixin.didMount;
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