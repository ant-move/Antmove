const exec = require('child_process').execSync;
const chalk = require('chalk');
function getVersion () {
    let remoteVersion = "";
    let localVersion = "";
    let isLow = false;  
    remoteVersion = exec(`npm view antmove version`).toString();
    remoteVersion = remoteVersion.match(/(\S*)\n/)[1];
    try {
        localVersion = exec(`npm ls antmove -g`).toString();
        localVersion = localVersion.match(/antmove@(\S*)/)[1];
        let _remote = remoteVersion.split('.');
        let _local = localVersion.split('.');
        _remote.forEach( function (v, i) {
            if (v > _local[i]) {
                isLow = true;
                return
            }
        })
    }  catch (err) {}   
    if (isLow) console.log(chalk.yellow(`[antmove 版本提示升级] 最新版本为 ${remoteVersion} 本地版本为${localVersion} 请尽快升级至最新版本`))
    return isLow
};

module.exports = {
    getVersion
}