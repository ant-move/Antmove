module.exports = {
    /**
     * defineGetter
     */
    defineGetter (obj = {}, descObj = {}, cb = () => {}) {
        return new Proxy(obj, {
            get (target, attr) {
                if (typeof attr === 'string' && descObj[attr] && descObj[attr].type === 0) {
                    cb && cb(target, attr);
                }

                return target[attr];
            }
        });
    }
};