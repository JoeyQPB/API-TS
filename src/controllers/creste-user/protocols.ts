import { Address, User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface CreateUserControllerInterface {
  handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>>;
}

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
