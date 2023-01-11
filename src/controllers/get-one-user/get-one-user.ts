import { User } from "../../models/user";
import { notFound, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, ControllerInterface } from "../protocols";
import { GetOneUserRepositoryInterface } from "./protocols";

export class GetOneUserController implements ControllerInterface {
  constructor(
    private readonly getOneUserRepository: GetOneUserRepositoryInterface
  ) {}
  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<User | string>> {
    try {
      const id = httpRequest?.params?.id;

      const user = await this.getOneUserRepository.getOneUser(id);

      if (!id) return notFound("User not found");

      return ok(user);
    } catch (err) {
      console.log(err);
      return serverError();
    }
  }
}
