import express from "express";
import { GetUsersController } from "../controllers/get-users/get-users";
import { MongoGetUsersRepository } from "../repositories/get-users/mongo-get-users";
import { MongoCreateUserRepository } from "../repositories/create-user/mongo-create-user";
import { CreateUserController } from "../controllers/creste-user/create-user";
import { MongoUpdateUserRepository } from "../repositories/update-user/mongo-update-user";
import { UpdateUserController } from "../controllers/update-user/update-user";
import { MongoDeleteUserRepository } from "../repositories/delete-user/mongo-delete-user";
import { DeleteUserController } from "../controllers/delete-user/delete-user";
import { MongoGetOneUserRepository } from "../repositories/get-one-user/mongo-get-one-user";
import { GetOneUserController } from "../controllers/get-one-user/get-one-user";

const userRouter = express.Router();

userRouter.get("/users", async (req, res) => {
  try {
    const mongoGetUsersRepository = new MongoGetUsersRepository();

    const getUsersController = new GetUsersController(mongoGetUsersRepository);

    const { body, statusCode } = await getUsersController.handle();

    res.status(statusCode).send(body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

userRouter.get("/user/:id", async (req, res) => {
  try {
    const mongoGetOneUserRepository = new MongoGetOneUserRepository();

    const getOneUserController = new GetOneUserController(
      mongoGetOneUserRepository
    );

    const { body, statusCode } = await getOneUserController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

userRouter.post("/create_user", async (req, res) => {
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

userRouter.patch("/edit_user/:id", async (req, res) => {
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

userRouter.delete("/delete_user/:id", async (req, res) => {
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

export { userRouter };
