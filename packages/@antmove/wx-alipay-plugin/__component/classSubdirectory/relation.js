let id = 0;
const { connectNodes } = require('./utils');

let RelationAst = {
    $refNodes: {},
    $nodes: {},
    $page: null,
    current: null,
    createArray: [],
    destoryArray: [],
    mountedHandles: [],
    componentNodes: {},
    $refNodes: {}
};

function createNode (ctx) {
    this.$self = ctx;
    ctx.$node = this;
    this.$id = id++;
    this.$children = [];
}

createNode.prototype = {
    getRootNode () {
        return RelationAst;
    },
    setParent (parent) {
        this.$parent = parent;
        parent.appendChild(this);
    },
    appendChildren () {
        this.$children
            .forEach((child) => {
                this.appendChild(child);
            });
    },
    destory () {
        let index = this.$relationNode.$index;
        this.$parent.$children.splice(index, 1);
    },
    appendChild (child) {
        this.$children.push(child);
        child.$parent = this;
    },
    removeChld (child) {
        this.$children = this.$children
            .filter(function (el) {
                return el.$id !== child.$id;
            });
    },
    _addComponentNode (className, ctx) {
        className = '.' + className;
        let componentNodes = this.getRootNode().componentNodes;
        if (componentNodes[className]) {
            componentNodes[className].push(ctx);
        } else {
            componentNodes[className] = [ctx];
        }
    },
    addComponentNodeId (id, ctx) {
        id = '#' + id;
        let componentNodes = this.getRootNode().componentNodes;
        if (componentNodes[id]) {
            componentNodes[id].push(ctx);
        } else {
            componentNodes[id] = [ctx];
        }
    },
    addComponentNode (className = '', ctx) {
        let classNameArray = className.split(/\s+/g);
        classNameArray.forEach((classNameStr) => {
            this._addComponentNode(classNameStr, ctx);
        });
    },
    selectComponent (className) {
        let componentNodes = this.getRootNode().componentNodes;
        return componentNodes[className] && componentNodes[className][0];
    },
    selectComponents (className) {
        let componentNodes = this.getRootNode().componentNodes;
        return componentNodes[className];
    }
};

function initRootNode () {
    /**
   * 页面节点信息初始化
   */
    RelationAst = {
        $nodes: {},
        $page: null,
        current: null,
        createArray: [],
        destoryArray: [],
        mountedHandles: [],
        componentNodes: {},
        $refNodes: {}
    };
    return RelationAst;
}

function getRootNode () {
    return RelationAst;
}
module.exports = function (node, cb = () => {}, relationNode, bool =false, _bool = false) {
    if (_bool) {
        return getRootNode();
    }
    if (bool) {
        return initRootNode();
    }
    let wrapNode = new createNode(node);
    let route = relationNode.$route;

    RelationAst.$page = wrapNode;
    /**
       * component
       */
    wrapNode.$relationNode = relationNode;
    RelationAst.$nodes[node.$id] = wrapNode;
    RelationAst.$refNodes[route] = RelationAst.$refNodes[route] || {};
    let componentNodes = RelationAst.$refNodes[route];
    RelationAst.$refNodes[route][relationNode.$id] = RelationAst.$refNodes[route][relationNode.$id] || [];
    componentNodes[relationNode.$id].push(wrapNode);

    if (RelationAst.isPageReady) {
        setTimeout(()=>{
            connectNodes(wrapNode, RelationAst);
            RelationAst.mountedHandles
                .forEach(function (fn, i) {
                    if (wrapNode.$parent) {
                        fn();
                    } else {
                        setTimeout(()=>{
                            fn();
                        }, 0);
                    }
                });
            RelationAst.mountedHandles = [];

        }, 0);
    }
    cb && cb(RelationAst);
    return RelationAst;
};
