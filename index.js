const app = require("./src/app");
//const path = requiere("path");
const PORT = 8080;

// Seteo handlebars
//app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
//app.set("view engine", "handlebars");
//app.set("views", path.join(__dirname, 'views'));

app.listen(PORT, () => {
    console.log(`
        Servidor escuchando en el puerto: ${PORT}.
        Puedes acceder en el siguiente enlace: http://localhost:${PORT}
    `);
});
