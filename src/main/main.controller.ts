import { Controller, Get } from '@nestjs/common';
import { MainService } from './main.service';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}
  @Get()
  AboutAPI(): any {
    return this.mainService.AboutAPI();
  }
}
