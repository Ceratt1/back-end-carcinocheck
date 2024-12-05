import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDoctorDto } from 'src/dtos/doctor/doutor.dto';

@Controller('doctor')
export class DoctorController {


    @HttpCode(HttpStatus.OK)
    @Post("login")
    async Login(@Body() doctor: LoginDoctorDto): Promise<LoginDoctorDto>  {
        doctor.token = "token";
        return doctor;
    }

}
