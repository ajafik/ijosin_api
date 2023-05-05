import { Controller, Get, Version } from '@nestjs/common';
import { MainService } from './main.service';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Version(['1', '2'])
  @Get()
  AboutAPI(): any {
    return this.mainService.AboutAPI();
  }
}
