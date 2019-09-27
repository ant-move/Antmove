const chalk = require('chalk');
const CLI = require('clui');
const clc = require('cli-color');
const log = require('single-line-log').stdout;
const fs = require('fs');
const path = require('path');
const Table = require('cli-table3');
const method = {
    report (consoleData) {
        const { time, status, reportData, after = "...", cycle = "" } = consoleData;
        console.log('[' + chalk.gray(time) + ']' + ` ${status} '${chalk.cyan(reportData)}' ${after} ${chalk.magenta(cycle)}`);
    },
    dateFormat (date, fmt) {
        var o = {
            "M+": date.getMonth() + 1,                          // 月份   
            "d+": date.getDate(),                               // 日   
            "h+": date.getHours(),                              // 小时   
            "m+": date.getMinutes(),                            // 分   
            "s+": date.getSeconds(),                            // 秒   
            "q+": Math.floor((date.getMonth() + 3) / 3),        // 季度   
            "S": date.getMilliseconds()                         // 毫秒   
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (String(date.getFullYear())).substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr((String(o[k])).length)));
        return fmt;
    },
    reportSpeed (speed) {
        if (!speed.showReport) {
            
            const speedProgress = Math.floor(speed.nums/speed.length*100)/100;
            const Progress = CLI.Progress;
            const thisPercentBar = new Progress(40);
           
            log.clear();
            log(thisPercentBar.update(speedProgress));
            if (speedProgress===1) {
                console.log("\n");
            }
        } else {
            return false;
        }
    }
};

module.exports = {
    report (date, reportData = {}) {
        let finishiDate = Number(new Date());
        if (reportData.type === "title") {

            return date;
        }
        if (!reportData.showReport) {
            if (reportData.type !== "computedTime") {
                return date;
            }
            return finishiDate - date;
        }
        

        if (reportData.type === "project") {
            console.log(chalk.magenta(reportData.path));
            return date;
        }

        
        if (reportData.type === "computedTime") {
            let uesTime = finishiDate - date;

            console.log("");
            console.log(chalk.gray(`耗时${uesTime}ms`));
            return uesTime;
        }
        let logData = {};
        if (reportData.type === "parse") {
            let time = method.dateFormat(date, "hh:mm:ss");
            logData = {
                time,
                status: "starting parse",
                reportData: reportData.info,
                after: "...",
                cycle: "",
                nums: reportData.nums,
                length: reportData.length
            };
        }

        if (reportData.type === "compile") {
            if (!reportData.showCompile) {
                return date;
            }
            let finishiDate = new Date();
            let cycle = (finishiDate - date) + "ms";
            let time = method.dateFormat(finishiDate, "hh:mm:ss");
            logData = {
                time,
                status: "starting compile",
                reportData: reportData.info,
                after: "after",
                cycle,
                nums: reportData.nums,
                length: reportData.length
            };
        }

        if (reportData.type === "generate") {
            let finishiDate = new Date();
            let cycle = (finishiDate - date) + "ms";
            let time = method.dateFormat(finishiDate, "hh:mm:ss");
            logData = {
                time,
                status: "finished generate",
                reportData: reportData.info,
                after: "after",
                cycle,
                nums: reportData.nums,
                length: reportData.length
            };
        }
        method.report(logData);
        return finishiDate;
    },

    
    reportTable (table = {}) {
       
        if (!table.showReport) {
            return false;
        }
        for (let i=0; i<24; i++) {
            console.log("");
        }
       
        var Line = CLI.Line,
            LineBuffer = CLI.LineBuffer;

        var outputBuffer = new LineBuffer({
            x: 0,
            y: 0,
            width: 'console',
            height: 'console'
        });

        new Line(outputBuffer)
            .column('Statistical tables', 20, [clc.green])
            .fill()
            .store();

        new Line(outputBuffer)
            .fill()
            .store();

        new Line(outputBuffer)
            .column('Statistical items', 20, [clc.cyan])
            .column('Contents', 200, [clc.cyan])
            .fill()
            .store();

        for (let key in table.tableInfo) {
            new Line(outputBuffer)
                .column(key, 16)
                .column( table.tableInfo[key], 200)
                .fill()
                .store();
        }

        outputBuffer.output();
        
    },

    reportSpeed (speed) {

        method.reportSpeed(speed);
    },
    reportDist: async (version, distPath, toolData = {}) => {
        let utilsPath = path.join(__dirname, '../../../../../node_modules/@antmove/utils', 'package.json');
        
        if (!fs.existsSync(utilsPath)) {
            utilsPath = path.join(__dirname, '../..', 'package.json');
        }
        const utilsData = JSON.parse(fs.readFileSync (utilsPath, 'utf-8'));
      
        console.log('');

        var table = new Table();
        table.push(
            {'antmove': version}
        );
        const toolObj = {};
        toolObj[`${toolData.tool}`] = toolData.version;
        toolData.tool && table.push(
            toolObj
        );
        const utilsObj = {};
        const outsObj = {};
        utilsObj[`@antmove/utils`] = utilsData.version;
        let distPathArr = distPath.split('');
        let newPath = '';
        distPathArr.forEach( (its, index) => {
            newPath+=its;
            if (index>1&&index%40===1) {
                newPath+='\n';
            }
        });
        outsObj[`转换输出地址`] = newPath;
        table.push(
            utilsObj,
            outsObj
        );
        console.log(chalk.green(table.toString()));
        console.log('');
    
 
        

    }   


}; 

