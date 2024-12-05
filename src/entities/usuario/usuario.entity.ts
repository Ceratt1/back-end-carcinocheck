export abstract class Usuario {
    id: number;
    nome: string;
    cpf?: string;
    cnpj?: string;
    criadoEm: Date;
}