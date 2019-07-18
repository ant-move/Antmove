const fs = require('fs-extra');
const path = require('path');
const fn = require('../generateDocs');

module.exports = function (configObj ,type) {
    const { apiRes, componentRes, unsupportApis, unsupportComponents ,lifeRes , jsonRes} = fn(configObj,type);
    const outputDist = path.join(__dirname, '../../../../../../ant-move-docs/docs');
    apiRes.forEach(function (apiName) {
        let _ = Object.keys(apiName)[0] ;
        fs.outputFile(`${outputDist}/${type}-api-${_}.md`,apiName[_]);
    });
    lifeRes.forEach(function (lifeName) {
        let _ = Object.keys(lifeName)[0] ;
        fs.outputFile(`${outputDist}/${type}-lifeCircle-${_}.md`,lifeName[_]);
    });
    componentRes.forEach(function (componentName) {
        let _ = Object.keys(componentName)[0] ;
        fs.outputFile(`${outputDist}/${type}-components-${_}.md`,componentName[_]);
    });
    jsonRes.forEach(function (jsonName) {
        let _ = Object.keys(jsonName)[0] ;
        fs.outputFile(`${outputDist}/${type}-json-${_}.md`,jsonName[_]);
    });
    fs.outputFile(
        `${outputDist}/${type}-unsupport-apis.md`,
        unsupportApis
    );

    fs.outputFile(
        `${outputDist}/${type}-unsupport-components.md`,
        unsupportComponents
    );
};



