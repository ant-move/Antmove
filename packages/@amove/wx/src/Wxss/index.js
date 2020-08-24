/*
 * @Author: your name
 * @Date: 2020-08-05 14:22:14
 * @LastEditTime: 2020-08-21 18:39:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /antmove-zqs/packages/@amove/wx/src/Wxss/index.js
 */
/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
const fs = require("fs-extra");
const path = require("path");
// const Config = require("../../config");
const css = require("css");
// const customComponentPrefix = Config.library.customComponentPrefix;
const { useReducer } = require("@amove/next");

const { prettierCode } = require("../utils/preProcessCode");
const entry = path.join(__dirname, `../../alipay-mini/runtime/static`);
module.exports = {
    ProcessCss (node, store) {
        this.addChild({
            type: "ProcessCssPageName",
            key: node.path + "ProcessCssPageName"
        });
        this.addChild({
            type: "WxssImportExpresstion",
            key: node.path + "WxssImportExpresstion",
            body: node.body,
            dist: node.dist
        });
        this.addChild({
            type: 'compilerLog',
            body: {
                _type: 'getStyleData',
                opts: {
                    pathInfo: path.join(path.basename(store.config.entry), this.$node.projectPath)
                }
            }
        })
    },

    ProcessCssSemicolon (node) {
        let cssObj = css.parse(this.$node.content);
        cssObj.stylesheet.rules.forEach(function (el) {
            if (el.selectors) {
                el.selectors = el.selectors.map(selector => {
                    /**
                     * 兼容双分号选择器情况
                     */
                    if (selector.match(/@/)) return selector;

                    return (selector = selector.replace(/^;+/, ";"));
                });
            }
        });
        this.$node.content = css.stringify(cssObj);
        this.$node.content = prettierCode(this.$node.content, "scss");
    },

    WxssImportExpresstion (node, store) {
        let Config = store.config.preAppData.config
        this.$node.content = this.$node.content.replace(
            /@import\s+['|"](\S+)['|"]/g,
            function (...$) {
                let rule = $[1];
                if (rule[0] !== "/" && rule[0] !== ".") {
                    let tempPath = path.join(
                        node.body.dirname || node.body.dirpath,
                        rule.replace(Config.ex.css, ".wxss")
                    );
                    if (fs.pathExistsSync(tempPath)) {
                        rule = "./" + rule;
                    } else {
                        rule = "/" + rule;
                    }
                }
                let finalrule = rule.replace(/\.wxss'*/g, Config.ex.css);

                return `@import '${finalrule}'\n`;
            }
        );
        this.$node.dist = node.dist.replace(/\.wxss$/, Config.ex.css);
    },

    ProcessCssPageName (node, store) {
        const Config = store.config.preAppData.config;
        let code = this.$node.content;
        this.$node.content = code.replace(/^(page)(\s+|\{|\.|,)/, function (
            ...$
        ) {
            let className = "." + Config.options.pageContainerClassName + $[2];
            return className;
        });
    },

    ProcessCssMounted (node, store) {
        this.addChild({
            type: "outputFile",
            body: {
                dist: this.$node.dist,
                content: this.$node.content
            }
        });
    }
};
