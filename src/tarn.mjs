var io;
var gameSocket;
var db;

var gameState = { players: {}, id: undefined };
var playerState = {};

var thisGameId;

/**
 * This function is called by index.js to initialize a new game instance.
 *
 * @param sio The Socket.IO library
 * @param socket The socket object for the connected client.
 * @param sdb The database object for persistent storage
 */
export let initGame = function (sio, socket, sdb) {
  io = sio;
  gameSocket = socket;
  db = sdb;

  gameSocket.emit("connected", { message: "You are connected!" });

  // Host Events
  gameSocket.on("hostCreateNewGame", this.hostCreateNewGame);

  // Player Events
  gameSocket.on("playerJoinGame", this.playerJoinGame);

  gameSocket.on("subscribeToTimer", (interval) => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      gameSocket.emit("timer", new Date());
    }, interval);
  });
};
/**
 * The 'START' button was clicked and 'hostCreateNewGame' event occurred.
 */
export let hostCreateNewGame = function () {
  const thisGameId = (Math.random() * 100000) | 0;

  console.log("--");
  console.log(this.id);
  console.log(thisGameId);
  // Return the Room ID (gameId) and the socket ID (mySocketId) to the browser client
  gameSocket.emit("newGameCreated", {
    gameId: thisGameId,
    mySocketId: this.id,
  });

  // Join the Room and wait for the players
  gameSocket.join(thisGameId.toString());
};

export let playerJoinGame = function (color) {
  playerState[this.id] = { id: this.id, color: color };
  gameState.players = [playerState];
  console.log(color + " joined game " + thisGameId);
};
