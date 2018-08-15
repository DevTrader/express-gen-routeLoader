var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/socketio', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('[CONNECTED]')
	socket.on('mousePos', function(pos){
	  io.emit('mousePos', pos);
	});
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});