const express = require('express');
const app = express();
const path = require('path');
app.use(express.json);

var http = require('http');

console.log('after express initialization');
//serving static files 
app.use(express.static(path.join(__dirname,'public')));

//routes
app.get('/',(req,res) =>{
    res.send("<h3>Express Server</h3>")
});

//http.createServer(app).listen(80);
app.listen(3000, () =>console.log('Server is started on http://localhost:3000'));

