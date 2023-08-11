const chalk = require('chalk');

module.exports = {
    info: (message) => {
        console.log(chalk.blue.bold('ℹ'), chalk.bgBlue(" INFO    "), chalk.blue(message));
    },
    info_request: (req, ip) => {
        console.log(chalk.blue.bold('ℹ'),
        chalk.bgBlue(" INFO    "),
        chalk.blue("Handling"),
        chalk.white.bold(req.method),
        chalk.blue("request for"),
        chalk.white.bold(req.url),
        chalk.blue("from"),
        chalk.white.bold(ip));
    },
    success: (message) => {
        console.log(chalk.green.bold('✔'), chalk.bgGreen.bold(" SUCCESS "), chalk.green(message));
    },
    success_request: (req, ip) => {
        console.log(chalk.green.bold('✔'),
        chalk.bgGreen(" SUCCESS "),
        chalk.green("Successfully processed"),
        chalk.white.bold(req.method),
        chalk.green("request for"),
        chalk.white.bold(req.url),
        chalk.green("from"),
        chalk.white.bold(ip));
    },
    warning: (message) => {
        console.log(chalk.yellow.bold('⚠'), chalk.bgYellow.bold(" WARNING "), chalk.yellow(message));
    },
    error: (message) => {
        console.log(chalk.red.bold('✖'), chalk.bgRed(" ERROR   "), chalk.red.bold(message));
    },
    error_request: (req, ip, err) => {
        console.log(chalk.red.bold('✖'),
        chalk.bgRed(" ERROR   "),
        chalk.red("Failed to process"),
        chalk.white.bold(req.method),
        chalk.red("request for"),
        chalk.white.bold(req.url),
        chalk.red("from"),
        chalk.white.bold(ip),
        chalk.yellow.bold(err));
    },
    error_details: (message, details) => {
            console.log(chalk.red.bold('✖'), chalk.bgRed(" ERROR   "), chalk.red(message), chalk.yellow.bold(details));
    },
};