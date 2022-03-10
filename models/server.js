const express = require("express");
const cors = require("cors");

const { socketController } = require("../sockets/controller");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.io = require("socket.io")(this.server);

        this.paths = {};

        this.middlewares();
        this.routes();
        this.eventSockets();
    }

    eventSockets() {
        this.io.on("connection", socketController);
    }

    routes() {}

    async dbConnect() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.static("public"));
        this.app.use(cors());
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`);
        });
    }
}

module.exports = Server;
