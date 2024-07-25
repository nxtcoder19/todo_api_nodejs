import { Router } from "express";
import { todoDomain } from "../domain/todo_domain.js";
import {WebSocket} from 'ws';

// export const withTodoRouter = (wss) => {
  export const todoRouter = Router();

  todoRouter.get("/list-todos", async (req, res) => {
    const todos = await todoDomain.listOfTodos();
    res.json(todos);
    //   res.send("This is get request");
  });
  
  todoRouter.post("/add-todo", async (req, res) => {
    const { name, todo } = req.body;
    const addTodo = await todoDomain.addTodo(name, todo);

    res.json(addTodo);
    // wss.clients.forEach((client) => {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(JSON.stringify({name,todo}));
    //   }
    // });
  });

  todoRouter.delete("/delete-todo/:id", async (req, res) => {
    const { id } = req.params;
    console.log("todoid",id);
    try {
      const deleteTodo = await todoDomain.deleteTodo(id);
      res.json(deleteTodo);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Error deleting todo" });
    }
  });
  
  // return todoRouter
// }

