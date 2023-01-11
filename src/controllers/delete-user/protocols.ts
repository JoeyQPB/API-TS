import { User } from "../../models/user";

export interface DeleteUserRepositoryInterface {
  deleteUser(id: string): Promise<User>;
}
