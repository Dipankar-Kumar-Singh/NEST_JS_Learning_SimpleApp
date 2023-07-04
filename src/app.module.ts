import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as dotenv from 'dotenv'
import { User } from './typeorm/entities/User';
dotenv.config()


// similar to Data-source
@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mysql" ,
    host : "localhost" ,
    port : 3306 ,
    username : "root" , 
    password :  process.env.DB_PASSWORD , 
    database : "nest_test_db" ,
    entities : [User] , 
    synchronize : true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


