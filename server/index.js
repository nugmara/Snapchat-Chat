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

// Declarar db en un alcance más amplio para que esté disponible en toda la aplicación
let db;

const setupDatabase = async () => {
  db = createClient({
    url: "libsql://logical-wonder-man-nugmara.turso.io",
    authToken: process.env.DB_TOKEN
  });

  try {

    // Crear la tabla "users"
    await db.execute(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(50) NOT NULL
        )
    `)
    console.log("Database and 'users' table are set up.")
  } catch (error) {
    console.log(error)
  } 
};

// Llamar a la función de configuración de la base de datos
setupDatabase();



// Routes to create an new user
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  console.log("Recibida solicitud de registro para el usuario:", username);

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

// Validar si el usuario existe ya
const existingUser = await db.query(
  "SELECT * FROM users WHERE username = ?",
  [username]
);

if (existingUser.length > 0) {
  return res.status(400).json({ message: "El usuario ya existe" });
}

// Encriptar contraseña
const hashedPassword = await bcrypt.hash(password, 10);

  try {

    // Insertar el nuevo usuario en la base de datos
    const insertResult = await db.execute({
      sql: "INSERT INTO users (username, password) VALUES (:username, :password)",
      args: {
        username,
        password: hashedPassword,
      },
    });

    console.log("Usuario registrado en la base de datos:", username);
  
    // Check insertResult for success
    if (insertResult.rowsAffected === 1) {
      res.status(201).json({ message: "Usuario registrado con éxito" });
    } else {
      // Handle the case where the insertion didn't affect any rows
      res.status(400).json({ message: "No se pudo registrar el usuario" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Error interno del servidor" });
});


io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (body) => {
    socket.broadcast.emit("message", body);
  });
});

server.listen(3000);
console.log("Server on port", 3000);
