const express = require("express");
const app = express();
const routes = require("./routes");

// Middleware para analizar JSON
app.use("/api", express.json());
// Middleware para analizar datos de formularios
app.use("/api", express.urlencoded({ extended: true }));

// Puedo usar morgan (logger)
// Multer (subir archivos al servidor)(falta ver)

app.get("/", (req, res) => {
    res.send("Bienvenido a el BackEnd de Kevin Alex Muñoz Pascal");
});

app.use("/api", routes);

module.exports = app;
