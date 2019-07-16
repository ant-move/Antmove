const fs = require('fs');
const path = require('path');

const fileUtils = {};

fileUtils.parserDirInfo = function (opts = {}, cb = () => {}, deep = 0, parent = null) {
    let dirpath = opts.dirpath;
    let temp = fs.readdirSync(dirpath);
    let files = [];
    temp.forEach(function (filename) {
        let _file = path.join(dirpath, filename);
        _file = fileUtils.parserFileInfo(_file, deep, parent);

        /**
         * process exclude files
         */
        opts.exclude = opts.exclude || [/^\.\w+/];
        if (opts.exclude && Array.isArray(opts.exclude)) {
            opts.exclude.push(/^\.\w+/);
        } else {
            opts.exclude = [opts.exclude];
        }

        opts.exclude.push(/__ant_express\//);

        let _bool;
        opts.exclude.forEach(function (reg) {
            if (_file.filename.match(reg)) {
                _bool = true;
            }
            return _bool;
        });
        
        if (_bool) {
            return _bool;
        }

        cb(_file);
        if (_file.type === 'directory') {
            let _opts = Object.assign({}, opts, {
                dirpath: _file.path
            });
            _file.children = fileUtils.parserDirInfo(_opts, cb, deep + 1, _file);
        }

        files.push(_file);
        
        return _file;
    });

    /* 
     * component process
     * 确保 wxml 文件位于数组的开头
     */
    let isComponent = 0;
    let wxmlFileIndex = 0;

    files.forEach(function (el, i) {
        let ext = el.extname;
        if (ext === '.wxml') {
            wxmlFileIndex = i;
        }

        if (ext === '.json' || ext === '.wxml' || ext === '.wxss') {
            isComponent++;
        }
    });

    isComponent = isComponent === 3 ? true : false;
    if (isComponent) {
        let _el = files.splice(wxmlFileIndex, 1);
        files.unshift(_el[0]);
    }
    
    return files;
};

fileUtils.parserFileInfo = function (filepath, deep, parent) {
    return {
        type: fs.statSync(filepath).isFile() ? 'file' : 'directory',
        path: filepath,
        filename: path.basename(filepath),
        extname: path.extname(filepath),
        dirname: path.dirname(filepath),
        basename: path.basename(filepath).split('.')[0],        // only one pot in filename
        children: null,
        parent,
        deep
    };
};

module.exports = fileUtils;