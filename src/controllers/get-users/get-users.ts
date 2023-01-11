import { User } from "../../models/user";
import { ok, serverError } from "../helpers";
import { ControllerInterface, HttpResponse } from "../protocols";
import { GetUsersRepositoryInterface } from "./protocols";

export class GetUsersController implements ControllerInterface {
  constructor(
    private readonly getUsersRepository: GetUsersRepositoryInterface
  ) {
    this.getUsersRepository = getUsersRepository;
  }
  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers();

      return ok<User[]>(users);
    } catch (err) {
      console.log(err);
      return serverError();
    }
  }
}
