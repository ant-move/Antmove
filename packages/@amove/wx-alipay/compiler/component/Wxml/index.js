const { useReducer } = require('@amove/next');

useReducer({
    ComponentWxml(node, store) {
        this.addChild({
            type:'processWxml',
            body:node.body
        })
    },
    ComponentWxs(node){
        const {_node} = node.body;
        this.addChild({
            type:'Wxs',
            body:{
                path: _node.path + '.wxs',
                fullname: _node.projectPath
            }
        })
    },
    xmlElmentProp:{
        hook: 'after',
        body (node) {
            let {propKey, props, index, type, length} = node.body;
           if (propKey === 'is-inline') {
               this.$node.componentIsInline = true;
           }
        }
    },
    XmlTagElementMounted:{
        hook:"after",
        body (node) {  
            let {tagAst, deep, astLast} = node.body;
            let cName = this.$node.componentName
            if (cName && deep === 1 && astLast) {

                if (this.$node.componentIsInline) {
                    this.$node.content =  `<view class='${cName} {{className}}' style="display: inline-block;{{style}}">
                        ${this.$node.content}
                    </view>`
                }  else {
                    this.$node.content =  `<view class='${cName} {{className}}' style='{{style}}'>
                        ${this.$node.content}
                    </view>`
                }

            }         
        }
    } 
})