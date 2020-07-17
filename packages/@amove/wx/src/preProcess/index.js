const fs = require('fs-extra');
const path = require('path');
const parser = require('../utils/parseXml');
const {setCompileType, setAppName, getAppName, reportError, setFromId} = require('../utils/index');
const Json = require('./Json');
function getFilePath (filePath, ext) {
    return filePath.replace(/.json/, ext);
}
module.exports = {
    ...Json,
    Directory (node) {
        if (node.filename === '.tea') {
            node.children = [];
        }
    },
    File (node) {
        this.$node = {
            body: node
        };
        if (node.extname) {
            let type = node.extname.replace(/^\.(\w)/, function (...$) {
                return $[1].toUpperCase();
            });
            this.addChild(type);
        }
    },
    
    // doc
    // plugin=@amove/ali-mini-to-react
    // ## CreateAliPayMiniNode
    // 解析并创建支付宝小程序页面和组件节点
    // CreateAliPayMiniNode (node) {
    //     let arr = [];
    //     node.children.forEach(child => {
    //         if (child.)
    //     });
    // }
    readAppJson (node, store) {
        const info = this.$node.body;
        const pages = info.content.pages;
        const components = info.content.usingComponents || {};
        const json = info.content;
        const Config = store.config.config;
        store.nodes = {};
        store.appInfo = json;
        setCompileType(store.config.type);
        setFromId(store.config.fromId);
        if (json.window && json.window.navigationBarTitleText) {
            setAppName(json.window.navigationBarTitleText);
        } else {
            const appName = getAppName(json.pages, store.config.entry, 'navigationBarTitleText');
            setAppName(appName);
        }
        
        let isReport = store.config.isReport;
        isReport = typeof isReport === 'boolean' ? isReport : true
        reportError(null, null, 'log', null, isReport);
        // 是否支持component2
        store.config.component2 === false || store.config.component2 === "false" ? Config.component2 = false :  Config.component2 = true;
        // 是否支持组件scope
        store.config.scope === false || store.config.scope === "false" ? Config.options.scopeStyle = false :  Config.options.scopeStyle = true;
        // 组件解析
        let basePath = info.dirname;
        store.pages = pages.map((page) => {
            let p = path.join(basePath, page);
            p = p.replace(/\/$/, '');
            return {
                path: page,
                fullname: p
            };
        });  
        Object.keys(components)
            .forEach((c) => {
                this.addChild({
                    type: 'parseNodes',
                    key: 'parseNodes' + components[c],
                    body: {
                        childPath: components[c]
                    }
                });
            });

        this.addChild('computedPageInfo');
    },
    computedPageInfo (node, store) {
        let type = '.json';
        store.pages
            .forEach(page => {
                let jsonPath = page.fullname + type;
                page.children = [];
                if (fs.pathExistsSync(jsonPath)) {
                    let json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
                    let xmlPath = getFilePath(jsonPath, '.wxml');
                    this.addChild({
                        type: 'parseNodes',
                        key: 'parseNodes'+  page.path,
                        body: {
                            childPath: page.path,
                            type: 'page'
                        }
                    });
                    if (fs.pathExistsSync(xmlPath)) {
                        page.ast = parser.parseFile(xmlPath);
                    }
                    if (json.usingComponents) {
                        Object.keys(json.usingComponents)
                            .forEach((p) => {
                                this.addChild({
                                    type: 'ProcessComponentRelations',
                                    key: 'ProcessComponentRelations' + json.usingComponents[p],
                                    body: {
                                        children: page.children,
                                        parentPath: jsonPath,
                                        childPath: json.usingComponents[p],
                                        type
                                    }
                                });
                            });
                    }
                }
            });
    },
    ProcessComponentRelations (node, store) {
        let {children,  parentPath, childPath, type} = node.body;
        let componentJsonPath = '';
        if (!childPath.startsWith('/')) {
            componentJsonPath = path.join(parentPath, `../${childPath}`);
        } else {
            componentJsonPath = path.join(store.config.entry, childPath);
        }
        if (!componentJsonPath.endsWith(type)) {
            componentJsonPath = componentJsonPath + type;
        }
        if (fs.pathExistsSync(componentJsonPath)) {
            let json = JSON.parse(fs.readFileSync(componentJsonPath, 'utf8'));
            if (!json.component) return false;
            let projectPath = path.relative(this.$node.body.dirname, componentJsonPath).replace(type, '');
            let childComponent = {
                path: projectPath,
                fullname: componentJsonPath.replace('.json', ''),
                children: []
            };
            // let xmlPath = getFilePath(componentJsonPath, '.wxml');
            // if (fs.pathExistsSync(xmlPath)) {
            //     childComponent.ast = parser.parseFile(componentJsonPath);
            // }
            if (json.usingComponents) {
                Object.keys(json.usingComponents)
                    .forEach((p) => {
                        this.addChild({
                            type: 'ProcessComponentRelations',
                            key: 'ProcessComponentRelations' + json.usingComponents[p],
                            body: {
                                children: childComponent.children,
                                parentPath: componentJsonPath,
                                childPath: json.usingComponents[p],
                                type
                            }
                        });
                    });
            }
            this.addChild({
                type: 'parseNodes',
                key: 'parseNodes' + projectPath,
                body: {
                    childPath: projectPath
                }
            });
            children.push(childComponent);
        }
    },
    parseNodes (node, store) {
        let {childPath, type, AbsolutePath} = node.body;
        let projectPath = childPath;
        let componentName = null;
        if (projectPath.startsWith(store.config.entry)) {
            projectPath = projectPath.replace(store.config.entry, '');
        }
        projectPath = projectPath.replace('./', '')
        if (!AbsolutePath) {
            childPath = path.join(this.$node.body.path, `../${childPath}`);
        }
        if (!childPath.endsWith('.json')) {
            childPath = childPath + '.json';
        }
        if (fs.pathExistsSync(childPath)) {
            let json = fs.readJSONSync(childPath);
            if (type && type === 'page') {
                type = 'Page';
            } else if (json.component) {
                type = 'Component';
                componentName = projectPath.split('/').join('-');
            } else {
                type = "Unknown";
            }
            if (json.usingComponents) {
                Object.keys(json.usingComponents)
                    .forEach((x, i) => {
                        this.addChild({
                            type:'parseNodes',
                            key: 'parseNodes' + i,
                            body:{
                                childPath: path.join(childPath, `../${json.usingComponents[x]}`),
                                AbsolutePath:true
                            }
                        })
                    })
            }
            let nodePath = path.relative(this.$node.body.dirname, childPath).replace('.json', '');
            let dirPath = childPath.split('/').slice(0, -1).join('/');
            let xmlPath = getFilePath(childPath, '.wxml');
            store.nodes[nodePath] = {
                path: childPath.replace('.json', ''),
                projectPath,
                dirPath,
                json,
                type,
                componentName,
                isHasComponents : false
            };
            if (fs.pathExistsSync(xmlPath)) {
                let _ast = parser.parseFile(xmlPath);
                let appUsingComponents = store.appInfo.usingComponents || {};
                store.nodes[nodePath].ast = _ast;
                let nodeInfo = store.nodes[nodePath];
                this.addChild({
                    type: 'processNodeGlobalRelation',
                    body: {
                        xmlAst: _ast[0],
                        appUsingComponents,
                        nodePath,
                        nodeInfo
                    }
                })
            }
        }
    },
    processNodeGlobalRelation(node, store) {
        let {nodeInfo, appUsingComponents, xmlAst, nodePath} = node.body; 
        let nodeUsingComponents = nodeInfo.json.usingComponents || {};
        store.nodes[nodePath].json.usingComponents = store.nodes[nodePath].json.usingComponents || {};
        let componentUsingComponents = store.nodes[nodePath].json.usingComponents ;
        let type = xmlAst.type;
        if (appUsingComponents.hasOwnProperty(type) && (componentUsingComponents && !componentUsingComponents.hasOwnProperty(type))) {
            let gPath = appUsingComponents[type] + '.json';
            let nPath = nodePath + '.json';
            gPath = path.join(store.config.entry, gPath);
            nPath = path.join(store.config.entry, nPath);
            gPath = path.relative(nPath, gPath);
            if (gPath.startsWith('../')) {
                gPath = gPath.replace('../', '');
            }
            componentUsingComponents[type] =  gPath.replace('.json', '');
        } 

        if (appUsingComponents[type] || nodeUsingComponents[type]) {
            nodeInfo.isHasComponents = true;
        }
        if (Array.isArray(xmlAst.children) && xmlAst.children.length) {
            this.addChild({
                type: 'processXmlChildren',
                key:'processXmlChildren' ,
                body:{
                    xmlAst: xmlAst.children,
                    appUsingComponents,
                    nodePath,
                    nodeInfo
                }

            })
        }
    },
    processXmlChildren(node, store) {
        let { xmlAst, appUsingComponents, nodePath, nodeInfo} = node.body;
        xmlAst.forEach((x, i) => {
            this.addChild({
                type:'processNodeGlobalRelation',
                key: 'processNodeGlobalRelation' + i,
                body:{
                    xmlAst: x,
                    appUsingComponents,
                    nodePath,
                    nodeInfo
                }
            })
        })
    }
};