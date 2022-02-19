const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('newMsg', (msg) => {
    console.log(`Emitiendo nuevo mensaje: ${msg}`);
    io.emit('newMsg', msg);
  });


  socket.on('connected', () => {
    console.log("Connected");
  });

  socket.on('disconnected', () => {
    console.log("Disconeccted");
  });

});

http.listen(port,"0.0.0.0", () => {
  console.log(`listening on *:${port}`);
});