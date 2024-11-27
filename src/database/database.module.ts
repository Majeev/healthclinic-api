import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { Appointment } from '../scheduler/appointments.entity';

@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory(config: ConfigService): TypeOrmModuleOptions {
        return {
          type: 'postgres',
          host: config.get('DATABASE_HOST'),
          port: config.get('DATABASE_PORT'),
          username: config.get('DATABASE_USERNAME'),
          password: config.get('DATABASE_PASSWORD'),
          database: 'healthclinic_db',
          entities: [Appointment],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
