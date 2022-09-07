const express = require("express");
const http = require("http");
const cors = require("cors");
const errorHandler = require("errorhandler");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
const server = http.createServer(app);
const port = process.env.PORT || 3003;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// TODO Would be nice to create separate library for types and reuse it in both FE and BE
let tasksSaved: any = [];

io.on("connection", (socket) => {
  socket.emit("receive_todo_list", tasksSaved);

  // for real app it would be nice to send incremental updates to frontend,
  // then, if eny frontend has changes, it should respond with it's most recent update
  // so, at some moment all users will be synchronized
  socket.on("send_todo_list", (tasks: any) => {
    tasksSaved = tasks;
    io.emit("receive_todo_list", tasks);
  });
});

server.listen(port, () => console.log("Listening on port " + port));
