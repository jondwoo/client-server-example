import express from "express";
import Todo from "../../schemas/todo";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {})
  .post(async (req, res) => {
    console.log(req.body);
    // const { todo } = req.body;
    // await Todo.create(todo).exec();
    //
    // return res.sendStatus(200);
  });

export default router;
