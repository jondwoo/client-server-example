import express from "express";
import { Todo } from "../../schemas/todo.js";

const router = express.Router();

router
  .route("/todos")
  .get(async (_, res) => {
    const todos = await Todo.find({}).select("-__v");

    return res.status(200).send(todos);
  })
  .post(async (req, res) => {
    // impl
    const { newTodo } = req.body;
    console.log(newTodo);
    await Todo.create({ name: newTodo });
    return res.sendStatus(200);
  });

router
  .route("/todos/:todoId")
  .delete(async (req, res) => {
    const { todoId } = req.params;
    console.log(req.params);
    console.log("this is todoId: ", todoId);

    await Todo.findByIdAndDelete(todoId);
  })
  .put(async (req, res) => {
    const { todoId } = req.params;

    const { updatedTodo: newValue } = req.body;

    await Todo.findByIdAndUpdate({ _id: todoId }, { name: newValue });

    return res.sendStatus(200);
  });

export default router;
