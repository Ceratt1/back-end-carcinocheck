import { PartialType } from "@nestjs/mapped-types";
import { Role } from "../../enums/doctor.enum/doctor.enum";
import { UserDto } from "../user/usuario.dto";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class DoctorDto extends UserDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    role : Role;

    @IsString()
    @IsNotEmpty()
    doctor_UUID : string;

}


export class LoginDoctorDto extends PartialType(DoctorDto) {
    token ?: string
}