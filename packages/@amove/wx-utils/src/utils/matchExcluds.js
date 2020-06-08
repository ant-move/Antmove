class matchExcluds {
    constructor (excludes = [], node = {}, isFile = false) {
        this.excludes = excludes;
        this.node  = node;
        this.filename = this.node.filename;
        this.isFile = isFile;
    }
    matchFunctionFn (param) {
        if (typeof param === 'string') {
            this.matchStringFn(param);

        } else if (Array.isArray(param)) {
            this.matchArrayFn(param);

        } else if (Object.prototype.toString.call(param) === '[object RegExp]') {
            this.matchRegFn (param);
        }
    }
    matchStringFn (str) {
        if (str === this.filename) {
            this.isFile ? this.node.notOutput = true : this.node.children = [];
        }
    }
    matchRegFn (reg) {
        let _res = this.filename.match(reg);
        if (_res && _res[0] === this.filename) {
            this.isFile ? this.node.notOutput = true : this.node.children = [];
        }
    }
    matchArrayFn (param) {
        let _excludes = param || this.excludes || [];
        _excludes.forEach ((exc) => {
            if (typeof exc === 'string') {
                this.matchStringFn(exc);               
            } else if (Object.prototype.toString.call(exc) === '[object RegExp]') {
                this.matchRegFn(exc);
            } else if (typeof exc === 'function') {
                let _exc = exc();
                this.matchFunctionFn (_exc);
            }
        });
        return this.node;
    }
}

module.exports  = {
    matchExcluds
};
