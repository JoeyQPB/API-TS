import { GetUsersRepositoryInterface } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements GetUsersRepositoryInterface {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<Omit<User, "id">>("users")
      .find({})
      .toArray();

    return [
      {
        id: "01",
        name: "joey",
        email: "joey@ex.com",
        telefone: 77999862226,
        enderço: {
          cidade: "VCA",
          cep: 450000,
          rua: "rua dos bobos",
          numero: 0,
        },
        cpf: "00000000000",
      },
      ...users.map(({ _id, ...rest }) => ({ ...rest, id: _id.toHexString() })),
    ];
  }
}

// export class PostgressGetUsersRepository
//   implements GetUsersRepositoryInterface
// {
//   async getUsers(): Promise<User[]> {
//     return [
//       {
//         name: "joey",
//         email: "joey@ex.com",
//         telefone: 77999862226,
//         enderço: {
//           cidade: "VCA",
//           cep: 450000,
//           rua: "rua dos bobos",
//           numero: 0,
//         },
//         cpf: "00000000000",
//       },
//     ];
//   }
// }
