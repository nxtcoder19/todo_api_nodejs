import mongoose from "mongoose";
import { todoDb } from "../pkg/mongo/connect.js";

const todoSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  todo: { type: String },
});

const todoModel = todoDb.model("listOfTodo", todoSchema);

const addTodo = async (name, todo) => {
  const addTodo = await todoModel.create({ name, todo });
  return addTodo;
};

const listOfTodos = async () => {
  const todos = await todoModel.find();
  return todos;
};

export const todoDomain = {
  addTodo,
  listOfTodos,
};
