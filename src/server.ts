import express from "express";
import * as dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/creste-user/create-user";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const main = async () => {
  const app = express();
  app.use(express.json());
  dotenv.config();
  await MongoClient.connect();

  app.use("/api-docs", swaggerUi.serve);
  app.get("/api-docs", swaggerUi.setup(swaggerDocument));

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

  app.post("/create_user", async (req, res) => {
    try {
      const mongoCreateUserRepository = new MongoCreateUserRepository();

      const createUserController = new CreateUserController(
        mongoCreateUserRepository
      );

      const { body, statusCode } = await createUserController.handle({
        body: req.body,
      });

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
