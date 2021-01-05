const fs = require('fs-extra');
const path = require('path');
const myApiConfigFiles = require('../../packages/@antmove/wx-alipay-plugin/config/apiInfo');
const myComponetConfigFiles = require('../../packages/@antmove/wx-alipay-plugin/config/componentsInfo');
const myApiTransform = require('../../packages/@antmove/wx-alipay-plugin/__api/my')
const marked = require('marked');

function apiFileDisplay(filePath){
    let amapApiConfigFils = {};
    let _ = {};
    let descObject = {};
    let apiInfo = [];
    let files = fs.readdirSync(filePath);
    let codes = "";

    files.forEach(function(filename){
        let _readPath = path.join(__dirname,`../amapDemo/API/${filename}`),
            readPath = "";
        if (fs.statSync(_readPath).isDirectory()) {
            readPath = path.join(__dirname,`../amapDemo/API/${filename}/readme.md`);
            readPath = fs.existsSync(readPath) ? readPath : path.join(__dirname,`../amapDemo/API/${filename}/README.MD`)
            if (fs.existsSync(readPath)) {
                let file = fs.readFileSync(readPath, "utf8");
                codes += file;
            }   
        }        
    });
    let _myApiTransform = {};
    Object.keys(myApiTransform).forEach( function (v,i) {
        let res = myApiTransform[v].fn.toString().match(/my\.(\S*)\(/)[1];  
        _myApiTransform[v] = res;
    });
    return new Promise(function (res,rej) {
        myApiConfigFiles.apiInfo.forEach(function (v,i) {
            let obj = {};
            let body = {};
            Object.keys(v.body).forEach(function (_api,_i) {
                let _code = "my." + _myApiTransform[_api]
                if (codes.indexOf(_code) !== -1) {
                    obj.name = v.name;
                    obj.type = v.type;
                    body[_api] = v.body[_api];   
                    descObject[_api] = body[_api];     
                }
            });

            if (obj.name) {
                obj.body = body;
                apiInfo.push(obj);
            }             
        })
        amapApiConfigFils.apiInfo = apiInfo;
        amapApiConfigFils.descObject = descObject;
        res(amapApiConfigFils);
    })
};

function componentFileDisplay(filePath){
    let amapComponetsConfigFils = {};
    let _ = {};
    let descObject = {};
    let ComponentsInfo = [];
    let files = fs.readdirSync(filePath);
    files.forEach(function (_filename) {
        let filename = _filename.toLowerCase();
        _[filename] = _filename;
    })
    return new Promise (function (res,rej) {
        try {
            let reg = /<tbody>([\S\s]*?)<\/tbody>/;
            let _reg = /<tr>([\S\s]*?)<\/tr>/g;
            let reg_ = /<td[\S\s]*?>([\S\s]*?)<\/td>/;
            myComponetConfigFiles.ComponentsInfo.forEach(function (v,i) {
                let obj = {};
                let body = {};
                Object.keys(v.body).forEach(function (_api,_i) {
                    let api = _api.split("-").join('');
                    let attrs = {};
                    if (_[api]) {                                         
                        obj.name = v.name;
                        obj.type = v.type;
                        body[_api] = JSON.parse(JSON.stringify(v.body[_api]));
                        //分解readme
                        let readPath = path.join(__dirname,`../amapDemo/component/${_[api]}/README.md`);
                        let file = fs.readFileSync(readPath);
                        let _file = marked(file.toString());
                        let res = _file.match(reg)[1];  
                        let n = res.match(_reg);
                        n.forEach(function(m) {
                            let attr = m.match(reg_)[1];    
                            attrs[attr] = true;                     
                        })
                        if (v.body[_api].props) {
                            Object.keys(v.body[_api].props).forEach(function (_p) {
                                let prop = body[_api].props[_p];
                                let _prop = v.body[_api].props[_p];
                                if (_prop.type === 3 || _prop.type === 1 ) {
                                    if (!attrs[_prop.key]) {
                                        prop = {};
                                        prop.type = 0;
                                        prop.status = 2;
                                        prop.desc = _prop.desc;
                                    }
                                } else {
                                    if (!attrs[_p]) {
                                        prop = {};
                                        prop.type = 0;
                                        prop.status = 2;
                                        prop.desc = _prop.desc;
                                    }
                                }
                              
                            }) 
                        } 
                        descObject[_api] = body[_api];
                    }           
                })
                if (obj.name) {
                    obj.body = body;
                    ComponentsInfo.push(obj);
                }             
            })
            amapComponetsConfigFils.descObject = descObject;
            amapComponetsConfigFils.ComponentsInfo = ComponentsInfo;
            res(amapComponetsConfigFils);
        } 
        catch {
            rej({"err":"生成amap组件描述文档失败"});
        }
        
    })
};
module.exports = {
    apiFileDisplay,
    componentFileDisplay
};