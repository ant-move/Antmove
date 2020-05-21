/**
 * @alipay code block
 * /*@amap ---- @amap*\/
 *  */
const { useReducer } = require('@amove/next');
useReducer({
    JsCommentBlock (node) {
        let code = this.$node.content;
        let reg = /\/\*\s*@amap\s*\n+((.|\s)*)\n+\s*@amap\s*\*\//g;
        this.$node.content = code.replace(reg, function (...r) {
            return r[1];
        });
    }
});
