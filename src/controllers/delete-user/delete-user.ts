import { User } from "../../models/user";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, ControllerInterface } from "../protocols";
import { DeleteUserRepositoryInterface } from "./protocols";

export class DeleteUserController implements ControllerInterface {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepositoryInterface
  ) {}
  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Request missing 'ID' ");
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return ok<User>(user);
    } catch (err) {
      console.log(err);
      return serverError();
    }
  }
}
