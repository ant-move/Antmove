const exec = require('child_process').exec;
const chalk = require('chalk'); 
let isLow = false;
function getVersion (version) {
    console.log(version)
    let p1 = new Promise(function(res,rej){
        exec(`npm view antmove version`,{timeout:5000},function (error, stdout, stderr) { 
            if (error) {
                rej(error);
            }
            if (stdout) {
                res(stdout.match(/(\S*)\n/)[1]);
            } else {
                res(0);
            }          
        })
    }).catch(function(){});
    let p2 = new Promise(function(res){
        res(version);
    });
    Promise.all([p1,p2]).then(function(values){   
        if (values[0] === undefined) return
        try {
            let _remote = values[0].split('.');
            let _local = values[1].split('.');
            _remote.forEach( function (v, i) {
                if (v > _local[i]) {
                    isLow = true;
                    return
                }
            })
        } catch (err) {}  
        if (isLow) console.log(chalk.yellow(`[antmove 版本提示升级] 最新版本为 ${values[0]} 本地版本为${values[1]} 请尽快升级至最新版本`))
    });
};
module.exports = {
    getVersion
};