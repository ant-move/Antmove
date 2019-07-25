const fs = require("fs");
const open = require('open');
const path = require("path");
module.exports = function (config={}) {
    config.isShow = process.env.NODE_ENV === 'development';
    return {
        // 运行环境
        getSurrounding (obj = {}) {
            if (!config.isShow) {
                return {};
            }
            let result = {
                pcSystem: {
                    name: "系统",
                    val: process.platform
                }, 
                
    
                nodeVersion: {
                    name: "nodejs",
                    val: process.version
                },
            };
            
            return result;
        },
    
        getTemplateData (fileInfo) {
            if (!config.isShow) {
                return {};
            }
            let result = {};
            result.type = "templete";
            result.components = [];
            let projectPath = "";
            let pagePath = "";
            if (fileInfo.path.indexOf('pages')!==-1) {
                projectPath =  fileInfo.path.split('pages')[0];
                pagePath =  fileInfo.path.split(projectPath)[1].replace(/\\/g, "/");
            } else {
                projectPath =  fileInfo.path.split('components')[0];
                pagePath =  fileInfo.path.split(projectPath)[1].replace(/\\/g, "/");
            }
             
            result.status = 1;
            fileInfo.ast.forEach(item => {
                
                let eleName = item.type;
              
                // 查找规则
                const componentObj = {
                    name: "",
                    attrs: [],
                    doc: ""
                };
                if (config.components.descObject[eleName]) {
                    componentObj.name = eleName;
                    try {
                        componentObj.doc = config.components.descObject[eleName].url.alipay;
                    } catch (err) {
                        componentObj.doc = "";
                    }
                    for (let key in item.props) {
                        let propsObj = config.components.descObject[eleName].props||{};
                        const props = propsObj[key];
                        if (props&&props.status===2) {
                            result.status = 2;
                            componentObj.attrs.push(key);
                        } 
                    }
                    

                    // 组件不支持
                    if (config.components.descObject[eleName].status===2) {
                        result.status = 3;
                        componentObj.attrs = ['不支持此组件'];
                        componentObj.name = eleName;
                    }

                    
                }
                if (componentObj.attrs.length>0) {
                    let flag = false;
                    result.components.forEach(item => {
                        if (item.name===eleName) {
                            flag = true;
                            item.attrs = [...new Set(item.attrs.concat(componentObj.attrs))];
                        }
                    });
                    if (!flag) {
                        result.components.push(componentObj);
                    }
                }   

               
            });

            if (pagePath) {
                const obj = {};
                obj[pagePath] = result;
                return obj;
            } 
            
           
        },
    
        getStyleData (pathInfo) {
            if (!config.isShow) {
                return {};
            }
            let result = {};
            result.type = "wxssModular";
            result.components = [];
            pathInfo = pathInfo.replace(/\\/g, "/");
            let pathArr = pathInfo.split('/');
            pathArr.shift();
            
            let pagePath = pathArr.join("/");
           
            result.status = 1;
            let obj = {};
            obj[pagePath] = result;
            return obj;
        },
    
        statistics (transforms) {
            if (!config.isShow) {
                return {};
            }
            let result = {
                modelAll: 0,
                completely: 0,
                partial: 0,
                notsupport: 0
            };
            for (let key in transforms) {
                result.modelAll++;
                if (transforms[key].status===1) {
                    result.completely++;
                } else if (transforms[key].status===2) {
                    result.partial++;
                } else {
                    result.notsupport++;
                }
            }  
            return result;
        },
    
        getScriptData (pathInfo, apiObj, wxoriginCode) {
            if (!config.isShow) {
                return {};
            }
           
            let result = {};
            result.openData = [];
            result.status = 1;
            result.components = [];
            pathInfo = pathInfo.replace(/\\/g, "/");
            let pathArr = pathInfo.split('/');
            pathArr.shift();
            
            let pagePath = pathArr.join("/");
    
            if (pagePath==='app.js') {
                let appLifeArr = getLife(wxoriginCode, 0, config);
                makeLifeData(appLifeArr, 0, result, config);  
            }
            // page页面
            if (wxoriginCode.indexOf('Page')!==-1) {
                let pageLifeArr = getLife(wxoriginCode, 1, config);
                makeLifeData(pageLifeArr, 1, result, config);
            }
    
            // component
    
            if (wxoriginCode.indexOf('Component')!==-1) {
                let compLifeArr = getLife(wxoriginCode, 2, config);
                makeLifeData(compLifeArr, 2, result, config);
            }
    
           
            if (pagePath.indexOf('pages')!==-1||wxoriginCode.indexOf('Component')!==-1) {
                result.type = "jsModular";
                
            } else {
                result.type = "otherModular";
            }
    
            Object.keys(apiObj).forEach(item => {
                if (testOpenAbility(item, config)) {
                    let opreult = {};
                    opreult[`wx.${item}`] = {
                        path: pagePath,
                        idear: "查看支付宝文档",
                        docpath: config.openAbility[item].alipay,
                        status: config.openAbility[item].status+1
                    };
    
                    result.isopen = true;
                    result.openData.push(opreult);
                    return false;
                }
                
                let apiresilt = {}; 
                apiresilt.attrs = []; 
                try {
                    apiresilt.doc =config.apis.descObject[item].url.alipay;
                } catch (err) {
                    apiresilt.doc = "";
                }
                
                if (config.apis.descObject[item] && config.apis.descObject[item].status === 1) {
                    apiresilt.name = `wx.${item}`;
                    let params = config.apis.descObject[item].body.params||{};
                    let propskey = params.props || {};
                    let defectArr = [];
                    let differenceArr = [];
                    Object.keys(propskey).forEach( prop =>{
                      
                        if (propskey[prop].type===0) {
                            defectArr.push(prop);
                        } else if (propskey[prop].type!==7) {
                            differenceArr.push(prop);
                        }
                        
                        
                    });
                    
                    
                    defectArr.length>0 && apiresilt.attrs.push(`参数${defectArr.join('、')} 缺失`);
                    differenceArr.length>0 && apiresilt.attrs.push(`参数${differenceArr.join('、')} 存在差异`);

                    let returnVal = config.apis.descObject[item].body.returnValue||{};
                    let returnpropskey = returnVal.props || {};
        
                    let retdDefectArr = [];
                    let retDefectArr = [];

                    Object.keys(returnpropskey).forEach( prop => {
                        if (returnpropskey[prop].type===0) {
                            retDefectArr.push(prop);
                        } else if (returnpropskey[prop].type!==7) {
                            retdDefectArr.push(prop);
                        }
                    });
                    
                    retDefectArr.length>0&& apiresilt.attrs.push(`返回值${retDefectArr.join('、')} 缺失`);
                    retdDefectArr.length>0 && apiresilt.attrs.push(`返回值${retdDefectArr.join('、')} 存在差异`);

                    let msg = config.apis.descObject[item].body.msg;

                    if (apiresilt.attrs.length===0 && msg) {
                        apiresilt.attrs = [msg];
                    } else if (apiresilt.attrs.length===0) {
                        apiresilt.attrs = ['部分支持'];
                    }

                    result.components.push(apiresilt);
                    if (result.status!==3) {
                        result.status = 2;
                    }
                } else if ( config.apis.descObject[item] && config.apis.descObject[item].status === 2) {
                    apiresilt.name = `wx.${item}`;           
                    apiresilt.attrs = ["不支持"];
                    result.status = 3;
                    result.components.push(apiresilt);
                }

            });
    
            let returnData = {};
            returnData[pagePath] = result;
            return returnData;
        },
    
        getJsonData (pathInfo, content) {
            if (!config.isShow) {
                return {};
            }
            let result = {};
            result.type = "jsonModular";
            result.components = [];
    
            const contentData =JSON.parse(content);
            Object.keys(contentData).forEach( key =>{
                if (pathInfo.indexOf('project.config.json')!==-1) {
                    return false;
                }
                if (contentData[key]) {
                    if ( !config.pageconfig[key] || config.pageconfig[key].type===7 ) {
                        return false;
                    }
                    if (pathInfo.indexOf('pages')!==-1) {
                        let jsonData = {
                            name: key,
                            attrs: [],
                            doc: config.pageconfig[key].url.wechat
                        };
                        if (config.pageconfig[key].status ===2 ) {
                            jsonData.attrs=['属性不支持'];
                            result.components.push(jsonData);
                        }
                       
                    } else {
                        // app.json
    
                        if ( !config.globalconfig[key] || config.globalconfig[key].type===7 ) {
                            return false;
                        }
                        let jsonData = {
                            name: key,
                            attrs: [],
                            doc: config.globalconfig[key].url.wechat
                        };
                        if (config.pageconfig[key].status ===2 ) {
                            jsonData.attrs = ['属性不支持'];
                            result.components.push(jsonData);
                        } else if (config.pageconfig[key].status ===1) {
                            if (config.pageconfig[key].props) {
                                Object.keys(config.pageconfig[key].props).map(prop => {
                                    jsonData.attrs.push(prop);
                                });
                                result.components.push(jsonData);
                            }
                        }
                    }
    
                }
            });
    
            
    
            pathInfo = pathInfo.replace(/\\/g, "/");
            let pathArr = pathInfo.split('/');
            pathArr.shift();
            let pagePath = pathArr.join("/");
            result.status = 1;
            if ( result.components.length>0 ) {
                result.status = 2;
            }
    
            // 全部不支持
            if (Object.keys(contentData).length ===  result.components.length&& Object.keys(contentData).length!==0) {
                result.status = 3;
    
            }
    
            let obj = {};
            obj[pagePath] = result;
            return obj;
        },
    
        getOthersFile (url) {
            if (!config.isShow) {
                return {};
            }
            let result = {};
            result.type = "otherModular";
            result.components = [];
            let dirArr =  url.replace(/\\/g, "/").split('/');
            dirArr.shift(dirArr[0]);
            let newurl = dirArr.join('/');
            result.status = 1;
            let obj = {};
            obj[newurl] = result;
            return obj;
        },
    
        writeReportPage (data, distpath) {
            if (!config.isShow) {
                return false;
            }
            let dayastr = 'let pageData = '+JSON.stringify(data);
            let local = path.join(distpath.replace(/\\/g, "/").split('/.config.json')[0]);
            let htmlPath = path.join(local, config.pagePath, 'report');
            let dataPath = "";
            let viewPath = path.join(__dirname, './view');
            if (fs.existsSync(htmlPath)) {
    
                exists( viewPath, htmlPath, copyDir );
    
            } else {
                fs.mkdirSync (htmlPath);
                exists( viewPath, htmlPath, copyDir );
            }
            dataPath = path.join(htmlPath, 'js', 'data.js');
    
            if (fs.existsSync(dataPath)) {
                fs.unlinkSync (dataPath);
            }
           
            fs.writeFileSync(dataPath, dayastr);
            console.log("即将打开日志页面...");
            openBower(local, config);
        },
    
        findOpenAbility (repData) {
            if (!config.isShow) {
                return {};
            }
            let openArr = [];
            for (let key in repData.transforms) {
                if (repData.transforms[key].isopen) {
                    openArr = openArr.concat(repData.transforms[key].openData);
                }
            }
            let result = {};
            Object.keys(config.openAbility).forEach(item => {
                let pathArr = [];
                openArr.forEach(its => {
                    if (its[`wx.${item}`]) {
                        pathArr.push(its[`wx.${item}`].path);
                    }
                });
                if (pathArr.length>0) {
                    result[`wx.${item}`] = {
                        pathArr: pathArr,
                        idear: '查看支付宝文档',
                        docpath: config.openAbility[item].url.alipay,
                        status: config.openAbility[item].status+1
                    };
                }
            });
            
            
            return result;
        },
        
        getCustomScript (pathInfo) {
            if (!config.isShow) {
                return {};
            }
            let result = {};
            result.type = "modularWxs";
            result.components = [];
            pathInfo = pathInfo.replace(/\\/g, "/");
            let pathArr = pathInfo.split('/');
            pathArr.shift();
            
            let pagePath = pathArr.join("/");
           
            result.status = 1;
            let obj = {};
            obj[pagePath] = result;
            return obj;
        },

        getToolVs (obj = {}) {
            let versionData = obj.version;
            return versionData;
        },

        resDataInit () {
            return {
                transforms: {}
            };
        }

        
    
    };
};

