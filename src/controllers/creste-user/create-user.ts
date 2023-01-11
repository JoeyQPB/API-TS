import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  CreateUserControllerInterface,
  CreateUserParams,
  CreateUserRepositoryInterface,
} from "./protocols";
import validator from "validator";

export class CreateUserController implements CreateUserControllerInterface {
  constructor(
    private readonly createUserRepository: CreateUserRepositoryInterface
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      const requireFields = ["name", "email", "cpf", "telefone"];

      for (const fields of requireFields) {
        if (!httpRequest?.body?.[fields as keyof CreateUserParams]) {
          return { statusCode: 400, body: `${fields} is required` };
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return { statusCode: 400, body: "email ivalid" };
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );
      return { statusCode: 201, body: user };
    } catch (err) {
      console.log(err);
      return {
        statusCode: 500,
        body: "somenthing went wrong...",
      };
    }
  }
}
