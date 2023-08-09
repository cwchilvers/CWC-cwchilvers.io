// Import modules
const express = require('express');

const exphbs = require('express-handlebars');
const router = require('./routes/router');
const path = require('path');

// Set up server
const app = express();
const PORT = process.env.PORT || 3000;

// Set up handlebars
const hbs = exphbs.create({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views', 'partials')
});


app
    .engine('hbs', hbs.engine)
    .set('view engine', 'hbs')
    .set('views', path.join(__dirname, "views"))
    .use(express.static(path.join(__dirname,"../public")));

// Set up middleware
app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(router);


    app.listen(PORT, () => console.log('Now listening'));
