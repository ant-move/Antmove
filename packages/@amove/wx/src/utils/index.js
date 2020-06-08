const fs = require("fs-extra");
const path = require("path");

module.exports = {
    reportError (type, appName, _msg = 'log', logType, isReprot) {
        if (!isReprot) return;
        type = type || process.env.compilerType || '';
        appName = appName || process.env.appName || '';
        let fromId = process.env.fromId ;
        let msg = `${type}-${appName}-${_msg}-${fromId}`;
        try {
            axios({
                method: 'post',
                url: 'http://gm.mmstat.com/fsp.1.1', 
                data: `{"gmkey":"OTHER","gokey":"delay=0&hash=&last_pos=0%252C0&msg=${msg}&page=null&patch_ver=-&pid=platformi-server-app&query=&raw_ua=Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_14_6)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F77.0.3865.90%2520Safari%252F537.36&referrer=http://&rel=&scr=2560x1440&spm_a=&spm_b=&title=mini-server&tracker_ver=4.3.0&type=${logType || 12}&ua=Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_14_6)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F77.0.3865.90%2520Safari%252F537.36&uid=","logtype":"2"}`
            });
        } catch (error) {
            
        }
    },
    setAppName (name) {
        process.env.appName = name;
    },
    setCompileType (type) {
        process.env.compilerType = type 
    },
    setFromId(type) {
        process.env.fromId = type || 0 ;
    },
    getAppName (pagesPath, baseDirName, attrName) {
        let appName = '';
        pagesPath && pagesPath.some(item => {
            const filePath = path.join(baseDirName, `${item}.json`);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            if (content[attrName]) {
                appName = content[attrName];
                return true;
            }
            return false;
        });
        return appName;
    },
    generateRenderFn (fileInfo, renderStr = '', appNodesTreeStr, output) {

        let route = fileInfo.dist.replace(output, '');
        route = route.replace(/\.axml/, '');
        route = route.replace(/\.wxml/, '');
        route = route.replace(/\\+/g, '/');
        
        appNodesTreeStr += `'${route}': ${renderStr},`;
        return appNodesTreeStr;
    },
    checkoutCustomComponent (fileInfo, tagName, entry) {
        let bool = false,
            json,
            appJson;
        if (fileInfo.extname === ".wxml") {
            json = fileInfo.path.replace(".wxml", ".json");
            if (!fs.pathExistsSync(json)) return false;
    
            if (!fileInfo.jsonUsingComponents) {
                json = JSON.parse(fs.readFileSync(json, "utf8")) || {};
                appJson =
                    JSON.parse(
                        fs.readFileSync(
                            path.join(entry, "app.json"),
                            "utf8"
                        )
                    ) || {};
            } else {
                json = fileInfo.jsonUsingComponents;
                appJson = fileInfo.appUsingComponents;
            }
            if (json.usingComponents && json.usingComponents[tagName]) {
                bool = true;
            } else if (
                appJson.usingComponents &&
                appJson.usingComponents[tagName]
            ) {
                bool = true;
            }
    
            if (!tagName) {
                fileInfo.jsonUsingComponents =
                    fileInfo.jsonUsingComponents || json.usingComponents;
                fileInfo.appUsingComponents =
                    fileInfo.appUsingComponents || appJson.usingComponents;
                return {
                    component: json.usingComponents,
                    app: appJson.usingComponents
                };
            }
        }
    
        return bool;
    },
    transformStr (type = '') {
        /**
         * 组件名字母大写转小写
         */
        type;
        type = type.replace(/^[A-Z]/, function ($) {
            return $.toLowerCase();
        });
    
        type = type.replace(/[A-Z]/g, function ($) {
            return '-' + $.toLowerCase();
        });
    
        return type;
    },
    computedFullPath
};

function computedFullPath (p, prefix = '') {
    let ret = '';
    if (p[0] === '/') {
        ret = path.join(prefix, p);
    } else if (p[0] === '.') {
        ret = toAbsolute(p, prefix);
    }

    return ret;
}

function toAbsolute (p, prefix = '') {
    let ret = '';
    if (p[0] === '.') {
        ret = path.join(prefix, p);
    }

    return ret;
}