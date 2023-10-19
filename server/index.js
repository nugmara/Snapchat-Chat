import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io"

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

io.on("connection", socket => {
    console.log("Client connected")
})

server.listen(3000)
console.log("Server on port", 3000)