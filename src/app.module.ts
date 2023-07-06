import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as dotenv from 'dotenv'
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';

dotenv.config()

// similar to Data-source
@Module({
  imports: [TypeOrmModule.forRoot({
    // type : "mysql" ,
    type : "postgres" ,
    host : "localhost" ,
    // port : 3306 ,
    port : 5432 ,
    username : "postgres" , 
    password :  process.env.DB_PASSWORD , 
    database : "nest_test_db" ,
    entities : [User] , 
    synchronize : true
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}


