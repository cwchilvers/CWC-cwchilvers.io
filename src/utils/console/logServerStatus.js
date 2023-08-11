const chalk = require('chalk');

module.exports = {
    success: (address, port) => {
        console.log(
            chalk.bgGreen.bold(" ✔ Success  "),
            chalk.white("Server launched at"),
            chalk.yellow.underline.bold(`${address}:${port}\n\n`)
        );
    },
};