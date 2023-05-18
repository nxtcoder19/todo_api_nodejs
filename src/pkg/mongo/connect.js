import mongoose from "mongoose";
import { config } from "../../config.js";

const connection = mongoose.createConnection(config.mongoUri);
export const todoDb = connection.useDb("Todo");
