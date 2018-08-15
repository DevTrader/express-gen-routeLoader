var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


module.exports = function (app) {
	app.get('/sockets', function (req, res) {
	  // Controller logic
	  console.log('[ACCESSED]')

	
	  res.render('sockets');
	});
	// http.listen(3000, function(){
	// 	console.log('listening on *:3000');
	// });
	
  }