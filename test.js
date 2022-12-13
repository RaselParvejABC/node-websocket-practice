const WebSocket = require("ws");

const client = new WebSocket("ws://localhost:5000");

client.on("open", () => {
  setInterval(() => {
    client.send("Hallo from Client");
  }, 3000);
});
