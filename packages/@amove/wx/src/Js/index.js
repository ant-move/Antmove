const { prettierCode } = require("../utils/preProcessCode");
const path = require("path");
const fs = require("fs-extra");
const exec = require("child_process").execSync;
const convertedComponents = {
    "vant-weapp": "vant-aliapp"
};
const { useReducer } = require('@amove/next');

module.exports = {
    // ...require("./babel/cjs-to-es5"),
    ...require("./babel/requireModule"),
    ...require("./babel/replaceCallee"),
    ...require("./babel/constructorHandle"),
    ...require("./babel/getCallName"),
    ...require("./babel"),
    ProcessBabel (node, store) {
        const Config = store.config.preAppData.config;
        const customComponentPrefix = Config.library.customComponentPrefix;
        let componentWrapFnPath =
            customComponentPrefix + "/component/componentClass.js";
        let _compoentPath = componentWrapFnPath;

        _compoentPath = path
            .relative(
                path.join(node.dist, "../"),
                path.join(store.config.output, _compoentPath)
            )
            .replace(/\\/g, "/");

        if (_compoentPath[0] !== ".") {
            _compoentPath = "./" + _compoentPath;
        }
        if (store.config.babel && Array.isArray(store.config.babel.plugins)) {
            this.addChild("ProcessBabelPlugins");
        }
        this.addChild({
            type: "commonBabel",
            key: node.path + "commonBabel",
            body: node.body,
            dist: node.dist
        });
        this.$node.content = prettierCode(this.$node.content);
    },
    ProcessBabelMounted (node) {
        this.addChild({
            type: "outputFile",
            body: {
                dist: node.dist,
                content: this.$node.content
            }
        });
    },
    commonBabel (node, store) {
        let type = store.config.preAppData.config.ex._type;
        let cbNameInfo = {
            name: "",
            constructName: {}
        };
        // this.addChild({
        //     type: 'cjsToes',
        //     key: node.path + 'cjsToes',
        //     body: this.$node.content
        // })

        this.addChild({
            type: "JsClassDeclaration",
            key: node.path + "JsClassDeclaration",
            opts: {}
        });
        this.addChild({
            type: "AppGlobalObject",
            key: node.path + "AppGlobalObject",
            entryName: "wx",
            outputName: type,
            opts: {},
            cb: () => {
                this.addChild({
                    type: "InjectApiPolyfill",
                    key: node.paht + "InjectApiPolyfill",
                    body: node.body,
                    dist: node.dist
                });
            }
        });
        this.addChild({
            type: "ProcessRequireExpression",
            key: node.path + "ProcessRequireExpression",
            body: node
        }),
        this.addChild({
            type: "ProcessJsGetCbName",
            opts: cbNameInfo,
            dist: node.dist
        });
        this.addChild("behavourHandle")
    },

    InjectApiPolyfill (node, store) {
        const Config = store.config.preAppData.config;
        const customComponentPrefix = Config.library.customComponentPrefix;
        let apiPath = customComponentPrefix + "/api/index.js";
        apiPath = path
            .relative(
                path.join(node.dist, "../"),
                path.join(store.config.output, apiPath)
            )
            .replace(/\\/g, "/");
        if (apiPath[0] !== ".") {
            apiPath = "./" + apiPath;
        }
        let type = Config.TYPE;
        if (Config.aliAppType === "dingding") {
            type = "dd";
        }
        let insertCode = `const ${Config.ex._type}= require('${apiPath}')(${type});
        `;
        this.$node.content = insertCode + this.$node.content;
    },

    InjectJsPolyfill (node, store) {
        const Config = store.config.preAppData.config;
        const customComponentPrefix = Config.library.customComponentPrefix;
        let cbNameInfo = node.opts;
        let insertCode = "";
        let componentWrapFnPath =
            customComponentPrefix + "/component/componentClass.js";
        let _compoentPath = componentWrapFnPath;
        _compoentPath = path
            .relative(
                path.join(node.dist, "../"),
                path.join(store.config.output, _compoentPath)
            )
            .replace(/\\/g, "/");
        if (_compoentPath[0] !== ".") {
            _compoentPath = "./" + _compoentPath;
        }

        Object.keys(cbNameInfo.constructName).forEach(function (name) {
            insertCode += `const ${Config.target +
                name} = require('${_compoentPath}')('${name}');\n`;
        });
        this.addChild({
            type: "ApplicationAppJsPolyfill",
            key: node.path + "ApplicationAppJsPolyfill",
            opts: {
                targetName: Config.target
            }
        });
        this.$node.content = insertCode + this.$node.content;
        this.$node.content = prettierCode(this.$node.content);
    },
    ReadCompileConfigJs (node, store) {
        let _path = path.join(store.config.entry, "./antmove.config.js");
        let isExist = fs.existsSync(_path);
        if (isExist) {
            let _options = require(_path);
        } else {
            this.addChild({
                type: "GenerateCompileConfigJs"
            });
        }
    },
    GenerateCompileConfigJs (node, store) {
        let options = store.config;
        if (!options.entry || !options.output) return;
        let _input = "./",
            _output = processPath(options);
        let configPath = path.join(options.entry, `./antmove.config.js`);
        let _options = {};
        let newArr = [
            "env",
            "platform",
            "component2",
            "scope",
            "type",
            "component",
            "error",
            "empty"
        ];
        let ifNpm = getLastVersion(options);
        newArr.forEach(key => {
            _options[key] = options[key];
        });
        _options.input = _input;
        _options.output = _output;
        if (_options.type === "wx-my") {
            _options.type = "wx2my";
        }
        if (ifNpm) {
            _options.npm = ifNpm;
        }
        _options = JSON.stringify(_options, null, 4);
        let antmoveConfigDist = `module.exports = ${_options}`;
        antmoveConfigDist = antmoveConfigDist.replace(/}$/, () => {
            let fn =
                options.hooks && typeof options.hooks.appJson === "function"
                    ? options.hooks.appJson
                    : function plugin (appJson) {
                        return appJson;
                    };
            let customBabel =
                options.babel && typeof options.babel.plugins === "object"
                    ? `[${options.babel.plugins}]`
                    : "[]";
            let str = `,
        "hooks": {
            "appJson": ${fn}

        },
        "babel": {
            "plugins": ${customBabel}
        }
    }`;
            return str;
        });
        this.addChild({
            type: "outputFile",
            body: {
                dist: configPath,
                content: antmoveConfigDist
            }
        });
    }
};

function processPath (opts) {
    let _path = "";
    _path = path.relative(opts.entry, opts.output);
    return _path;
}

function getLastVersion (options) {
    let packJsonPath = path.join(options.entry, `./package.json`);
    let isExist = fs.existsSync(packJsonPath);
    if (!isExist) {
        return false;
    }
    let obj = {};
    let code = "";
    let ifVant = false;
    let _obj = {};
    code = fs.readFileSync(packJsonPath);
    code = code.toString();
    code = JSON.parse(code);
    Object.keys(code).forEach(function (name) {
        if (name === "dependencies" || name === "devDependencies") {
            _obj = { ..._obj, ...code[name] };
        }
    });
    Object.keys(_obj).forEach(function (name) {
        if (name === "vant-weapp") {
            ifVant = true;
        }
    });
    if (!ifVant) {
        return false;
    }
    Object.keys(convertedComponents).forEach(key => {
        const version = exec(`npm view ${convertedComponents[key]} version`)
            .toString()
            .replace(/\n|\r|\t/, "");
        obj[key] = {
            name: convertedComponents[key],
            version
        };
    });
    return obj;
}
