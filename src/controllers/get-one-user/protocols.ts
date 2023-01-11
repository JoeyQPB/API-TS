import { User } from "../../models/user";

export interface GetOneUserRepositoryInterface {
  getOneUser(id: string): Promise<User>;
}
