const exphbs = require('express-handlebars');
const path = require('path');

module.exports = () => {
    return exphbs.create({
        extname: 'hbs',
        partialsDir: path.join(__dirname, '..', 'src', 'views', 'partials'),
        debug: true
    });
};
