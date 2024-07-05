const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');

const server = http.createServer(app);

const io = require('socket.io')(server ,{
    cors: {
        origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log("A player connected");
    
    socket.on('join-room', room => {
        socket.join(room);
        console.log(`Room with id: ${room} joined`);
    })
});

app.use(cors());

server.listen(3000, () => console.log("Server is running"));