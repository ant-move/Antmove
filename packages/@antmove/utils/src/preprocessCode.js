const path = require('path');
const fs = require('fs-extra');
const prettier = require('prettier');

module.exports = {
    precessRelativePathOfCode: function (code, filepath, dir) {    
        return code.replace(/\.+((\/|\\)\.+)+(\/|\\)*\w+/g, function (...r) {
            let _path = path.join(filepath, '../', r[0]); 
            _path = _path.substring(dir.length).replace(/\\/g, '/'); // replace 的作用是将windows下的路径的\改回/,使路径格式符合js语法
            return _path;
        });
    },
    precessAbsolutePathOfCode (code, filepath, dir) {
        return code.replace(/["'](((\/|\\)(\w|[-_])+)+(\/|\\)*\w+)/g, function (...r) {
            let prefix = r[0][0];
            let requireFilePath = dir + r[0].substring(1);
            let _path = path.relative(filepath, requireFilePath);
            _path = prefix + _path.substring(3).replace(/\\/g, '/');

            if (_path[1] !== '.') {
                _path = _path.replace(prefix, prefix + './');
            }
            return _path;
        });
    },
    precessWxAbsolutePathOfCode (code, filepath, dir) {
        return code.replace(/["'](((\/|\\)(\w|[-_])+)+(\/|\\)*\w+)/g, function (...r) {
            let prefix = r[0][0];
            let requireFilePath = dir + r[0].substring(1);
            let _path = '';
            if (!r[0].includes('__antmove_wechat') && !r[0].includes('\\n')) {
                let dirName = r[0].match(/\/.+\//)[0];
                dirName = dirName.slice(1, dirName.length - 1);
                let fileName = path.resolve(dir, dirName);
                const isExit = fs.existsSync(fileName);
                if (isExit) {
                    _path = path.relative(filepath.path, requireFilePath);
                    _path = prefix + _path.substring(3).replace(/\\/g, '/');
                    if (_path[1] !== '.') {
                        _path = _path.replace(prefix, prefix + './');
                    }
                } else {
                    _path = r[0];
                }
            } else {
                _path = path.relative(filepath.path, requireFilePath);
                _path = prefix + _path.substring(3).replace(/\\/g, '/');
                if (_path[1] !== '.') {
                    _path = _path.replace(prefix, prefix + './');
                }
            }
            return _path;
        });
    },
    prettierCode (code = '', type='babel', opts={}) {
        let options = { 
            semi: true, 
            parser: type,
            tabWidth: 4
        };
        options = Object.assign(options, opts);

        try {
            code = prettier.format(code, options);
        } catch (error) {
            // errpr
        }
        return  code;
    }
};