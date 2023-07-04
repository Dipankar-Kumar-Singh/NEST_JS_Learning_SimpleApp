import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type : "mysql" ,
    host : "localhost" ,
    port : 3306 ,
    username : "root" , 
    password :  process.env.DB_PASSWORD , 
    database : "nest_test_db" ,
    entities : [] , 
    synchronize : true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


