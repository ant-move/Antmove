

const {
    h2,
    h4,
    table,
    list,
    a
} = require('../renderMD/index');


const path = require('path');
const fs = require('fs-extra');
const outputDist = path.join(__dirname, '../../../../../ant-move-docs/website/sidebars.json');
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
module.exports = function ( config = {} ,target) {
    let befor = target.split("-")[0]
    let after = target.split("-")[1]
    function tansformTarget (target) {
        let str = ""
        switch (target) {
        case "wechat" :str = "微信";
            break;
        case "alipay" :str = "支付宝";
            break;
        case "toutiao" :str = "头条";
            break;
        case "baidu" :str = "百度";
            break;       
        }
        return str
    }
    let tansformBefor = tansformTarget(befor);
    let tansformAfter = tansformTarget(after);
    const {
        ComponentInfo,
        ApiInfo,
        LifeInfo,
        JsonInfo
    } = config
    function generateSideBarJson () {
        let json = fs.readFileSync(outputDist);
        json = JSON.parse(json);
        json['docs-other'][`${tansformBefor}转${tansformAfter}`] = wx2alipay;    
        json['docs-other'][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-components`);
        json['docs-other'][`${tansformBefor}转${tansformAfter}`].push(`${befor}-${after}-unsupport-apis`);
        fs.outputFileSync(outputDist, JSON.stringify(json));
    }
     
    
    
    function renderApiDoc (_apiAll,type) {  
        let apiDoc = [];
        let _str = '' ;
        let header = ['函数名','说明',`${tansformBefor}小程序`,`${tansformAfter}小程序`,'是否支持'];
        let retValheader = ['差异属性','说明','差异类型'];
        let paramsHeader = ['差异参数','说明','差异类型'];
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
                wx2alipay[1].ids.push(`${befor}-${after}-lifeCircle-${apiName.type}`);
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
                        arr.push(a('doc', _apiInfo.url.original));
                        if (_apiInfo.url.target) {
                            arr.push(a('doc', _apiInfo.url.target));
                        } else {
                            arr.push("无");
                        } 
                    } else {
                         arr.push(a('doc', _apiInfo.url[`${befor}`]));
                        if (_apiInfo.url[`${after}`]) {
                            arr.push(a('doc', _apiInfo.url[`${after}`]));
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
                    _str += table(header,arr);
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
                        _str += table(paramsHeader,paramsArr);
                    }
                    if (typeof _apiInfo.body.returnValue !== "undefined" ) {        
                        Object.keys(_apiInfo.body.returnValue.props)
                            .forEach(function (val) {
                                retValArr.push(val);
                                retValArr.push(_apiInfo.body.returnValue.props[val].desc);
                                valType = returnType (_apiInfo.body.returnValue.props[val].type);
                                retValArr.push(valType);
                            });
                               
                        _str += table(retValheader,retValArr);
                    }
                });
            apiObj[apiName.type] = _str ;
            apiDoc.push(apiObj);
        });
        return apiDoc;
        
    }
    function renderComponentDoc (obj ,type) {
        let componentDoc = [];
        let _str = '' ;
        let header = ['差异属性','说明','是否支持','返回值差异','备注'];
        let ComponentsInfo = [];
        let urlHeader = [`${tansformBefor}小程序`,`${tansformAfter}小程序`]
        if ( type === "components" ) {
            ComponentsInfo = obj.ComponentsInfo ;
        } else {
            ComponentsInfo = obj.jsonInfo ; 
        }
        ComponentsInfo.forEach(function (fnName,i) {
            let componentObj = {};
            _str = '';
            _str += `---\n`;
            _str += `id: ${befor}-${after}-component-${fnName.type}\n` ; 
            _str += `title: ${fnName.name}\n`;
            _str += `---\n\n`;           
            wx2alipay[0].ids.push(`${befor}-${after}-${type}-${fnName.type}`);
            Object.keys(ComponentsInfo[i].body)
                .forEach(function (attrName) {              
                    let arr = [] ;
                    let _arr = []
                    let attrInfo =  ComponentsInfo[i].body[attrName] ;
                    _str += h2(attrName);
                    let propsObj = {} ;
                    if (attrInfo.url && attrInfo.url.original) {
                        _arr.push(a('doc', attrInfo.url.original));
                        if (attrInfo.url.target) {
                            _arr.push(a('doc', attrInfo.url.target));
                        } else {
                            _arr.push("无");
                        } 
                    } else if (attrInfo.url && attrInfo.url[`${befor}`]) {
                         _arr.push(a('doc', attrInfo.url[`${befor}`]));
                        if (attrInfo.url[`${after}`]) {
                            _arr.push(a('doc', attrInfo.url[`${after}`]));
                        } else {
                            _arr.push("无");
                        }  
                    }
                    _str += table(urlHeader,_arr)
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
                                let attrParams = attrInfo.props[attr].params ;
                                if  (attrParams) {
                                    let params = "";
                                    Object.keys(attrParams)
                                        .forEach(function (val) {
                                            params += `*${val}`;                                         
                                            params += returnType(attrParams[val].type);
                                            arr.push(params);
                                        });                                 
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
                        _str += table(header,arr);
                    } else {
                        _str += `*暂不支持\n`;
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
    
    let apiRes = renderApiDoc(ApiInfo,"api");
    let componentRes =  renderComponentDoc(ComponentInfo,"components");
    let lifeRes = renderApiDoc(LifeInfo,"life") ; 
    let jsonRes = renderComponentDoc(JsonInfo,"json");
    generateSideBarJson();
    return {
        lifeRes,
        apiRes,
        componentRes,
        jsonRes,
        unsupportApis: renderUnSupportApiDoc(ApiInfo.descObject),
        unsupportComponents: renderUnSupportComponentsDoc(ComponentInfo.descObject)
    };
};
