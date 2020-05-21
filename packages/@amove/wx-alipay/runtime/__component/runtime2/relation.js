let id = 0;
const { connectNodes } = require("./utils");
let astCache = {};

function createAstData () {
    let RelationAst = {
        $refNodes: {},
        $nodes: {},
        $page: null,
        current: null,
        createArray: [],
        destoryArray: [],
        mountedHandles: [],
        componentNodes: {}
    };

    return RelationAst;
}
function createNode (ctx, isRoot = false) {
    this.$id = id++;
    this.$children = [];
    this.setCtx(ctx, isRoot);
}

createNode.prototype = {
    setCtx (ctx, isRoot = false) {
        this.$self = ctx;

        if (isRoot) {
            ctx.$rootNode = this;
        } else {
            ctx.$node = this;
        }
    },
    getRootNode () {
        let ctx = this.$self;
        let cacheId = ctx.$page
            ? ctx.$page.$id || ctx.$page.$viewId
            : ctx.$viewId || ctx.$id;
        return astCache[cacheId];
    },
    setParent (parent, bool = false) {
        if (this.$parent) return false;

        if (bool) {
            parent.insertChild(this);
        } else {
            this.$parent = parent;
            parent.appendChild(this);
        }
    },
    appendChildren (children) {
        children.forEach(child => {
            this.appendChild(child);
        });
    },
    destory () {
        let index = this.$relationNode.$index;
        this.$parent.$children.splice(index, 1);
    },
    appendChild (child) {
        if (child.$parent) return false;
        this.$children.push(child);
        child.$parent = this;
    },
    insertChild (child) {
        this.$children.unshift(child);
        child.$parent = this;
    },
    removeChld (child) {
        if (this.$self && this.$self.selectComponentApp && child.$self) {
            this.$self.remove(child.$self);
        }
        this.$children = this.$children.filter(function (el) {
            return el.$id !== child.$id;
        });
    }
};

module.exports = function (
    node,
    cb = () => {},
    relationNode,
    bool = false,
    _bool = false
) {
    let RelationAst = {};
    /**
   *  dd 下页面 id 为 $viewId
   * */
    let cacheId = this.$page
        ? this.$page.$id || this.$page.$viewId
        : this.$viewId || this.$id;
    if (_bool) {
        return astCache[cacheId];
    }

    if (bool || !astCache[cacheId]) {
        astCache[cacheId] = createAstData();
        return astCache[cacheId];
    }

    let _relationData = {};
    function initData (isComponent = false) {
        let _ctx = this;
        _relationData = createAstData();
        if (isComponent) {
            _ctx = this.$page;
        }
        _ctx.$antmove = _ctx.$antmove || {};
        _ctx.$antmove.relationData = _relationData;
        _ctx.$antmove.astCache = astCache;
    }
    if (!this.$page) {
        initData.call(this);
    } else {
        if (!this.$page.$antmove
            || !this.$page.$antmove.relationData) {
            initData.call(this, true);
        }
        _relationData = this.$page.$antmove.relationData;
        astCache =  this.$page.$antmove.astCache;

    }

    RelationAst = astCache[cacheId];
    let wrapNode = null;
 
    /**
   *  二次 create 处理
   *  */

    let isRootNode = false;
    if (relationNode.$id === "saveChildRef0") {
        isRootNode = true;
    }
    if (
        (node.$node && !isRootNode) 
        || (node.$rootNode && isRootNode)) {
            
        if (isRootNode) {
            wrapNode = node.$rootNode;
        } else {
            wrapNode = node.$node;
        }
    } else {
      
        if (isRootNode) {
            wrapNode = new createNode(node, true);
        } else {
            wrapNode = new createNode(node);
        }

        let route = relationNode.$route;

        RelationAst.$page = wrapNode;
        /**
     * component
     */
        wrapNode.$relationNode = relationNode;
        RelationAst.$nodes[node.$id] = wrapNode;
        RelationAst.$refNodes[route] = RelationAst.$refNodes[route] || {};
        let componentNodes = RelationAst.$refNodes[route];
        RelationAst.$refNodes[route][relationNode.$id] =
      RelationAst.$refNodes[route][relationNode.$id] || [];
        componentNodes[relationNode.$id].push(wrapNode);
    }

    connectNodes(wrapNode, RelationAst);

    cb && cb(RelationAst);
    return RelationAst;
};
