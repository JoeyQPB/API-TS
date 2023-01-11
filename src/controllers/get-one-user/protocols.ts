import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";

export interface GetOneUserControllerInterface {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>;
}

export interface GetOneUserRepositoryInterface {
  getOneUser(id: string): Promise<User>;
}
