const babel = require('@babel/core');
const ConstructorHandle = require('./constructorHandle.js');
const ifProcessHandle = require('./ifProcess.js');
const commentBlock = require('./alipayCodeBlock.js');
const requireModule = require('./requireModule');
const behavourHandle = require("./behavourHandle");
const minifyObjectHandle = require('./minifyObject');
const replaceCalleeHandle = require('./replaceCallee');
const cjsToes = require('./cjs-to-es5');
const fs = require('fs-extra');

function ConstructorHandleFn (code, targetName = '') {
    return babel.transform(code, {
        plugins: [
            [
                ConstructorHandle,
                {
                    targetName
                }
            ]
        ]
    }).code;
}

function ifProcessHandleFn (code) {
    return babel.transform(code, {
        plugins: [ifProcessHandle]
    }).code;
}

function replaceCalleeHandleFn (code, entryName, outputName, opts = {}) {
    return babel.transform(code, {
        plugins: [
            [
                replaceCalleeHandle,
                { 
                    entryName, 
                    outputName,
                    opts
                }
            ]
        ]
    }).code;
}

function minifyObjectHandleFn (code, opts={}) {
    return babel.transform(code, {
        plugins: [
            [
                minifyObjectHandle,
                {
                    opts
                }
            ]
        ]
    }).code;
}

function requireModuleFn (code, ctx) {
    let depObj = {};
    try {
        let packageJson = JSON.parse(fs.readFileSync(ctx.entry + '/package.json'));
        depObj = Object.assign(packageJson["dependencies"], packageJson["devDependencies"]);
    } catch (error) {
        // error
    }

    return babel.transform(code, {
        plugins: [
            require('@babel/plugin-proposal-export-default-from'),
            [requireModule, {
                module: depObj
            }]
        ]
    }).code;
}

function transformEs6 (code) {
    return babel.transform(code, {
        "presets": [
            [
                "@babel/preset-env"
            ]
        ]
    }).code;
}

function cjsToesFn (code) {
    return babel.transform(code, {
        plugins: [
            [
                cjsToes
            ]
        ]
    }).code;
}

module.exports = {
    ConstructorHandle: ConstructorHandleFn,
    ifProcessHandleFn,
    commentBlock,
    requireModuleFn,
    behavourHandle,
    replaceCalleeHandleFn,
    minifyObjectHandleFn,
    transformEs6,
    cjsToes: cjsToesFn
};
