const path = require('path');
const fs = require('fs-extra');
var recursive = require("recursive-readdir");

const compilerdPath = path.join(__dirname, '../examples/wx-alipay/view-aliapp');
const testAppPath = path.join(__dirname, '../examples/test-app/view-aliapp');

function ignoreFunc (file, stats) {
    // `file` is the path to the file, and `stats` is an `fs.Stats`
    // object returned from `fs.lstat()`.
    return stats.isDirectory() && path.basename(file).match(/^\.\w+/);
}
function testCode (testName) {
    test(testName || 'testing: ', (done) => {
        function cb () {
            recursive(compilerdPath, [".git", ignoreFunc], function (err, files) {
            // `files` is an array of file paths
                let bool = true;
                files.forEach(el => {
                    let resBool = process(el.replace(compilerdPath, ''), testAppPath, el);
                    if (bool) bool = resBool;
                });
                if (err || !bool) {
                    expect('fail').toBe('success');
                } else {
                    expect('success').toBe('success');
                }
                done();
            });
        }
        cb();
    });
}    

/**
 * 比较编译后代码和预期项目代码是否一致
 * const compilerdPath = path.join(__dirname, '../examples/wx-alipay/view-aliapp');
 * const testAppPath = path.join(__dirname, '../examples/test-app/view-weapp');
*/

function process (filename, basename, targetname) {
    let p = path.join(basename, filename);

    if (fs.readFileSync(p, 'utf8') !== fs.readFileSync(targetname, 'utf8')) {
        console.error('[Compiler Error]: ', targetname, p);
        return false;
    }

    return true;
}


testCode();