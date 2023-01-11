import { User } from "../../models/user";
import { HttpRequest, HttpResponse, ControllerInterface } from "../protocols";
import { updateUserParams, UpdateUserRepositoryInterface } from "./protocols";
import validator from "validator";
import { badRequest, ok, serverError } from "../helpers";

export class UpdateUserController implements ControllerInterface {
  constructor(
    private readonly updateUserRepository: UpdateUserRepositoryInterface
  ) {}
  async handle(
    httpRequest: HttpRequest<updateUserParams>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return badRequest("Request missing 'ID' ");
      }

      if (!body) {
        return badRequest("Request missing Fields ");
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email!);
      if (!emailIsValid) {
        return badRequest("email invalid");
      }

      const allowedFieldsToUpdate: (keyof updateUserParams)[] = [
        "email",
        "telefone",
        "enderço",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body!).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof updateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return { statusCode: 400, body: "Some received field is no allowed" };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok<User>(user);
    } catch (err) {
      console.log(err);
      return serverError();
    }
  }
}
