const env = 'dev';  // prod, 生产环境不输出

module.exports = {
    info () {

    },
    warn (msg, desc = {
        pageName: '',
        pagePath: '',
        apiName: ''
    }) {
        if (env === 'prod') return false;
        console.log(desc);
        console.warn(msg);
    },
    error () {
        
    }
};