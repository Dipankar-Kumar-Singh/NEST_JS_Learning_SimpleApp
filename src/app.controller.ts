import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { json } from 'express';

type User = string ;

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get("/users") 
  // getTest() : any {
  //   // return this.appService.getTest() ;
  //   return "OKKK!!" ;
  // }
}
