require('dotenv').config();
const consoleLog = require('./utils/misc/consoleLog');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes/router');

const app = express();

const hbs = exphbs.create({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views', 'partials')
});

app
    .engine('hbs', hbs.engine)
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, "views"))

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname,"../public")))
    .use(router);

app.listen(process.env.PORT, () => consoleLog.success(`Server running on port ${process.env.PORT}...`));
