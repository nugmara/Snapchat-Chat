import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    connectionStateRecovery: true
});

io.on("connection", socket => {
    console.log("Client connected")

    socket.on("message", (body) => {
        socket.broadcast.emit("message", body)
    })
})

server.listen(3000)
console.log("Server on port", 3000)