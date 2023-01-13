import { InMemoryUserCreateRepository } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserController } from "./create-user";
import { MongoCreateUserRepository } from "../../repositories/create-user/mongo-create-user";

describe("Create User", () => {
  it("Should be able to create a new user", () => {
    const createUserInMemoryRepository = new InMemoryUserCreateRepository();
    const sut = new CreateUserController(createUserInMemoryRepository);

    expect(
      sut.handle({
        body: {
          name: "Jhon Doe",
          email: "Jhon_Doe@teste.com",
          telefone: 777,
          enderço: { cidade: "NA", cep: 45000, rua: "dos bobos", numero: 0 },
          cpf: "002",
        },
      })
    ).resolves.toBeInstanceOf(MongoCreateUserRepository);
  });
});
