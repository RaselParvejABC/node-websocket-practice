const ws = require("ws");

const client = new ws("ws://localhost:3000");

client.on("open", () => {
  setInterval(() => {
    client.send("I am client");
  }, 3000);
});
