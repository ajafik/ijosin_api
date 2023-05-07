import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { FirstTimerService } from './first_timer.service';
import { FirstTimer } from './first_timer.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('First Timer Member')
@Controller('first-timer')
export class FirstTimerController {
  constructor(private readonly firstTimerService: FirstTimerService) {}
  @Get()
  getAll(): any {
    return this.firstTimerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<FirstTimer> {
    const firstTimer = await this.firstTimerService.findOne(id);
    if (!firstTimer) {
      throw new NotFoundException('First timer does not exist!');
    } else {
      return firstTimer;
    }
  }

  @Post()
  async create(@Body() firstTimer: FirstTimer): Promise<FirstTimer> {
    return this.firstTimerService.create(firstTimer);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() firstTimer: FirstTimer,
  ): Promise<any> {
    return this.firstTimerService.update(id, firstTimer);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    const firstTimer = await this.firstTimerService.findOne(id);
    if (!firstTimer) {
      throw new NotFoundException('First Timer does not exist!');
    }
    return this.firstTimerService.delete(id);
  }
}
