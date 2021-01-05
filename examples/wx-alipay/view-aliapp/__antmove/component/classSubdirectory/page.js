const utils = require('../../api/utils');
const { warnLife } = utils;
const config = require('../../api/config');
const createNode = require('./relation');
const Relations = require('../../api/relations');
const processRelationHandle = require('./processRelation');
const { connectNodes } = require('./utils');
const selectComponent = require('./selectComponent');
const {
    watchShakes,
    getUrl
} = require('../utils');

module.exports = {
    processTransformationPage (_opts, options) {
        _opts = Object.assign(_opts, options);

        _opts.onLoad = function (res) {
            this.selectComponentApp = new selectComponent(this);
            this.selectComponentApp.connect();
            // 初始化节点树
            createNode.call(this, null, null, null, true);
            processRelations(this, Relations);
            if (typeof options.data === 'function') {
                options.data = options.data();
            }

            getUrl();
            if (config.env === "development") {
                watchShakes();
            } 
            if (options.onResize) {
                warnLife("There is no onResize life cycle", "onResize");
            }
            if (options.onLoad) {
                options.onLoad.call(this, res);
            }
        };

        _opts.onReady = function (param) {
            let ast = this.$node.getRootNode();
            processRelationNodes(ast);

            if (options.onReady) {
                options.onReady.call(this, param);
            }
            ast.isPageReady = true;
        };
    }
};


function processRelationNodes (ast = {}) {
    let $nodes = ast.$nodes;
  
    /**
     * componentNodes onPageReady
     */
    Object.keys($nodes)
        .forEach(function (item) {
            let node = $nodes[item];
            connectNodes(node, ast);
        
            if (node.$self && typeof node.$self.onPageReady === 'function') {
                node.$self.onPageReady();
            }
        });

    ast.mountedHandles
        .forEach(function (fn, i) {
            fn();
        });
    ast.mountedHandles = [];
}


function processRelations (ctx, relationInfo = {}) {
    let route = ctx.route;
    route = route.replace(/\/node_modules\/[a-z-]+\/[a-z-]+/, '')

    if (route[0] !== '/') route = '/' + route;
    
    let info = relationInfo[route] || relationInfo[route.substring(1)];
    if (info) {
        processRelationHandle(info, function (node) {
            let id = node.$id;
            if (id === 'saveChildRef0') {
                ctx[id] = function () {};
                node.$index = 0;
                node.$route = route;
                createNode.call(ctx, ctx, null, node);
                return false;
            }
            ctx[id] = function (ref) {
                if (!ref) return false;
                ctx.$antmove = ctx.$antmove || {};
                if (ctx.$antmove[id] === undefined) {
                    ctx.$antmove[id] = 0;
                } else {
                    ctx.$antmove[id] += 1;
                }
                ctx.selectComponentApp.preProcesscomponents(ref);
                node.$index = ctx.$antmove[id];
                node.$route = route;
                createNode.call(ctx, ref, null, node);
            };
        });
    } else {
        console.warn('Missing nodes relation of ', route);
    }
}