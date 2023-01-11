import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface DeleteUserControllerInterface {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface DeleteUserRepositoryInterface {
  deleteUser(id: string): Promise<User>;
}
