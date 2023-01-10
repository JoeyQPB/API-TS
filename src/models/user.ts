export interface Address {
  cidade: string;
  cep: number;
  rua: string;
  numero: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  telefone: number;
  enderço: Address;
  cpf: string;
}