function testOpenAbility (api, config) {
    if (config.openAbility[api]) { 
        return true;
    } 
    return false;

}

function copyDir (src, dst) {
    // 读取目录中的所有文件/目录
    let paths = fs.readdirSync(src);
     

    paths.forEach(function (path) {
        var _src = src + '/' + path,
            _dst = dst + '/' + path,
            readable, writable;

        let st = fs.statSync(_src);

        // 判断是否为文件
        if (st.isFile()) {
            // 创建读取流
            readable = fs.createReadStream(_src);
            // 创建写入流
            writable = fs.createWriteStream(_dst);
            // 通过管道来传输流
            readable.pipe(writable);
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
            exists (_src, _dst, copyDir);
        }
    });
    
    
}

function exists (src, dst, callback) {
    let exists =  fs.existsSync(dst);
    if (exists) {
        callback(src, dst);
    }
    // 不存在
    else {
        fs.mkdirSync(dst);
        callback(src, dst);
    }
}

async  function openBower (distpath, config) {
    const pageUrl = path.join(distpath, config.pagePath, "report/index.html");
    // Opens the url in the default browser
    await open(pageUrl);
}

function getLife (wxoriginCode, num, config) {
    let resultArr = [];
    let lifeArr = Object.keys(config.lifeCycleInfo.lifeInfo[num].body);
    
    lifeArr.forEach(its => {
        let reg = eval( "/\\w*" + its + "\\w*/g;"); 
        let larr = wxoriginCode.match(reg)||[];
        resultArr = resultArr.concat(larr);
    });
    let appLifeArr = [];
    resultArr.forEach(item => {
        if (lifeArr.indexOf(item)!==-1) {
            appLifeArr.push(item);
        }
    });

    return [...new Set(resultArr)];
   
}

