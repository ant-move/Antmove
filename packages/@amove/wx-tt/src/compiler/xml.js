const { useReducer } = require("@amove/next");
const { computedIndexSpaces } = require('./utils');

useReducer({
    ...require('./props/index'),
    XmlTagElement(node, store) {
        let { tagAst, num, projectPath, deep, refRender } = node.body;
        let { type } = tagAst;
        let _parentRenderNode = refRender;
        const appjson = store.config.preAppData.appJson;
        appjson.usingComponents = appjson.usingComponents || {};
        this.addChild({
            type: "xmlElmentTagName",
            key: "xmlElmentTagName",
        });
        // 处理自定义组件名字
        if (tagAst.type !== "textContent") {
            this.$node.content += `${computedIndexSpaces(deep)}<${tagAst.type}`;
            this.addChild({
                type: "xmlElementProps",
                key: "xmlElementProps" + num,
                body: {
                    tagAst,
                    num,
                    projectPath,
                },
            });
            if (Array.isArray(tagAst.children) && tagAst.children.length) {
                deep++;
                this.addChild({
                    type: "xmlElementChildren",
                    key: "xmlElementChildren" + num,
                    body: {
                        ast: tagAst.children,
                        num,
                        projectPath,
                        deep,
                        refRender: _parentRenderNode,
                    },
                });
            }
        } else if (tagAst.type === "textContent") {
            deep++;
            this.$node.content += `${computedIndexSpaces(deep)}${tagAst.value}\n`;
        }
    },
    processOrderProp (node) {
        let {props, prop} = node.body;
        props[prop].value[0] = props[prop].value[0].replace(/\.wxml/g, '.ttml').replace(/\.wxs/g, '.sjs');
        if (/wx:/.test(prop)) {
            let newKey  = prop.replace(/wx:/, 'tt:');
            props[newKey] = props[prop];
            delete props[prop]
        }
    }
});
