let prefix = 'saveChildRef';
module.exports = function (ast, _nodeId, config = {}) {
    ast = ast ? ast : {};
    let type = ast.type || "";
    let nodeId = _nodeId;
    let renderFnId = prefix + nodeId;

    ast.props = ast.props || {};

    if (config.component2) {
        ast.props.ref = createProp(renderFnId);
    } else {
        ast.props.onChildRef = createProp(renderFnId);
    }

    return new Node({
        type,
        nodeId: renderFnId
    });
};

function createProp ( value) {
    return {
        type: 'unknown',
        value: [value]
    };
}

class Node {
    constructor (opts = {}) {
        this.$id = opts.nodeId;
        this.$opts = opts;
        this.$children = [];
        this.$parent = null;

        this.$render = function () {};
    }

    appendChild (child) {
        this.$children.push(child);
        child.$parent = this;
    }

    removeChild (child) {
        this.$children = this.$children.filter(function (c) {
            return c.$id !== child.$id;
        });
    }

    toString () {
        let str = createNodeStr(this.$id, this.toChildString());
        return str;
    }

    toChildString () {
        let _childStr = '';
        this.$children.forEach( (child, i) => {
            _childStr += createNodeStr(child.$id, child.toChildString());
            if (i < (this.$children.length - 1)) {
                _childStr += ',';
            }
        });
        return _childStr;
    }

    toJsFile () {
        return `${this.toString()}`;
    }
}

function createNodeStr (id, childStr = '') {
    return `
    {
        id: '${id}',
        children: [${childStr}]
    }
    `;
}