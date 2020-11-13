let app = require('express')();
let http = require('http').Server(app);
let port = process.env.PORT || 3000;
let form = document.querySelector("form");



app.get('/', function(req, res){
	res.sendFile(__dirname + '../../templates/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

socket.on('connect', function() {
      	socket.emit('my event', {data: 'I\'m connected!'});
});