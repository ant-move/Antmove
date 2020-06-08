const fs = require('fs-extra');
const path = require('path');

module.exports = {
    Json (node, store) {
        const info = this.$node.body;
        try {
            info.content = JSON.parse(fs.readFileSync(info.path, 'utf8') || {});
        } catch (error) {
            console.error('Read ' + info.path + ' error');
        }
        if (info.deep === 0 && info.basename === 'app') {
            this.addChild('readAppJson');
        }
        /*
        return;
        try {
            let json = fs.readJSONSync(node.path);
            if (node.deep === 0 && node.filename === 'app.json') {
                store.appJson = json;
                store.pagesJson = {};
                store.pagesWxml = {};
                store.pagesFilesPath = {};
                json.pages.forEach((page) => {
                    let pagePath = path.join(store.config.entry, page);
                    let pageJsonPath = pagePath + '.json';
                    let pageWxmlPath = getFilePath(pageJsonPath, ".wxml");
                    store.pagesJson[pageJsonPath] = {
                        path: page,
                        json: fs.readJSONSync(pageJsonPath)
                    };                      
                    store.pagesWxml[pageWxmlPath] = {
                        path: page,
                        ast : parser.parseFile(pageWxmlPath)
                    };
                    store.pagesFilesPath[page] = {
                        subFilesPath: [
                            pageJsonPath,
                            pageWxmlPath,
                            getFilePath(pageJsonPath, ".js"),
                            getFilePath(pageJsonPath, ".wxss"),
                        ]
                    };
                });
            } else if (json.component) {
                //let componentPath = getFilePath(node.path,'')
                let componentWxmlPath = getFilePath(node.path,'.wxml');
                store.componentsJson = store.componentsJson || {};
                store.componentsWxml = store.componentsWxml || {};
                store.componentsFilesPath = store.componentsFilesPath || {};
                store.componentsJson[node.path] = {
                    path: node.path,
                    json: fs.readJSONSync(node.path)
                };
                if (fs.pathExistsSync(componentWxmlPath)) {
                    let projectPath = node.path.replace(store.config.entry + '/', '');
                    store.componentsWxml[componentWxmlPath] = {
                        path: componentWxmlPath,
                        ast :parser.parseString(fs.readFileSync(componentWxmlPath, 'utf8'))
                    },
                    store.componentsFilesPath[projectPath] = {
                        subFilesPath:[
                            node.path,
                            componentWxmlPath,
                            getFilePath(node.path, '.js'),
                            getFilePath(node.path, '.wxss')
                        ]
                    };
                }
            }
        } catch (error) {
            console.error(error);
        }
        */
    },
};