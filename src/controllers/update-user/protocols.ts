import { Address, User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface updateUserParams {
  email?: string;
  telefone?: number;
  enderço?: Address;
}

export interface UpdateUserControllerInterface {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface UpdateUserRepositoryInterface {
  updateUser(id: string, params: updateUserParams): Promise<User>;
}
