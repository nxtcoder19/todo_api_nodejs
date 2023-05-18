import { Router } from "express";
import { todoDomain } from "../domain/todo_domain.js";
import {WebSocket} from 'ws';

export const withTodoRouter = (wss) => {
  const todoRouter = Router();

  todoRouter.get("/list-todos", async (req, res) => {
    const todos = await todoDomain.listOfTodos();
    res.json(todos);
    //   res.send("This is get request");
  });
  
  todoRouter.post("/add-todo", async (req, res) => {
    const { name, todo } = req.body;
    const addTodo = await todoDomain.addTodo(name, todo);

    res.json(addTodo);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({name,todo}));
      }
    });
  });
  
  return todoRouter
}