function makeLifeData (lifeArr, num, result, config) {
    lifeArr.forEach( key => {
        let body = config.lifeCycleInfo.lifeInfo[num].body[key];
        let lifeResilt = {};

        if (body&&body.status===1) {
            try {
                lifeResilt.doc = body.url.alipay || body.url.wechat;
            } catch (err) {
                lifeResilt.doc = "";
            }

            lifeResilt.name = key;
     
            lifeResilt.attrs = [];
            let defectArrattrs = [];
            let retdDefectArr = [];
            Object.keys(body.body.returnValue.props).forEach(prop => {

                if (body.body.returnValue.props[prop].type===0) {
                    defectArrattrs.push(prop);
                    
                } else if (body.body.returnValue.props[prop].type!==7) {
                    retdDefectArr.push(prop);
                }
                if (result.status!==3) {
                    if (body.status===1) {
                        result.status = 2;
                    }
                     
                    if (body.status===2) {
                        result.status = 3;
                    }
                }

            });
            


            defectArrattrs.length>0&&lifeResilt.attrs.push(`参数${defectArrattrs.join('、')} 缺失`);
            retdDefectArr.length>0&&lifeResilt.attrs.push(`参数${retdDefectArr.join('、')} 存在差异`);

            if (lifeResilt.attrs.length===0) {
                lifeResilt.attrs = ['部分支持'];
            }
           
            result.components.push(lifeResilt);
        } else if (body&&body.status===2) {
            try {
                lifeResilt.doc = body.url.alipay||body.url.wechat;
            } catch (err) {
                lifeResilt.doc = "";
            }
            lifeResilt.name = key;
            lifeResilt.attrs = ["不支持"];
            result.components.push(lifeResilt);
        }
    });
}




