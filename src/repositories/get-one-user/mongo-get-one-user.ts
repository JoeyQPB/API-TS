import { ObjectId } from "mongodb";
import { GetOneUserRepositoryInterface } from "../../controllers/get-one-user/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetOneUserRepository
  implements GetOneUserRepositoryInterface
{
  async getOneUser(id: string): Promise<User> {
    const user = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("User not found");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
