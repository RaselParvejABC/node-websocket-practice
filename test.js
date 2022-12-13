const WebSocket = require("ws");

const client = new WebSocket("ws://localhost:8080");

client.on("open", () => {
  setInterval(() => {
    client.send("Hallo from Client");
  }, 3000);
});
