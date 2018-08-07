var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const ioHook = require('iohook');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3001, function(){
    console.log('listening on *:3001');
});


