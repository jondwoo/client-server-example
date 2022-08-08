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
  });

router.route("/todos/:todoId").put(async (req, res) => {
  const { todoId } = req.params;

  const { updatedTodo: newValue } = req.body;

  await Todo.findByIdAndUpdate({ _id: todoId }, { name: newValue }).select(
    "-__v",
  );

  return res.sendStatus(200);
});

export default router;
