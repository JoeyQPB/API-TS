import { GetUsersRepositoryInterface } from "../../controllers/get-users.ts/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements GetUsersRepositoryInterface {
  async getUsers(): Promise<User[]> {
    return [
      {
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
