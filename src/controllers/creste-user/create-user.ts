import { User } from "../../models/user";
import { HttpRequest, HttpResponse, ControllerInterface } from "../protocols";
import { CreateUserParams, CreateUserRepositoryInterface } from "./protocols";
import validator from "validator";
import { badRequest, created, serverError } from "../helpers";

export class CreateUserController implements ControllerInterface {
  constructor(
    private readonly createUserRepository: CreateUserRepositoryInterface
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const requireFields = ["name", "email", "cpf", "telefone"];

      for (const fields of requireFields) {
        if (!httpRequest?.body?.[fields as keyof CreateUserParams]) {
          return badRequest(`${fields} is required`);
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return badRequest("email ivalid");
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );
      return created<User>(user);
    } catch (err) {
      console.log(err);
      return serverError();
    }
  }
}
