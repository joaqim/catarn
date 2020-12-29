import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

export function subscribeToTimer(cb) {
  socket.on("timer", (timestamp) => cb(null, timestamp));
  socket.emit("subscribeToTimer", 1000);
}

export function onConnected() {
  console.log(socket.io.engine.id);
  console.log(socket.sessionid);
}

export function hostCreateNewGame() {
  socket.emit("hostCreateNewGame");
}

export function playerJoinGame(color = "magenta") {
  //console.log(color);
  socket.emit("playerJoinGame", color);
}
