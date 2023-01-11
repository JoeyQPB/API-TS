import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  DeleteUserControllerInterface,
  DeleteUserRepositoryInterface,
} from "./protocols";

export class DeleteUserController implements DeleteUserControllerInterface {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepositoryInterface
  ) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return { statusCode: 500, body: "missing user id" };
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return { statusCode: 200, body: user };
    } catch (err) {
      console.log(err);
      return { statusCode: 500, body: "Something went wrong" };
    }
  }
}
