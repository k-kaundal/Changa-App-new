var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.send('<h1>Socket is working</h1>');
});



http.listen(60001, function () {
    console.log('listening on *:60001');
});