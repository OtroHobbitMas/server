const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 3000;

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('newMsg', (msg) => {
    console.log(`Emitiendo nuevo mensaje: ${JSON.stringify(msg)}`);
    io.emit('newMsg', msg);
  });


  socket.on('connected', () => {
    console.log("Connected");
  });

  socket.on('disconnected', () => {
    console.log("Disconeccted");
  });

  socket.on("pageChange",(info) =>{
    console.log(`Emitiendo cambio pagima: ${JSON.stringify(info)}`);
    io.emit('pageChange', info);
  })

});

http.listen(port,"0.0.0.0", () => {
  console.log(`listening on *:${port}`);
});