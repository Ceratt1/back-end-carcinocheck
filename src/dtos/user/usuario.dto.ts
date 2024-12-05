import { IsDate, IsNotEmpty, IsString } from "class-validator";

export abstract class UserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    
    @IsString()
    cpf?: string;
    
    @IsString()
    cnpj?: string;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;
}