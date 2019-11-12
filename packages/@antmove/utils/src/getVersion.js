const exec = require('child_process').exec;
const chalk = require('chalk');
function getVersion () {
    let p1 = new Promise(function(res,rej){
        exec(`npm view antmove version`,function (error, stdout, stderr) { 
            if (error) {
                rej(error)
            }
            res(stdout.match(/(\S*)\n/)[1])
        })
    })
    let p2 = new Promise(function(res,rej){
        exec(`npm ls antmove -g`,function (error, stdout, stderr) {
            if (error) {
                rej(error)
            }
            res(stdout.match(/antmove@(\S*)/)[1])
        })
    })
    Promise.all([p1,p2]).then(function(values){
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
    })
};

module.exports = {
    getVersion
}