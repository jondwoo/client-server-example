import mongoose from "mongoose";
const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  name: String,
});

export const Todo = model("Todo", TodoSchema);
