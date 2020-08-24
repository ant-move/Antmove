const { useReducer } = require('@amove/next');
const path = require('path');
const { isSingle, createComponentNode, computedIndexSpaces, transformStr } = require('./utils');
// let _componentMap = require("../config/componentsInfo/index").descObject;
global.appNodesTreeStr = `module.exports = {\n`;

function generateRenderFn (route, renderStr = '') {
    
    appNodesTreeStr += `'${route}': ${renderStr},`;
}

module.exports = {
    processWxml (node, store) {
        const Config = store.config.preAppData.config;
        let {_node, dirpath} = node.body;
        let xmlOutput = path.join(store.config.output, _node.projectPath + Config.ex.xml);
        let nodes = store.config.preAppData.nodes;
        this.$node.dist = xmlOutput;
        this.$node.content = '';
        this.$node.componentName = _node.componentName;
        this.$node.projectPath = _node.projectPath;
        Object.keys(nodes)
            .forEach(p => {
                let _p = path.join(store.config.entry, p);
                let _np = path.join(store.config.entry, _node.projectPath);
                if (_p === _np) {
                    let xmlAst = nodes[p].ast;
                    let _type = nodes[p].type;
                    let nodeNum = -1;
                    xmlAst.forEach((x, i) => {
                        if (x.type !== 'import') {
                            nodeNum = i;
                            return
                        }
                    })
                    this.$node.nodeId = 0;
                    let ifRender =  (nodes[p].isHasComponents || _type === 'Page')&& nodeNum !== -1; 
                    let refRender = ifRender ? createComponentNode(xmlAst[nodeNum], this.$node.nodeId, Config): {};
                    ++this.$node.nodeId;
                    this.$node.refRender = refRender;
                    this.$node.ifRender = ifRender;
                    this.addChild({
                        type: 'processXmlAst',     
                        body: {
                            ast: xmlAst,
                            num: 0,
                            deep: 1,
                            projectPath: p,
                            isInit: true,
                            refRender
                        }                  
                    });
                    if (store.config.env === 'development') {
                        this.addChild({
                            type: 'compilerLog',
                            body: {
                                _type: 'getTemplateData',
                                opts: {
                                    fileInfo: {
                                        path: _node.path + '.wxml',
                                        ast: xmlAst
                                    }
                                }
                            }
                        })
                    }
                }
            });
            
    },
    processXmlAst (node, store) {
        let { ast, num, projectPath, deep, isInit, refRender} = node.body;
        if (Array.isArray(ast)) {
            ast.forEach((tagAst, i) => {
                let body = {
                    tagAst,
                    num,
                    projectPath,
                    deep,
                    refRender
                };
                num++;
                if (isInit && i === ast.length -1) {
                    body.astLast = true;
                }
                this.addChild({
                    type: 'XmlTagElement',
                    key: 'XmlTagElement' + num,
                    body
                });
            });
        }
        
    },
    XmlTagElement (node,store ) {
        },
    xmlElementProps (node, store) {
        let {tagAst, num, projectPath} = node.body;
        let {props, type} = tagAst;
        if (!Object.keys(props).length) {
            this.addChild({
                type: 'generateTagProps',
                key: 'generateTagProps' + num,
                body: {
                    noProps: true,
                    type
                }
            });
        }
        Object.keys(props)
            .forEach((p, i) => {
                this.addChild({
                    type: 'xmlElmentProp',
                    key: 'xmlElmentProp' + i,
                    body: {
                        propKey: p,
                        props,
                        index: i,
                        length: Object.keys(props || {}).length - 1,
                        type: tagAst.type,
                    }
                });
            });
    },
    xmlElementChildren (node, store) {
        let {ast, num, projectPath, deep, refRender} = node.body;
        this.addChild({
            type: 'processXmlAst',
            key: 'processXmlAst' + num,
            body: {
                ast, 
                num, 
                projectPath,
                deep, 
                refRender
            }
        });
    },
    xmlElmentProp (node, store) {
        let {propKey, props, index, type, length} = node.body;
        let prop = propKey;
        if (props[prop].value && props[prop].type === 'unknown') {
            let singleIndex = props[prop].value[0].indexOf("'");
            let doubleIndex = props[prop].value[0].indexOf('"');
            singleIndex = singleIndex > -1 ? singleIndex : -1;
            doubleIndex = doubleIndex > -1 ? doubleIndex : -1;

            if (doubleIndex > singleIndex) {

                props[prop].type = 'single';
            } else {
                props[prop].type = 'double';
            }
        }
        this.addChild({
            type: 'processOrderProp',
            key: 'processOrderProp' + index,
            body: {
                props,
                prop,
                type
            }
        });
        this.addChild({
            type: 'processEvents',
            key: 'processEvents' + index,
            body: {
                props,
                prop
            }
        });
        if (index === length) {
            this.addChild({
                type: 'generateTagProps',
                key: 'generateTagProps' + index,
                body: {
                    props,
                    type
                }
            });
        }
    },
    generateTagProps (node, store) {
        let content = '';
        let {props, type, noProps} = node.body;
        let single = isSingle(type);
        if (noProps) {
            if (! single) {
                content += `>${type === 'text'? '' : '\n'}`;
            } else if (single) {
                content += `/>\n`;
            }
        } else {
            Object.keys(props)
                .forEach((p, i) => {
                    let value = props[p].value;
                    let valueType = props[p].type === 'single' ? `'` : `"`;
                    if (value && Array.isArray(value)) {
                        content += ` ${p}=${valueType}${value[0]}${valueType} `;
                    } else {
                        content += ` ${p} `;
                    }
                    
                    if (i === Object.keys(props).length-1 && !single) {
                        content += `>${type === 'text'? '' : '\n'}`;
                    } else if (i ===Object.keys(props).length-1 && single) {
                        content += `/>\n`;
                    }
                });
        }
        
        this.$node.content += content;
    },
    XmlTagElementMounted (node) {
        let {tagAst, deep, astLast} = node.body;
        let {type} = tagAst;
        let single = isSingle(type); 
        if (!single && type !== "textContent") {
            this.$node.content += `${computedIndexSpaces(deep)}</${type}>\n`;
        }
    },
    processWxmlMounted (node, store) { 
        this.$node.ifRender && generateRenderFn(this.$node.projectPath, this.$node.refRender.toJsFile());
        this.addChild({
            type: 'outputFile',
            body: {
                dist: this.$node.dist,
                content: this.$node.content
            }
        });
    },   
    processOrderProp (node) {
       
    }
};