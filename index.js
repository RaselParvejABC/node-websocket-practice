const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 5000, clientTracking: true });

wss.on("connection", function connection(ws) {
  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  setInterval(() => {
    ws.send(`Hallo from Server ${Math.random()}`);
  }, 3000);
});
