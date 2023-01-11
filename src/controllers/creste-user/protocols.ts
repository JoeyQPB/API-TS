import { Address, User } from "../../models/user";

export interface CreateUserParams {
  name: string;
  email: string;
  telefone: number;
  enderço: Address;
  cpf: string;
}

export interface CreateUserRepositoryInterface {
  createUser(params: CreateUserParams): Promise<User>;
}
