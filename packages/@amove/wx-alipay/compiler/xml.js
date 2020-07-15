const { useReducer } = require("@amove/next");
let _componentMap = require("./config/componentsInfo/index").descObject;
const { isSingle, createComponentNode, computedIndexSpaces, transformStr } = require('./utils');
const path = require("path");
useReducer({
    ...require('./props/index'),
    XmlTagElement(node, store) {
        let { tagAst, num, projectPath, deep, refRender } = node.body;
        let { type } = tagAst;
        let tagInfo = _componentMap[type];
        let _parentRenderNode = refRender;
        const nodes = store.config.preAppData.nodes;
        const appjson = store.config.preAppData.appJson;
        const Config = store.config.preAppData.config;
        appjson.usingComponents = appjson.usingComponents || {};
        this.addChild({
            type: "xmlElmentTagName",
            key: "xmlElmentTagName",
        });
        // 处理自定义组件名字
        if (
            tagInfo &&
            tagInfo.type === 5 &&
            nodes[projectPath] && 
            nodes[projectPath].json.usingComponents &&
            !nodes[projectPath].json.usingComponents[type] &&
            appjson.usingComponents &&
            !appjson.usingComponents[type]
        ) {
            tagAst.type = tagInfo.tagName || tagAst.type;
        }

        if (tagInfo && tagInfo.type === 1) {
            if (tagAst.type === "wxs" && tagAst.children.length) {
                let moduleName = tagAst.props.module.value[0] + ".sjs";
                let relativePath = this.$node.dist.split(path.sep);
                relativePath = relativePath[relativePath.length - 1];
                moduleName = relativePath + moduleName;
                let sjsPath = path.join(this.$node.dist, `../${moduleName}`);
                tagAst.props.src = {
                    type: "double",
                    value: ["./" + moduleName],
                };
                this.addChild({
                    type: "WxsImportExpression",
                    body: {
                        dist: sjsPath,
                        content: tagAst.children[0].value,
                    },
                });
                tagAst.children = [];
            }
            tagAst.type = tagInfo.tagName || tagAst.type;
        }

        if (tagInfo && tagInfo.props) {
            for (let _prop in tagInfo.props) {
                let propInfo = tagInfo.props[_prop];
                if (!tagAst.props[_prop]) continue;
                // missing
                if (propInfo.type === 0) {
                    delete tagAst.props[_prop];
                } else if (propInfo.type === 1) {
                    let _value = tagAst.props[_prop];
                    delete tagAst.props[_prop];
                    tagAst.props[propInfo.key] = _value;
                }
            }
        }

        if (
            (nodes[projectPath] &&
                nodes[projectPath].json.usingComponents &&
                nodes[projectPath].json.usingComponents[type]) ||
            (appjson.usingComponents && appjson.usingComponents[type])
        ) {
            tagAst.type = transformStr(tagAst.type);
            _parentRenderNode = createComponentNode(
                tagAst,
                this.$node.nodeId,
                Config
            );
            ++this.$node.nodeId;
            this.$node.ifRender && refRender.appendChild(_parentRenderNode);
        }
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
            this.$node.content += `${tagAst.value}\n`;
        }
    },
    processOrderProp (node) {
        let {props, prop, type} = node.body;
        props[prop].value[0] = props[prop].value[0].replace(/\.wxml/g, '.axml')
                            .replace(/\.wxs/g, '.sjs');
        if (type === 'import' && prop === 'src') {
            let importValue = props[prop].value;
            if (importValue[0] && importValue[0][0] !== ('.' || '/')) {
                importValue[0] = `./${importValue[0]}`;
            }
        }
        if (prop === 'wx:key' && !/{{/.test(props[prop].value[0])) {
            props['a:key'] = {
                type : props[prop.type],
                value : [`{{${props[prop].value[0]}}}`]
            }
            delete props[prop];
        } else if (prop === 'wx:for-items') {
            props['a:for'] = props[prop];
            delete props[prop];
        } else if (prop === 'wx:else' || prop === 'a:else') {
            props['a:else'] = {
                type: props[prop].type,
                value: null
            }
            delete props[prop]
        } else if (/wx:/.test(prop)) {
            let newKey  = prop.replace(/wx:/, 'a:');
            props[newKey] = props[prop];
            delete props[prop]
        }
    }
});
