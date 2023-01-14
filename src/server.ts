import express from "express";
import * as dotenv from "dotenv";
import { MongoClient } from "./database/mongo";
import { swaggerRouter } from "./routes/swagger.routes";
import { userRouter } from "./routes/user.routes";

const main = async () => {
  const app = express();
  app.use(express.json());
  dotenv.config();
  await MongoClient.connect();

  app.use("/", swaggerRouter);
  app.use("/", userRouter);

  app.listen(Number(process.env.PORT), () => {
    console.log(`Server running and up at port: ${process.env.PORT}`);
  });
};

main();
