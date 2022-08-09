import express from "express";
import todoRoutes from "./todo/index.js";

const router = express.Router();

router.use(todoRoutes);

export default router;
