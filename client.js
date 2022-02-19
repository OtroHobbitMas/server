const { io } = require("socket.io-client");
let socket = io('http://localhost:3000');
socket.on('connect', () => {
    socket.emit("connected");
    console.log("Connected")
})