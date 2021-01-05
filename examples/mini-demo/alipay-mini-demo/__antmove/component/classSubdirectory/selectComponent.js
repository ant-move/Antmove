function selectComponent (ctx) {
    this.$ctx = ctx;
    this.$nodes = {};
    this.$cacheNodes = {};
}

selectComponent.prototype = {
    _addComponentNode (className, ctx) {
        className = '.' + className;
        let componentNodes = this.$nodes;
        if (componentNodes[className]) {
            componentNodes[className].push(ctx);
        } else {
            componentNodes[className] = [ctx];
        }
        this.$cacheNodes[ctx.$id] = {className};

    },
    addComponentNodeId (id, ctx) {
        id = '#' + id;
        let componentNodes = this.$nodes;
        if (componentNodes[id]) {
            componentNodes[id].push(ctx);
        } else {
            componentNodes[id] = [ctx];
        }
        this.$cacheNodes[ctx.$id] = {id};
    },
    addComponentNode (className = '', ctx) {
        let classNameArray = className.split(/\s+/g);
        classNameArray.forEach((classNameStr) => {
            this._addComponentNode(classNameStr, ctx);
        });
    },
    selectComponent (className) {
        let componentNodes = this.$nodes;
        return componentNodes[className] && componentNodes[className][0];
    },
    selectComponents (className) {
        let componentNodes = this.$nodes;
        return componentNodes[className];
    },
    preProcesscomponents,
    connect () {
        let ctx = this.$ctx;
        let self = this;
        ctx.selectComponent = function (...p) {
            if (self.selectComponent(...p) && self.selectComponent(...p)._this !== undefined) {
                return self.selectComponent(...p)._this
            } else {
                return self.selectComponent(...p);
            }          
        }; 
        ctx.selectAllComponents = function (...p) {
            let componentsArr = self.selectComponents(...p) || [];
            let newArr = [];
            componentsArr.forEach (function (item) {
                if (item._this !== undefined) {
                    newArr.push(item._this);
                } else {
                    newArr.push(item);
                }
            })
            return newArr;
        };
    }
};

function preProcesscomponents (ctx) {
    let selectorObj = this.$cacheNodes[ctx.$id];
    selectorObj&&Object.keys(selectorObj)
        .forEach((item)=> {
            this.$nodes[item] = [];
        });
    if (ctx.props.id) {
        this.addComponentNodeId(ctx.props.id, ctx);
    }
    if (ctx.props.className) {
        this.addComponentNode(ctx.props.className, ctx);
    }
}

module.exports = selectComponent;