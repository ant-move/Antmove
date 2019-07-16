const chalk = require('chalk');

module.exports = {
    error (msg) {
        console.log(chalk.red(msg));
    },
    warning (msg) {
        console.log(chalk.keyword('orange')(msg));
    },
    info (msg) {
        console.log(chalk.blue(msg));
    },
    success (msg) {
        console.log(chalk.green(msg));
    },
    normal (msg) {
        console.log(msg);
    }
};