import express from "express";
import { createServer } from "http";
import { config } from "../src/config.js";
import {todoRouter} from "./app/todo.js";
import cors from "cors";
import {WebSocket, WebSocketServer } from 'ws';

// const app = express();
// app.use(express.json());
// app.use(cors())
//
//
// const server = createServer(app);
// const wss = new WebSocketServer({ server });
//
//
// app.use("/todo", withTodoRouter(wss));
//
// app.use((req, res) => {
//   res.send("Hello world");
// });
//
// wss.on('connection', (ws) => {
//   console.log('Client connected');
//
//   ws.on('message', (data) => {
//     console.log('New todo received:', data, typeof data);
//   });
// });
//
// server.listen(config.port, (err) => {
//   if (err) {
//     console.log("could not start server");
//   }
//   console.log(`Server is listening on ${config.port}`);
// });




// import express from "express";
// import { config } from "../src/config.js";
// import { todoRouter } from "./app/todo.js";
// import cors from "cors";
// import {Server} from 'socket.io';

const app = express();
app.use(express.json());
app.use(cors());

app.use("/todo", todoRouter);

app.use((req, res) => {
  res.send("Hello world");
});

const server = app.listen(config.port, (err) => {
  if (err) {
    console.log("could not start server");
  }
  console.log(`Server is listening on ${config.port}`);
});

// const io = new Server(server, {
//   cors: {
//     origin: "*",
//     // allowedHeaders: ["my-custom-header"],
//     credentials: true,
//   },
// });

// io.on('connection', (socket) => {
//   console.log('Client connected');
  
//   socket.on('newTodo', (data) => {
//     console.log('New todo received:', data);
//     // socket.broadcast.emit('newTodo', data)
//    io.emit('newTodo', data)
//   });
// });
