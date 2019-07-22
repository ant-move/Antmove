const childProcess = require('child_process');

function runJs (filename, opts = {}, cb = () => {}) {
    const child = childProcess.fork(filename);

    child.send(opts);
    child.on('close', function (code) {
        cb(code);
    });
}

module.exports = {
    runJs
};
