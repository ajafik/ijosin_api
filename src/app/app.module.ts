import { Module } from '@nestjs/common';
import { MainModule } from '../main/main.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { FirstTimerModule } from '../first_timer/first_timer.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    MainModule,
    FirstTimerModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
})
export class AppModule {}
