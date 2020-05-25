let id = 0;
const { connectNodes } = require('./utils');
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
        componentNodes: {},
    };

    return RelationAst;
}
function createNode (ctx) {
    this.$self = ctx;
    ctx.$node = this;
    this.$id = id++;
    this.$children = [];
}

createNode.prototype = {
    getRootNode () {
        let ctx = this.$self;
        let cacheId = ctx.$page ? ctx.$page.$id : ctx.$id;

        return astCache[cacheId];
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
    removeChild (child) {
        this.$children = this.$children
            .filter(function (el) {
                return el.$id !== child.$id;
            });
    }
};


module.exports = function (node, cb = () => {}, relationNode, bool =false, _bool = false) {
    let RelationAst = {};
    let cacheId = this.$page ? this.$page.$id : this.$id;
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