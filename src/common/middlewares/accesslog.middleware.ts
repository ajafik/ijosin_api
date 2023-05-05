import * as p from 'path';
import { createStream } from 'rotating-file-stream';

import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AccessLogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    // create a rotating write stream
    const accessLogStream = createStream('access.log', {
      interval: '1M', // rotate Monthly
      path: p.join(p.dirname(p.basename(__dirname)), 'logs'),
      compress: 'gzip', // compress rotated files
    });
    console.log(accessLogStream);
    next();
  }
}
