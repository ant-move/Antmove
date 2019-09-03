const {
    h2,
    h4,
    table,
    list,
    a
} = require('../renderMD/index');

const path = require('path');
const fs = require('fs-extra');
const outputPath = path.join(__dirname, '../../../../../../antmove-website');
const outputDist = path.join(__dirname, '../../../../../../antmove-website/website/sidebars.json');
const insidePath = path.join(__dirname, '../../../../../../antmove-website/website/inside.json');
const externalPath = path.join(__dirname, '../../../../../../antmove-website/website/external.json');
const {
    str1,
    str2
} = require('./config');
/**
 * generate docs sidebar.json
 */

function returnType ( type ) {
    let typeDoc = "";
    switch (type) {
    case 0 :typeDoc = "不支持该属性";
        break ;
    case 1 :typeDoc = "命名及格式不同";
        break ;
    case 3 :typeDoc = "类型不同";
        break ; 
    case 4 :typeDoc = "默认值不同";
        break ; 
    case 5 :typeDoc = "使用自定义组件代替";
        break ; 
    case 6 :typeDoc = "tagName";
        break ; 
    case 7 :typeDoc = " 完全支持";
        break ; 
    }
    return typeDoc;
}
module.exports = function ( config = {}, target, edition) {
    const wx2alipay = [
        {
            "type": "subcategory",
            "label": "组件",
            "ids": []
        }, 
        {
            "type": "subcategory",
            "label": "API",
            "ids": []
        },
        {
            "type": "subcategory",
            "label": "小程序配置",
            "ids": []
        },
        {
            "type": "subcategory",
            "label": "框架接口",
            "ids": []
        },
        {
            "type": "subcategory",
            "label": "暂不支持能力",
            "ids": []
        }
    ];
    let isExternal = edition;
    let befor = target.split("-")[0];
    let after = target.split("-")[1];
    function tansformTarget (target) {
        let str = "";
        switch (target) {
        case "wechat" :str = "微信";
            break;
        case "alipay" :str = "支付宝";
            break;
        case "toutiao" :str = "头条";
            break;
        case "baidu" :str = "百度";
            break;  
        case "amap" :str = "高德";         
        }
        return str;
    }
    let tansformBefor = tansformTarget(befor);
    let tansformAfter = tansformTarget(after);
    const {
        ComponentInfo,
        ApiInfo,
        LifeInfo,
        JsonInfo
    } = config;
    function generateSideBarJson (res) { 
        let p = path.join(__dirname, '../../../../../../antmove-website/website/config/heardLinks.js');
        let headA = str1;
        let headB = str2;
        let json = {};      
        let getPath = "";
        if (isExternal === "external" ) {
            getPath = externalPath;
            json = fs.readFileSync(getPath); 
            fs.outputFileSync(p, headA);        
        } else {
            getPath = insidePath;
            json = fs.readFileSync(getPath);
            fs.outputFileSync(p, headB);
        }
        json = JSON.parse(json);  
        json[`${res}`][`${tansformBefor}转${tansformAfter}`] = wx2alipay;  
        wx2alipay[4].ids.push(`${befor}-${after}-unsupport-apis`)
        wx2alipay[4].ids.push(`${befor}-${after}-unsupport-components`)
        wx2alipay[4].ids.push(`${befor}-${after}-unsupport-json`)
        wx2alipay[4].ids.push(`${befor}-${after}-unsupport-lifeCircle`)
        // if (isExternal === "inside") {
        // json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-components`);
        // json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-apis`);
        // json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-json`);
        // json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-lifeCircle`);
        // }        
        fs.outputFileSync(outputDist, JSON.stringify(json, null, 4));
        fs.outputFileSync(getPath, JSON.stringify(json, null, 4));
    }
     
    function renderApiDoc (_apiAll, type) {  
        let apiDoc = [];
        let _str = '' ;
        let header = ['函数名', '说明', `${tansformBefor}小程序`, `${tansformAfter}小程序`, '是否支持'];
        let retValheader = ['差异属性', '说明', '差异类型'];
        let paramsHeader = ['差异参数', '说明', '差异类型'];
        let apiAll = [];
        if (type === "api") {
            apiAll = _apiAll.apiInfo;
        } else {
            apiAll = _apiAll.lifeInfo;
        }    
        apiAll.forEach(function (apiName) {
            let apiObj = {};
            _str = '';
            _str += `---\n`;
            if (type === "api") {
                _str += `id: ${befor}-${after}-api-${apiName.type}\n`;
                wx2alipay[1].ids.push(`${befor}-${after}-api-${apiName.type}`);
            } else {
                _str += `id: ${befor}-${after}-lifeCircle-${apiName.type}\n`;
                wx2alipay[3].ids.push(`${befor}-${after}-lifeCircle-${apiName.type}`);
            }       
            _str += `title: ${apiName.name}\n`;
            _str += `---\n\n`;   
            Object.keys(apiName.body)
                .forEach(function (fnName) {         
                    let arr = [], retValArr = [], paramsArr = [], valType = '';
                    arr.push(fnName);
                    let _apiInfo = apiName.body[fnName] ;
                    if (_apiInfo.desc) {
                        arr.push(_apiInfo.desc);
                    } else {
                        arr.push(" ");
                    } 
                    Object.keys(_apiInfo.url).forEach(function (v, i ) {
                        if (_apiInfo.url[v]) {
                            arr.push(a("查看文档", _apiInfo.url[v])); 
                        } else {
                            arr.push("无");
                        }
                        
                    });
                    switch (_apiInfo.status) {
                    case 0 :arr.push("完全支持");
                        break ;
                    case 1 :arr.push("支持");
                        break ;
                    case 2 :arr.push("不支持");
                        break ;                      
                    } 
                    _str += h2(fnName);       
                    _str += table(header, arr);
                    if ( _apiInfo.body.msg ) {
                        _str += h4("\n* "+_apiInfo.body.msg + '\n'); 
                    }
                    if (typeof _apiInfo.body.params !== "undefined" ) {   
                        Object.keys(_apiInfo.body.params.props)
                            .forEach(function (val) {
                                paramsArr.push(val);
                                paramsArr.push(_apiInfo.body.params.props[val].desc);
                                valType = returnType(_apiInfo.body.params.props[val].type);
                                paramsArr.push(valType);
                            });      
                        _str += table(paramsHeader, paramsArr);
                    }
                    if (typeof _apiInfo.body.returnValue !== "undefined" ) {        
                        Object.keys(_apiInfo.body.returnValue.props)
                            .forEach(function (val) {
                                retValArr.push(val);
                                retValArr.push(_apiInfo.body.returnValue.props[val].desc);
                                valType = returnType (_apiInfo.body.returnValue.props[val].type);
                                retValArr.push(valType);
                            });
                               
                        _str += table(retValheader, retValArr);
                    }
                });
            apiObj[apiName.type] = _str ;
            fs.outputFile(`${outputPath}/transformDocs/${befor}-${after}/${type}/${befor}-${after}-${type}-${apiName.type}.md`, _str);
            apiDoc.push(apiObj);
        });
        return apiDoc;
        
    }
    function renderComponentDoc (obj, type) {
        let componentDoc = [], _str = '', ComponentsInfo = [];
        let header = ['差异属性', '说明', '是否支持', '备注'];
        let _header = ['属性名', '描述', `${tansformBefor}小程序`, `${tansformAfter}小程序`, '是否支持'];
        if ( type === "components" ) {
            ComponentsInfo = obj.ComponentsInfo ;
        } else {
            ComponentsInfo = obj.jsonInfo ; 
        }
        ComponentsInfo.forEach(function (fnName, i) {
            let componentObj = {};
            _str = '';
            _str += `---\n`;
            _str += `id: ${befor}-${after}-${type}-${fnName.type}\n` ; 
            _str += `title: ${fnName.name}\n`;
            _str += `---\n\n`;  
            if (type === "components") {
                wx2alipay[0].ids.push(`${befor}-${after}-${type}-${fnName.type}`);                
            } else {
                wx2alipay[2].ids.push(`${befor}-${after}-${type}-${fnName.type}`); 
            }        
            Object.keys(ComponentsInfo[i].body)
                .forEach(function (attrName) {              
                    let arr = [], _arr = [];
                    let attrInfo =  ComponentsInfo[i].body[attrName] ;
                    _str += h2(attrName);
                    if (type === "components") {
                        _str += `${attrInfo.desc} \n `;
                    } else {
                        _arr.push(attrName);
                        _arr.push(attrInfo.desc);
                        Object.keys(attrInfo.url).forEach(function (v, i ) {
                            if (attrInfo.url[v]) {
                                _arr.push(a("查看文档", attrInfo.url[v])); 
                            } else {
                                _arr.push("无");
                            }                           
                        });
                        switch (attrInfo.status) {
                        case 0 :_arr.push("完全支持");
                            break ;
                        case 1 :_arr.push("支持");
                            break ;
                        case 2 :_arr.push("不支持");
                            break ;                      
                        }
                        _str += table(_header, _arr); 
                    }
                    let propsObj = {} ;               
                    if (attrInfo.props) {
                        _str += h4("支持差异");
                        propsObj = attrInfo.props;
                        Object.keys(propsObj)
                            .forEach(function (attr) {
                                arr.push(attr) ;
                                let _attr = attrInfo.props[attr];
                                let attrDesc = _attr.desc;
                                if (_attr.params) {
                                    Object.keys(_attr.params).forEach(function  (prm) {
                                        if ( _attr.params[prm].type === 1) {
                                            attrDesc += ` * 返回值微信支持${prm},支付宝支持${_attr.params[prm].key}`;
                                        } else if (_attr.params[prm].type === 0) {
                                            attrDesc += ` * 返回值微信支持${prm},支付宝暂不支持`;
                                        }
                                    });
                                    arr.push(attrDesc) ; 
                                } else {
                                    arr.push(attrDesc) ; 
                                }                           
                                let attrSupport = attrInfo.props[attr].status ;
                                if ( attrSupport === 0 || attrSupport ) {
                                    switch (attrSupport) {
                                    case 0 :arr.push("完全支持");
                                        break ;
                                    case 1 :arr.push("支持");
                                        break ;
                                    case 2 :arr.push("不支持");
                                        break ;                        
                                    } 
                                } else {
                                    arr.push(" ");
                                }

                                let attrMsg = "" ;  
                                if (attrInfo.props[attr].msg) {
                                    attrMsg = attrInfo.props[attr].msg;
                                    arr.push(attrMsg);
                                } else {
                                    arr.push(" ");
                                } 
                            });                       
                        _str += table(header, arr);
                    }
                    else if (attrInfo.type === 5 && !attrInfo.props) {
                        _str += `* 支付宝使用自定义组件替代`;
                    }
                });  
            fs.outputFile(`${outputPath}/transformDocs/${befor}-${after}/${type}/${befor}-${after}-${type}-${fnName.type}.md`, _str);             
            componentObj[fnName.type] = _str;
            componentDoc.push (componentObj);
        });
        return componentDoc;
    }
    
    function renderUnSupportApiDoc (obj) {
        let arr = [], str = '', id = `${befor}-${after}-unsupport-apis`;
        Object.keys(obj)
            .forEach(function (key) {
                let value = obj[key];
                if (value.status === 2) {
                    arr.push(a(key + ' - ' + value.desc, value.url.wechat));
                }
            });
        str = `---\nid: ${id}\ntitle: API\n---\n${list(arr)}
        `;
        return str;
    }
    
    function renderUnSupportComponentsDoc (obj) {
        let arr = [], str = '', id = `${befor}-${after}-unsupport-components`;
        Object.keys(obj)
            .forEach(function (key) {
                let value = obj[key];
                if (value.status === 2) {
                    arr.push(a(key + ' - ' + value.desc, value.url.wechat));
                }
            });
        str = `---\nid: ${id}\ntitle: 组件\n---\n${list(arr)}
        `;
        
        return str;
    }

    function renderUnSupportJsonDoc (obj) {
        let arr = [], str = '', id = `${befor}-${after}-unsupport-json`;
        Object.keys(obj)
            .forEach(function (key) {
                let value = obj[key];
                if (value.status === 2) {
                    arr.push(a(key + ' - ' + value.desc, value.url.wechat));
                }
            });
        str = `---\nid: ${id}\ntitle: 小程序配置\n---\n${list(arr)}
        `;
        
        return str;
    }

    function renderUnSupportLifecircleDoc (obj) {
        let arr = [], str = '', id = `${befor}-${after}-unsupport-lifeCircle`;
        Object.keys(obj)
            .forEach(function (key) {
                let value = obj[key];
                if (value.status === 2) {
                    arr.push(a(key + ' - ' + value.desc, value.url.wechat));
                }
            });
        str = `---\nid: ${id}\ntitle: 页面组件注册\n---\n${list(arr)}
        `;       
        return str;
    }    
    let apiRes = renderApiDoc(ApiInfo, "api");
    let componentRes =  renderComponentDoc(ComponentInfo, "components");
    let lifeRes = renderApiDoc(LifeInfo, "life") ; 
    let jsonRes = renderComponentDoc(JsonInfo, "json");
    generateSideBarJson(target);  
    return {
        lifeRes,
        apiRes,
        componentRes,
        jsonRes,
        unsupportApis: renderUnSupportApiDoc(ApiInfo.descObject),
        unsupportComponents: renderUnSupportComponentsDoc(ComponentInfo.descObject),
        unsupportJson: renderUnSupportJsonDoc(JsonInfo.descObject),
        unsupportLifeCircle: renderUnSupportLifecircleDoc(LifeInfo.descObject)
    };
};
