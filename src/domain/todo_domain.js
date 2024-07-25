import mongoose from "mongoose";
import { todoDb } from "../pkg/mongo/connect.js";
import {uuid} from "../pkg/functions/functions.js";

const todoSchema = new mongoose.Schema({
  id: { type: String, default: () => `user-${uuid()}`, unique: true },
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

const deleteTodo = async (id) => {
  const todoDeleteResponse = await todoModel.findOneAndDelete({id: id});
  return true;
};

export const todoDomain = {
  addTodo,
  listOfTodos,
  deleteTodo,
};
