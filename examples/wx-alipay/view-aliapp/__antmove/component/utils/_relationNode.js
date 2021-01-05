const utils = require('../../api/utils');
const {browserPath } = utils;
let posix = browserPath();

function processRelationPath (self, relation) {
    let from = self.is, to = relation;
    if (to[0] === '.') {
        to = '../' + to;
    }
    let _p = posix.join(from, to);
    return _p;
}

function _relationNode (node, info) {
    const { relationInfo, relation, _p} = info;

    // 触发父级组件的 relations
    let type = relationInfo.type;
    let parentType = '';
    if (type === 'parent') {
        parentType = 'child';
    } else if (type === 'ancestor') {
        parentType = 'descendant';
    }

    let parentCtx = node.$self;
    let childCtx = this;
    if (typeof parentCtx.props.theRelations === 'object') {
        Object.keys(parentCtx.props.theRelations)
            .forEach((relation)=> {
                let relationInfo = parentCtx.props.theRelations[relation];
                if (relationInfo.type === parentType) {
                    _relationNode.call(parentCtx, childCtx.$node, {   
                        relationInfo,
                        relation,
                        _p: processRelationPath(parentCtx, relation)
                    });

                    return true;
                }
        
            });
    }
  

    node = node.$self;
  
    this._storeRelationNodes = this._storeRelationNodes || {};
    if (this._storeRelationNodes[_p]) {
        this._storeRelationNodes[_p].push(node);
    } else {
        this._storeRelationNodes[_p] = [node];
    }
                    
    if (this._storeRelationNodes[relation]) {
        this._storeRelationNodes[relation].push(node);
    } else {
        this._storeRelationNodes[relation] = [node];
    }
    let ctx = this || {};
    this.getRelationNodes = function (_p) {
        this._storeRelationNodes = this._storeRelationNodes || {};
        return this._storeRelationNodes[_p]||[];
    };

  
    if (typeof relationInfo.linked === 'function') {

        relationInfo.linked.call(ctx, node);
    }
  
    if (typeof relationInfo.linkChanged === 'function') {
        let self = this;
        ctx._lifes = ctx._lifes || {};
        ctx._lifes.didUpdate = ctx._lifes.didUpdate || [];
        ctx._lifes.didUpdate.push(() => {
            relationInfo.linkChanged.call(self, node);
        });
    }
    if (typeof relationInfo.unlinked === 'function') {
        let self = this;
        ctx._lifes = ctx._lifes || {};
        ctx._lifes.didUnmount = ctx._lifes.didUnmount || [];
        ctx._lifes.didUnmount.push(() => {
            relationInfo.unlinked.call(self, node);
        });
    }
}


module.exports = _relationNode;