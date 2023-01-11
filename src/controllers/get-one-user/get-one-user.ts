import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
  GetOneUserControllerInterface,
  GetOneUserRepositoryInterface,
} from "./protocols";

export class GetOneUserController implements GetOneUserControllerInterface {
  constructor(
    private readonly getOneUserRepository: GetOneUserRepositoryInterface
  ) {}
  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>> {
    try {
      const id = httpRequest?.params?.id;

      const user = await this.getOneUserRepository.getOneUser(id);

      if (!id) {
        return { statusCode: 404, body: "User not found" };
      }

      return { statusCode: 200, body: user };
    } catch (err) {
      console.log(err);
      return { statusCode: 500, body: "Something went wrong" };
    }
  }
}
