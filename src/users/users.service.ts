import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from "typeorm"
import { User } from 'src/typeorm/entities/User';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {

    console.log('Adding New User') ;
    return await this.usersRepository.save(createUserDto);

    return 'This action adds a new user';
  }

  async findAll() {
    return await this.usersRepository.findBy({})
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
