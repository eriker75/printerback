import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto) {
        console.log(createUserDto);

        try {
            const { password, ...userData } = createUserDto;

            const newUser = this.usersRepository.create({
                ...userData,
                password: bcrypt.hashSync(password, 10)
            });

            return await this.usersRepository.save(newUser);
        } catch (error) {
            console.log(error);
        }
    }

    async findAll() {
        return await this.usersRepository.find();
    }

    async findOneByEmail(email: string) {
        return this.usersRepository.findOneBy({ email });
    }

    async findOneByUsername(username: string) {
        return this.usersRepository.findOneBy({ username });
    }

    async findOneByEmailOrUsername(email: string, username: string) {
        return this.usersRepository.findOneBy({ email, username });
    }

    async findOne(id: string) {
        return await this.usersRepository.findOneBy({id});
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
