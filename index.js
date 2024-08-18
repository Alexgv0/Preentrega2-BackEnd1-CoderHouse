const app = require("./src/app");
const PORT = 8080;
const {Server} = require('socket.io')

const server = app.listen(PORT, () => {
    console.log(`
        Servidor escuchando en el puerto: ${PORT}.
        Puedes acceder en el siguiente enlace: http://localhost:${PORT}
    `);
});

const io = new Server(server);

io.on("connection", socket => {
    console.log(`Usuario ${socket.id} conectado`);

    socket.on("disconnect", () => {
        console.log(`Usuario ${socket.id} desconectado`);
    });
});

module.exports = server;