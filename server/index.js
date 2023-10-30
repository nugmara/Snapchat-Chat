import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import http from "http";
import { Server as SocketServer } from "socket.io";
import dotenv from "dotenv";
import { createClient } from "@libsql/client";

dotenv.config()
const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = new SocketServer(server, {
  connectionStateRecovery: true,
});

const db = createClient({
  url: "libsql://humble-master-chief-nugmara.turso.io",
  authToken: process.env.DB_TOKEN
});
await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL
    )
`)

// Routes to create an new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Validar que los campos no estén vacíos
  if (!username || !password) {
    return res
      .status(400)
      .json({ errorMessage: "All selected fields should not be empty" });
  }

  // Validar que la contraseña sea lo suficientemente fuerte
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
if (!passwordRegex.test(password)) {
  return res.status(400).json({
    errorMessage: "The password should have at least 8 characters, one uppercase, one lowercase, and one digit",
  });
}

  try {
    // Validar si el usuario existe ya
    const existingUser = await db.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );

    if (existingUser > 0) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Encriptar contraseña
    const hashedPassword = bcrypt.hash(password, 10);

    // Insertar el nuevo usuario en la base de datos
    const insertResult = await db.execute({
      sql: "INSERT INTO users (username, password) VALUES (:username, :password)",
      args: {
        username,
        password: hashedPassword,
      },
    });
  
    // Check insertResult for success
    if (insertResult.rowsAffected === 1) {
      res.status(201).json({ message: "Usuario registrado con éxito" });
    } else {
      // Handle the case where the insertion didn't affect any rows
      res.status(400).json({ message: "No se pudo registrar el usuario" });
    }
  } catch (error) {
    console.log(error);
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (body) => {
    socket.broadcast.emit("message", body);
  });
});

server.listen(3000);
console.log("Server on port", 3000);
