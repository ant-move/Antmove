/* eslint-disable no-undef */

const fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
module.exports = async function (  config ={} ) {
    config.baseurl = config.baseurl||'http://cache.amap.com/ecology/tool/antmove/wechat-alipay/0.2.0';
    const fileGet =  (filePath) => {
        return axios ({
            url: `${config.baseurl}${filePath}`,
            method: "GET",
            responseType: "stream"
        });
    };

    const downloadFile = async function (fileurl, filepath, name) {
        if (!fs.existsSync(filepath)) {
            fs.mkdirSync(filepath);
        }
        const mypath = path.resolve(filepath, name);
        const writer = fs.createWriteStream(mypath);
        const response = await fileGet(fileurl);

        await response.data.pipe(writer);

        return writer;
    };
    const getContent = async (rs) => {
        let  buffers=[],  nread=0;
        return  new Promise ((resolve,reject) => {
            try {
                rs.on("data", chuck => { 
                    buffers.push(chuck);
                    nread += chuck.length; 
                }).on("end", () => { 
                    let buffer = null , pos = 0;
                    switch (buffers.length) {
                    case 0:
                        buffer = new Buffer.alloc (0);
                        break;
                    case 1:
                        buffer = buffers[0];
                        break;
                    default:
                        buffer = new Buffer.alloc (nread); 
                        buffers.forEach( chunk =>{
                            chunk.copy(buffer, pos); 
                            pos += chunk.length;
                        });
                        break;
                    }
                    const data = buffer.toString();
                    resolve(JSON.parse(data));
                    
                    
                });
            } catch (err) {
                reject(err);
            }
            
        });
    };
    const {  isUpdata=true , showReport=false} = config;
    const progectPath = path.join(__dirname,'../..');
    if (!isUpdata) {
        
        return false;
    }
    // 获取 version 
    let result = await fileGet('/version.json');

    let resultData = await getContent(result.data);
   
    const versionPath = path.join(progectPath,'ant-move_v_s.json');
    let versionData = {};
    if (fs.existsSync(versionPath)) {
        versionData = JSON.parse(fs.readFileSync(versionPath));
    }
    const resData = {...resultData};
    const downFileArr = [];
    const removeFlieArr = [];
    for (let key in resData) {
        if (resData[key] !== versionData[key]) {
            downFileArr.push(key);
        }
    }   
    for (let key in versionData) {
        if (!resData[key]) {
            removeFlieArr.push(key);
        }
    }
    
    // 删除本地多余的文件
    removeFlieArr.forEach(item => {
        let filePath = path.join(progectPath,item.substr(1));
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            if (showReport) {
                console.log( "移除："+'\033[40;32m '+ item +' \033[0m');
            } 
        }
    });

    // 更新本地文件
    if (downFileArr.length>0) {
        let i = 0;
        const updata = async function (item) {
            let dirNameArr = item.split('/');
            let filePath = progectPath;
            dirNameArr.forEach((its,index) => {
                if (index<dirNameArr.length-1) {
                    filePath = path.join(filePath,its);
                    if (!fs.existsSync(filePath)) {
                        fs.mkdirSync(filePath);
                    }
                } 

            });
            let fileName = dirNameArr[dirNameArr.length-1];
            downloadFile(item, filePath , fileName);
            if (showReport) {
                console.log( "更新："+'\033[40;32m '+ item +' \033[0m');
            } 
            
            if (i <= downFileArr.length-1) {
                await updata(downFileArr[i++]);
            } else {
                downloadFile('/version.json',progectPath,'ant-move_v_s.json');
                console.log( "更新完成");
            }
            
        };
        await updata (downFileArr[i++]);
    }  else {
        console.log( "更新完成");
    }    
};



