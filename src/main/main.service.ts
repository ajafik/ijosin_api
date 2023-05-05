import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  AboutAPI(): any {
    return { description: 'Ijosin API' };
  }
}
