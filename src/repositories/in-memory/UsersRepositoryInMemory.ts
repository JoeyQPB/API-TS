import { randomUUID } from "crypto";
import {
  CreateUserParams,
  CreateUserRepositoryInterface,
} from "../../controllers/creste-user/protocols";
import { created } from "../../controllers/helpers";
import { User } from "../../models/user";

export class InMemoryUserCreateRepository
  implements CreateUserRepositoryInterface
{
  public items: User[] = [];

  async createUser(params: CreateUserParams): Promise<User> {
    this.items.push({ id: `${randomUUID}`, ...params });

    return this.items[0];
  }
}
