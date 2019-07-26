const {
    h2,
    h4,
    table,
    list,
    a
} = require('../renderMD/index');

//external or inside
const {isExternal} = require('./config')
const path = require('path');
const fs = require('fs-extra');
const outputDist = path.join(__dirname, '../../../../../ant-move-docs/website/sidebars.json');
const insidePath = path.join(__dirname,'../../../../../ant-move-docs/website/inside.json');
const externalPath = path.join(__dirname,'../../../../../ant-move-docs/website/external.json');
/**
 * generate docs sidebar.json
 */
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
        "label": "配置小程序",
        "ids": []
    },
    {
        "type": "subcategory",
        "label": "生命周期",
        "ids": []
    }
];

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
module.exports = function ( config = {}, target) {
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
        case "amap" :str = "高德"         
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
    } = config
    function generateSideBarJson (res) { 
        let p = path.join(__dirname,'../../../../../ant-move-docs/website/config/heardLinks.js')
        let headA = "module.exports={heardArray:[{doc: 'readme', label: '指南'},{doc: 'wechat-alipay-components-basic', label: '微信转支付宝'},{blog: true, label: '博客'},{page: 'help', label: '帮助'}, { search: true }]}"
        let headB = "module.exports = {heardArray : [ {doc: 'readme', label: '指南'}, {doc: 'wechat-alipay-components-basic', label: '微信转支付宝'}, {doc: 'alipay-wechat-api-basic', label: '支付宝转微信'}, {doc: 'alipay-baidu-api-currency', label: '支付宝转百度'},{doc: 'wechat-amap-components-view',label: '微信转高德'},{blog: true, label: '博客'},{page: 'help', label: '帮助'},{ search: true }]}"
        let json = {};      
        let getPath = "";
        if (isExternal === "external" ) {
            if (target === "wechat-alipay") {
                getPath = externalPath;
                json = fs.readFileSync(getPath); 
                fs.outputFileSync(p,headA)
            } else {
                return
            }         
        } else {
            getPath = insidePath
            json = fs.readFileSync(getPath);
            fs.outputFileSync(p,headB)
        }
        json = JSON.parse(json);  
        json[`${res}`][`${tansformBefor}转${tansformAfter}`] = wx2alipay;  
        if (isExternal === "inside") {
            json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-components`);
            json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-apis`);
            json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-json`);
            json[`${res}`][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-lifeCircle`);
        }        
        fs.outputFileSync(outputDist, JSON.stringify(json,null,4));
        fs.outputFileSync(getPath, JSON.stringify(json,null,4));
    }
     
    function renderApiDoc (_apiAll,type) {  
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
            _str += h2(apiName.name);
            Object.keys(apiName.body)
                .forEach(function (fnName) {         
                    let arr = [] ;
                    let retValArr = [] ;
                    let paramsArr = [];
                    arr.push(fnName);
                    let _apiInfo = apiName.body[fnName] ;
                    let valType = '' ;
                    if (_apiInfo.desc) {
                        arr.push(_apiInfo.desc);
                    } else {
                        arr.push(" ");
                    }    
                    if (_apiInfo.url.original) {
                        arr.push(a('查看文档', _apiInfo.url.original));
                        if (_apiInfo.url.target) {
                            arr.push(a('查看文档', _apiInfo.url.target));
                        } else {
                            arr.push("无");
                        } 
                    } else {
                        arr.push(a('查看文档', _apiInfo.url[`${befor}`]));
                        if (_apiInfo.url[`${after}`]) {
                            arr.push(a('查看文档', _apiInfo.url[`${after}`]));
                        } else {
                            arr.push("无");
                        }  
                    }
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
            apiDoc.push(apiObj);
        });
        return apiDoc;
        
    }
    function renderComponentDoc (obj, type) {
        let componentDoc = [];
        let _str = '' ;
        let header = ['差异属性','说明','是否支持','备注'];
        let ComponentsInfo = [];
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
                    let arr = [] ;
                    let attrInfo =  ComponentsInfo[i].body[attrName] ;
                    _str += h2(attrName);
                    let propsObj = {} ;
                    if (attrInfo.props) {
                        propsObj = attrInfo.props;
                        Object.keys(propsObj)
                            .forEach(function (attr) {
                                arr.push(attr) ;
                                let attrDesc = attrInfo.props[attr].desc;
                                if (attrDesc) {
                                    arr.push(attrDesc) ; 
                                } else {
                                    arr.push(" ");
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
                    } else {
                        _str += `* 暂不支持\n`;
                    }  
                });       
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
        str = `---\nid: ${id}\ntitle: 不支持 API 列表\n---\n${list(arr)}
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
        str = `---\nid: ${id}\ntitle: 不支持 组件 列表\n---\n${list(arr)}
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
        str = `---\nid: ${id}\ntitle: 不支持 配置小程序 列表\n---\n${list(arr)}
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
        str = `---\nid: ${id}\ntitle: 不支持 生命周期 列表\n---\n${list(arr)}
        `;
        
        return str;
    }
    
    let apiRes = renderApiDoc(ApiInfo,"api");
    let componentRes =  renderComponentDoc(ComponentInfo,"components");
    let lifeRes = renderApiDoc(LifeInfo,"life") ; 
    let jsonRes = renderComponentDoc(JsonInfo,"json");
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
