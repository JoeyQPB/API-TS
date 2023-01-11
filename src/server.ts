import express from "express";
import * as dotenv from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import { MongoClient } from "./database/mongo";
import { MongoCreateUserRepository } from "./repositories/create-user/mongo-create-user";
import { CreateUserController } from "./controllers/creste-user/create-user";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import { MongoUpdateUserRepository } from "./repositories/update-user/mongo-update-user";
import { UpdateUserController } from "./controllers/update-user/update-user";
import { MongoDeleteUserRepository } from "./repositories/delete-user/mongo-delete-user";
import { DeleteUserController } from "./controllers/delete-user/delete-user";

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

  app.patch("/edit_user/:id", async (req, res) => {
    try {
      const mongoUpdateUserRepository = new MongoUpdateUserRepository();

      const updateUserController = new UpdateUserController(
        mongoUpdateUserRepository
      );

      const { body, statusCode } = await updateUserController.handle({
        body: req.body,
        params: req.params,
      });

      res.status(statusCode).send(body);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  app.delete("/delete_user/:id", async (req, res) => {
    try {
      const mongoDeleteUserRepository = new MongoDeleteUserRepository();

      const deleteUserController = new DeleteUserController(
        mongoDeleteUserRepository
      );

      const { body, statusCode } = await deleteUserController.handle({
        params: req.params,
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
