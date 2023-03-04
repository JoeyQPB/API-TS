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

## User

<pre>
User = {
  name: { type: String, require: true, trim: true, uppercase: true },
  description: { type: String, require: true, trim: true },
  price: { type: Number, require: true },
  createdBy: { type: Types.ObjectId, ref: "User", require: true },
  createdAt: { type: Date, default: Date.now() },
  updatedBy: [{ type: Types.ObjectId, ref: "User", require: true }],
}
</pre>


## Rotas

- GET /users - retorna os usuários salvos no banco
- GET /user/:id - retorna o usuário salvo no banco
- POST /create_user - cria um usuário
- PATCH /edit_user/:id - atualiza um usuário
- DELETE /delete_user/:id - deleta um usuário
- GET /api-docs - documentação da API com Swagger

## Arquitetura

![Arquitetura](https://imgur.com/k5mXFoZ.png)
