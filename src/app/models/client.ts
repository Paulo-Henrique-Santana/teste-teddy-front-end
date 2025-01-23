export interface ParamsGetClients {
  page: number;
  pageSize: number;
}

export interface Client {
  id: number;
  name: string;
  salary: number;
  companyValue: number;
}

export interface ClientResponse {
  items: Client[];
  total: number;
  hasNext: boolean;
}