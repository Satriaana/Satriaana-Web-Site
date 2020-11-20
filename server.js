/*'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.post('/', function (req, res) {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
*/
	
var express = require("express");
 
var app = express();
 
app.use(express.static('public'));
 
//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/js', express.static(__dirname + '/src/js'));
app.use('/assets', express.static(__dirname + '/src/assets'));
 
var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});
