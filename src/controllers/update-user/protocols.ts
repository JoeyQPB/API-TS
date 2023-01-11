import { Address, User } from "../../models/user";

export interface updateUserParams {
  email?: string;
  telefone?: number;
  enderço?: Address;
}

export interface UpdateUserRepositoryInterface {
  updateUser(id: string, params: updateUserParams): Promise<User>;
}
