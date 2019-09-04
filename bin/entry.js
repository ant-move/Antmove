const inquirer = require('inquirer');
const figlet = require('figlet');
const chalk = require('chalk');
const path = require('path');

console.log(chalk.green(figlet.textSync("Antmove")));
console.log(chalk.green('欢迎使用蚂蚁搬家工具，您可以通过如下地址寻求帮助或是给予反馈。'));
console.log(chalk.green('Antmove: https://ant-move.github.io/website/'));
console.log(chalk.green(' Github: https://github.com/ant-move/Antmove'));
console.log(' ');

const pwd = process.cwd();
const defaultInput = pwd;
const defaultOutput = path.join(pwd, '../out');

module.exports = function (opts = {}, cb = () => {}) {
    let arr = [
        {
            type: 'list',
            message: '请选择转换类型？',
            name: 'type',
            choices: [
                {
                    name: 'wx-alipay'
                },
                {
                    name: 'wx-amap'
                },
                {
                    name: 'alipay-baidu'
                },
                {
                    name: 'alipay-wx'
                }
            ]
        },
        {
            type: 'input',
            name: 'input',
            message: `请输入待转换源码目录地址?(默认: ${chalk.gray(defaultInput)})`,
        },
        {
            type: 'input',
            name: 'output',
            message: `请输入转换后生成目录地址?(默认: ${chalk.gray(defaultOutput)})`,
        },
    ];

    let ret = arr.filter(function (info) {
        return opts[info.name] === undefined;
    });

    inquirer
        .prompt(ret)
        .then(answers => {
            answers.input = opts.input || answers.input || defaultInput;
            answers.output = opts.output || answers.output || defaultOutput;
            if (answers.output.charAt(answers.output.length-1)==='/') {
                answers.output = answers.output.substr(0, answers.output.length-1);
            }
            opts = Object.assign({}, opts, answers);
            cb && cb(opts);
        });
};