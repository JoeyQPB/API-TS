# Users API

API feita em um vídeo postado no meu canal no YouTube. Para acessá-lo, [clique aqui](https://youtu.be/gU3kp7Aw0JI).

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- MongoDB

## Conceitos utilizados

- SOLID
- Injeção de Dependência (Dependency Injection)
- Repository Pattern

## Entidades

<pre>
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

