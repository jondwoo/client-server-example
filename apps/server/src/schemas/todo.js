import { Schema, model } from "mongoose";

const TodoSchema = new Schema({
  name: String,
});

export const Todo = model("Todo", TodoSchema);
