
var http = require('http');
var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/resources'));

app.listen = function() {
    var server = http.createServer(this);
    return server.listen.apply(server,arguments);
};

app.get('/', function (req, res) {
    res.redirect('../home')
})

app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, 'resources', 'home.html'));
})

console.log('JS is listening');
app.listen(8080);
