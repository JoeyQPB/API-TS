# Users API

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB
- Swagger
- Jest

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern
- Testes unitários

## Entidades

### USER

User {
  id: string;
  name: string;
  email: string;
  telefone: number;
  enderço?: Address;
  cpf: string;
}}</pre>

## Rotas

- GET /users - retorna os usuários salvos no banco
- GET /user/:id - retorna o usuário salvo no banco
- POST /create_user - cria um usuário
- PATCH /edit_user/:id - atualiza um usuário
- DELETE /delete_user/:id - deleta um usuário
- GET /api-docs - documentação da API com Swagger

## Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)
