import { Module } from '@nestjs/common';
import { DoctorModule } from './controllers/doctor/doctor.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), DoctorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
