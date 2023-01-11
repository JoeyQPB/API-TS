import { ControllerInterface } from "../protocols";
import { GetUsersRepositoryInterface } from "./protocols";

export class GetUsersController implements ControllerInterface {
  constructor(
    private readonly getUsersRepository: GetUsersRepositoryInterface
  ) {
    this.getUsersRepository = getUsersRepository;
  }
  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (err) {
      console.log(err);
      return {
        statusCode: 500,
        body: "Something went wrong.",
      };
    }
  }
}
