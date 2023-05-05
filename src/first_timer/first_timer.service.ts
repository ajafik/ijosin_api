import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FirstTimer } from './first_timer.entity';

@Injectable()
export class FirstTimerService {
  constructor(
    @InjectRepository(FirstTimer)
    private firstTimerRepository: Repository<FirstTimer>,
  ) {}

  async findAll(): Promise<FirstTimer[]> {
    return this.firstTimerRepository.find();
  }

  async findOne(id: number): Promise<FirstTimer> {
    return this.firstTimerRepository.findOne({ where: { id } });
  }

  async create(user: Partial<FirstTimer>): Promise<FirstTimer> {
    const newuser = this.firstTimerRepository.create(user);
    return this.firstTimerRepository.save(newuser);
  }

  async update(id: number, user: Partial<FirstTimer>): Promise<FirstTimer> {
    await this.firstTimerRepository.update(id, user);
    return this.firstTimerRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.firstTimerRepository.delete(id);
  }
}
