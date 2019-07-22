module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        wx: true,
        my: true,
        getApp: true,
        App: true,
        Page: true,
        Component: true,
        process: true,
        __dirname: true,
        getCurrentPages: true
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 4],
        "semi": [2, "always"], // 强制语句分号结尾
        "keyword-spacing": [2, {
            "before": true,
            "after": true
        }],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "always"], 
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "spaced-comment": [2, "always", { "markers": ["*!"] }],
        'no-console': 0,
        'no-empty': 2,
        'use-isnan': 2,
        'consistent-return': 0,
        'default-case': 2,
        'eqeqeq': 2,
        'no-else-return': 2,
        'no-extra-bind': 2,
        'no-implicit-coercion': 2,
        'no-new-wrappers': 2,
        'no-redeclare': 2,
        'no-return-assign': 2,
        'no-useless-call': 2
    }
};