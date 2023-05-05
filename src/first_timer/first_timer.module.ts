import { Module } from '@nestjs/common';
import { FirstTimerController } from './first_timer.controller';
import { FirstTimerService } from './first_timer.service';
import { FirstTimer } from './first_timer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FirstTimer])],
  controllers: [FirstTimerController],
  providers: [FirstTimerService],
})
export class FirstTimerModule {}
