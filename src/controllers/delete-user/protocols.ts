import { User } from "../../models/user";

export interface DeleteUserRepositoryInterface {
  deleteIser(id: string): Promise<User>;
}
