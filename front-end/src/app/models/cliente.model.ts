export class Cliente {
  id?: number;
  codigo?: string;
  nome?: string;
  email?: string;
  cpf?: string;
  sexo?: string;

  password?: string;
  telefone?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;

}

export interface Link {
    url: string;
    label: string;
    active: boolean;
}

export class ResponseCliente {
    current_page?: number;
    data?: Cliente[];
    first_page_url?: string;
    from?: number;
    last_page?: number;
    last_page_url?: string;
    links?: Link[];
    next_page_url?: string;
    path?: string;
    per_page?: number;
    prev_page_url?: any;
    to?: number;
    total?: number;
}



