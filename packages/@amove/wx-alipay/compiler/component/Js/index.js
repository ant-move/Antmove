/*
 * @Author: your name
 * @Date: 2020-08-05 14:22:14
 * @LastEditTime: 2020-08-21 18:42:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /antmove-zqs/packages/@amove/wx-alipay/compiler/component/Js/index.js
 */
const { useReducer } = require("@amove/next");
const path = require("path");
const fs = require("fs-extra");
useReducer({
    ComponentJs (node, store) {
        let output =
            path.join(store.config.output, node.body._node.projectPath) + ".js";
        this.$node.content  = fs.readFileSync(
            node.body._node.path + ".js",
            "utf8"
        );
        this.$node.originCode = this.$node.content ;
        this.$node.projectPath = node.body._node.projectPath + '.js';
        this.$node.dist = output;
        this.addChild("processComponentIs"), this.addChild("MiniApplication");
        this.addChild({
            type: "ProcessBabel",
            key: node.path + "ProcessBabel",
            path: node.path,
            body: node.body,
            dist: output,
        });
    },
});
