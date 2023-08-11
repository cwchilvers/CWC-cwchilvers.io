const chalk = require('chalk');

const methodPadding = 8;

function generateRequestId() {
    return Date.now().toString(36);
}

module.exports = {
    start: (req) => {
        const requestId = generateRequestId();
        req.requestId = requestId;
        const methodDisplay = req.method.toUpperCase().padEnd(methodPadding);

        console.log(
            chalk.bgBlue.bold(` 🌐 ${methodDisplay}`),
            chalk.magenta.underline("ID:"),
            chalk.white.bold(requestId),
            chalk.blue("Request for"),
            chalk.white.bold(req.url),
            chalk.blue("from"),
            chalk.white.bold(req.ip)
        );

        if (Object.keys(req.params).length !== 0) {
            const formattedParams = JSON.stringify(req.params, null, 2).replace(/^/gm, '\t\t\t\t');
            console.log(
                chalk.white("\t    "),
                chalk.magenta.underline("ID:"),
                chalk.white.bold(requestId),
                chalk.blue('>>'),
                chalk.white("Parameters: "),
                chalk.yellow(`\n${formattedParams}`)
            );
        }

        if (Object.keys(req.body).length !== 0) {
            const formattedBody = JSON.stringify(req.body, null, 2).replace(/^/gm, '\t\t\t\t');
            console.log(
                chalk.white("\t    "),
                chalk.magenta.underline("ID:"),
                chalk.white.bold(requestId),
                chalk.blue('>>'),
                chalk.white("Body: "),
                chalk.magenta(`\n${formattedBody}`)
            );
        }
    },

    success: (req) => {
        console.log(
            chalk.white("\t    "),
            chalk.magenta.underline("ID:"),
            chalk.white.bold(req.requestId),
            chalk.blue('>>'),
            chalk.white('Outcome:'),
            chalk.green.bold("✔ Success "),
        );
    },

    error: (req, err) => {
        console.log(
            chalk.white("\t    "),
            chalk.magenta.underline("ID:"),
            chalk.white.bold(req.requestId),
            chalk.blue('>>'),
            chalk.white('Outcome:'),
            chalk.bgRed.bold(" ✖ Error "),
            chalk.yellow.bold(err),
        );
    },
};
