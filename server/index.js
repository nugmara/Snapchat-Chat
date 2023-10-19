import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io"
import dotenv from "dotenv";
import { createClient } from "@libsql/client";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    connectionStateRecovery: true
});

const db = createClient({
    url: "libsql://humble-master-chief-nugmara.turso.io",
    authToken: process.env.DB_TOKEN
})
// await db.execute(`
//     CREATE TABLE IF NOT EXISTS messages {

//     }
// `)

io.on("connection", socket => {
    console.log("Client connected")

    socket.on("message", (body) => {
        socket.broadcast.emit("message", body)
    })
})

server.listen(3000)
console.log("Server on port", 3000)