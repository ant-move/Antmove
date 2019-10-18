const path = require('path');
const prettier = require('prettier');

module.exports = {
    precessRelativePathOfCode: function (code, filepath, dir, isComponent) {  
        if (isComponent) return code;
        return code.replace(/\.+((\/|\\)\.+)+(\/|\\)*\w+/g, function (...r) {          
            let _path = path.join(filepath, '../', r[0]); 
            _path = _path.substring(dir.length).replace(/\\/g, '/'); // replace 的作用是将windows下的路径的\改回/,使路径格式符合js语法
            _path = '/' + _path;
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