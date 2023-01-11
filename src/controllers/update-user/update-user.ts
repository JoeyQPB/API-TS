import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  UpdateUserControllerInterface,
  updateUserParams,
  UpdateUserRepositoryInterface,
} from "./protocols";
import validator from "validator";

export class UpdateUserController implements UpdateUserControllerInterface {
  constructor(
    private readonly updateUserRepository: UpdateUserRepositoryInterface
  ) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!id) {
        return { statusCode: 400, body: "Request missing 'ID' " };
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);
      if (!emailIsValid) {
        return { statusCode: 400, body: "email invalid" };
      }

      const allowedFieldsToUpdate: (keyof updateUserParams)[] = [
        "email",
        "telefone",
        "enderço",
      ];
      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof updateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return { statusCode: 400, body: "Some received field is no allowed" };
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (err) {
      console.log(err);
      return { statusCode: 500, body: "Somethinf went wrong" };
    }
  }
}
