const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());

const hbs = require('express-handlebars');
//var http = require('http');

console.log('after express initialization');
//serving static files 
app.use(express.static(path.join(__dirname,'public')));

// connecting MongoDb
require('./server/database/database')();

//setup view engine
app.set('view engine', 'hbs');
app.engine('hbs',hbs({
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir:path.join(__dirname,'views'),
    partialsDir:path.join(__dirname,'views/partials')
}))



//calling routes
app.use('/', require('./server/router/router'));
//http.createServer(app).listen(80);
app.listen(3000, () =>console.log(`Server is started on http://localhost:3000`));

