const socketClient = io();

const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

const btnEnviar = document.querySelector("#btnEnviar");
const txtMensaje = document.querySelector("#txtMensaje");

socketClient.on("connect", () => {
    lblOffline.style.display = "none";
    lblOnline.style.display = "";
});

socketClient.on("disconnect", () => {
    lblOffline.style.display = "";
    lblOnline.style.display = "none";
});

socketClient.on("send-message-server", (payload) => {
    console.log("payload client", payload);
});

btnEnviar.addEventListener("click", () => {
    const mensaje = txtMensaje.value;

    const payload = {
        message: mensaje,
        id: "22123",
        date: new Date(),
    };

    socketClient.emit("send-message", payload, (id) => {
        console.log("desde el server", id);
    });
});
