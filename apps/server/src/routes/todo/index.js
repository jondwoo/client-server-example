import express from "express";
import { Todo } from "../../schemas/todo.js";

const router = express.Router();

router
  .route("/todos")
  .get(async (req, res) => {
    const todos = await Todo.find({}, { _id: false }).select("-__v");

    return res.status(200).send(todos);
  })
  .post(async (req, res) => {
    const todo = req.body;

    await Todo.create(todo);

    return res.sendStatus(200);
  });

export default router;
