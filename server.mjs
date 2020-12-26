/*
import exp from "express";
import http from "http";

let app = exp();
const server = http.createServer(app);
*/

//import * as io from "socket.io";
import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

import * as tarn from "./src/tarn.mjs";

io.on("connection", (client) => {
  tarn.initGame(io, client, db);
});

import fs from "fs";
import sqlite3 from "sqlite3";

var file = "mydb.db";
var exists = fs.existsSync(file);

if (!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var db = new sqlite3.Database(file);

db.serialize(function () {
  if (!exists) {
    db.run("CREATE TABLE player (player_name TEXT, player_win INT)");
  }
});

const port = 8000;
io.listen(port);
console.log("listening on port ", port);
