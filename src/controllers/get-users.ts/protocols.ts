import { User } from "../../models/user";
import { HttpResponse } from "../protocols";

export interface GetUsersControllerInterface {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface GetUsersRepositoryInterface {
  getUsers(): Promise<User[]>;
}
