import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

const { OK } = HttpStatus;

@Controller()
export class AppController {
  @Get()
  getHello(@Res() response: Response) {
    response.status(OK).json({ statusCode: OK, message: 'Server is running! 🚀' });
  }
}
