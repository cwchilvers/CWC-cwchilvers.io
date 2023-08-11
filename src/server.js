require('dotenv').config();
const logServerStatus = require('./utils/console/logServerStatus');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const cors = require('cors');
const router = require('./routes/router');

const app = express();

const hbs = exphbs.create({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views', 'partials')
});

//! Fixes missing headers when retrieving audio in new tab
app.use('/api/audio', (req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

app.use(cors()); 

app
    .engine('hbs', hbs.engine)
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, "views"))

app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname,"../public")))
    .use(router);

app.listen(process.env.PORT, process.env.HOST, () => {
    logServerStatus.success(process.env.HOST, process.env.PORT);
});