import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('doctor')
export class DoctorController {


    @HttpCode(HttpStatus.OK)
    @Get()
    getHello(): string {
        return 'Hello World!';
    }


}
