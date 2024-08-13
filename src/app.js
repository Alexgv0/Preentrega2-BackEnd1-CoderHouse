const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const exphbs = require("express-handlebars");
const handlebarsRouter = require("./routes/handlebars.router");

// Middleware para analizar JSON
app.use("/api", express.json());
// Middleware para analizar datos de formularios
app.use("/api", express.urlencoded({ extended: true }));

// Puedo usar morgan (logger)
// Multer (subir archivos al servidor)(falta ver)

// Seteo handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("Bienvenido a el BackEnd de Kevin Alex Muñoz Pascal");
});

app.use("/products", handlebarsRouter);

app.use("/api", routes);

module.exports = app;
