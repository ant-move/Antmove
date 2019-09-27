module.exports = {
    connectNodes: function connectNodes (node, ast) {
       
        if (!node.$relationNode.$parent) {
            return false;
        }
        let parentNodeId = node.$relationNode.$parent.$id;
        let parentNodeRoute = node.$relationNode.$parent.$route;
        let index = node.$relationNode.$parent.$index;
    
        let refNumbers = (node.$self.props.refNumbers && node.$self.props.refNumbers.length) || 1;
        let parentArray = ast.$refNodes[parentNodeRoute]&&ast.$refNodes[parentNodeRoute][parentNodeId];
        let parent = null;
        if (parentArray && refNumbers > 1) {
            parentArray.forEach((_parent) => {
                if (_parent.$children.length !== refNumbers && !parent) {
                    parent = _parent;
                    return true;
                }
            });
        } else {
            parent = parentArray && parentArray[0];
            
        }
        if (parent) {
            node.setParent(parent, true); 
        }
    },
    setIfWatch

};
function setIfWatch (res) {
    my.setStorageSync({
        key: 'ifWatch',
        data: res
    });
}

