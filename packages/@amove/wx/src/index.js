const {matchExcluds} = require ('./utils/matchExcluds');
const path = require('path');
const fs = require('fs-extra');
const parser =require('./utils/parseXml');
module.exports = {
    ...require('./Js'),
    ...require('./Json'),
    ...require('./Wxml'),
    ...require('./Wxss'),
    Application: {
        hook: "before",
        body (node, store) {
            this.addChild({
                type: "ReadCompileConfigJs",
            });
        },
    },
    Directory (node, store) {
        const preData = store.config.preAppData;
        const nodes = preData.nodes;
        let _excludes = [".tea"];
        if (Array.isArray(store.config.excludes)) {
            _excludes = [..._excludes, ...store.config.excludes];
        }
        node = new matchExcluds(_excludes, node).matchArrayFn();
        if (node.path === ".tea") {
            node.children = [];
        }
        Object.keys(nodes).forEach((n, i) => {
            const _node = nodes[n];
            if (_node.dirPath === node.path) {
                let type = _node.type;
                this.addChild({
                    type,
                    key: node.path + n,
                    body: {
                        dirpath: node.path,
                        _node,
                        _filePath: n,
                    },
                });
            }
        });
    },
    File (node, store) {      
        let _excludes = ["antmove.config.js"];
        if (Array.isArray(store.config.excludes)) {
            _excludes = [..._excludes, ...store.config.excludes];
        }
        node = new matchExcluds(_excludes, node, true).matchArrayFn();
        node.projectPath = path.relative(store.config.entry, node.path);
        if (node.extname) {
            if (node.extname === ".wxs") {
                this.addChild({
                    type: "Wxs",
                    body: node,
                });
            }
            let extname = node.extname.replace(/^\./, "");
            extname = extname.replace(/^\w/, function ($) {
                1;
                return $.toUpperCase();
            });
            // let basePath = path.relative( store.config.entry, node.path).replace(/.(wxml|wxss|json|js)/,'');
            let isDirxml = store.config.preAppData.nodes.hasOwnProperty(
                node.fullname
            );
            this.$node.isDirxml = isDirxml;
            if (!isDirxml) {
                this.addChild({
                    ...node,
                    type: extname,
                    path: node.path,
                    parent: node,
                    children: [],
                    body: {
                        path: node.path,
                        fullname: node.fullname
                    }
                });
            }
        }
    },
    Page (node, store) {
        let { dirpath, _node, _filePath } = node.body;
        const typeArr = ["Js", "Wxml", "Json", "Wxss", "Wxs"];
        typeArr.forEach((t) => {
            let filePath = path.join(
                store.config.entry,
                _node.projectPath + "." + t.toLowerCase()
            );
            if (fs.pathExistsSync(filePath)) {
                this.addChild({
                    type: "Page" + t,
                    key: dirpath + _filePath + t,
                    body: {
                        dirpath,
                        _node,
                    },
                });
            }
        });
    },
    Component (node, store) {
        let { dirpath, _node } = node.body;
        const typeArr = ["Js", "Wxml", "Json", "Wxss", "Wxs"];
        typeArr.forEach((t) => {
            let filePath = path.join(
                store.config.entry,
                _node.projectPath + "." + t.toLowerCase()
            );
            if (fs.pathExistsSync(filePath)) {
                this.addChild({
                    type: "Component" + t,
                    key: dirpath + t,
                    body: {
                        dirpath,
                        _node,
                    },
                });
            }
        });
    },

    Js (node, store) {
        if (node.filename === "app.js" && node.deep === 0) {
            this.addChild({
                type: "AppJs",
                key: node.path + "AppJs",
                body: node,
            });
        }
        let output = path.join(store.config.output, node.projectPath);
        this.$node.content = fs.readFileSync(node.path, "utf8");
        this.$node.dist = output;
        this.addChild({
            type: "ProcessBabel",
            key: node.parent.path + "ProcessBabel",
            path: node.path,
            body: node.parent,
            dist: output,
        });
    },
    Json (node, store) {
        if (node.deep === 0 && node.filename === "app.json") {
            this.addChild({
                type: "AppJson",
                body: {
                    path: node.path,
                    dist: node.dist,
                },
            });
        }
        if (node.filename === "package.json" && node.deep === 0) {
            store.package = JSON.parse(fs.readFileSync(node.path));
            this.addChild({
                type: "PackageJson",
                body: {
                    dist: node.dist,
                },
            });
        }
    },
    Wxss (node, store) {
        if (node.filename === "app.wxss" && node.deep === 0) {
            this.addChild({
                type: "AppWxss",
                body: node,
            });
        }
        this.$node.content = fs.readFileSync(node.path, "utf8");
        this.$node.dist = node.dist;
        this.addChild({
            type: "ProcessCss",
            key: node.path + "ProcessCss",
            dist: node.dist,
            body: node,
        });
    },
    Wxs () {},
    Wxml (node, store) {
        let xmlType = store.config.preAppData.config.ex.xml;
        let xmlAst = parser.parseFile(node.path);
        this.$node.content = "";
        this.$node.dist = node.dist.replace(/\.wxml$/, xmlType);
        this.$node.nodeId = 0;
        this.addChild({
            type: "processXmlAst",
            body: {
                ast: xmlAst,
                num: 0,
                deep: 1,
                projectPath: node.fullname,
                isInit: true,
            },
        });
    },
    WxmlMounted () {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content,
            },
        });
    },
    outputFile (node, store) {
        const body = node.body;
        if (!body) return false;
        const { dist, content } = body;
        if (!dist || !content) return false;
        fs.outputFileSync(dist, content);
    },
    FileMounted (node, store) {
        if (!this.$node.content && !this.$node.isDirxml) {
            fs.copy(node.path, node.dist, (err) => {
                if (err) throw err;
            });
        }
    },
}