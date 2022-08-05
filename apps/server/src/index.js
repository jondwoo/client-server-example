/* eslint-disable turbo/no-undeclared-env-vars */
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes";
import "dotenv/config";

const app = express();
const port = 3001;

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.adxitkj.mongodb.net/?retryWrites=true&w=majority`,
);

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
