const socketController = (client) => {
    console.log("Cliente conectado", client.id);

    client.on("disconnect", () => {
        //console.log("Cliente desconectado", client.id);
    });

    client.on("send-message", (payload, callback) => {
        client.broadcast.emit("send-message-server", payload);

        // can use this callback like feedback from server to client
        //const id = payload.id;
        //callback(id);
    });
};

module.exports = {
    socketController,
};
