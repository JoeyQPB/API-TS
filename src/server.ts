import express from "express";
import * as dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users.ts/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoClient } from "./database/mongo";

const main = async () => {
  const app = express();

  await MongoClient.connect();

  app.use(express.json());
  dotenv.config();

  app.get("/users", async (req, res) => {
    try {
      const mongoGetUsersRepository = new MongoGetUsersRepository();

      const getUsersController = new GetUsersController(
        mongoGetUsersRepository
      );

      const { body, statusCode } = await getUsersController.handle();

      res.status(statusCode).send(body);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.listen(Number(process.env.PORT), () => {
    console.log(`Server running and up at port: ${process.env.PORT}`);
  });
};

main();
