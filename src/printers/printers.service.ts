import { Injectable } from '@nestjs/common';
import { CreatePrinterDto } from './dto/create-printer.dto';
import { UpdatePrinterDto } from './dto/update-printer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Printer } from './entities/printer.entity';

@Injectable()
export class PrintersService {
    constructor(
        @InjectRepository(Printer)
        private usersRepository:
        Repository<Printer>,
    ) { }

    create(createPrinterDto: CreatePrinterDto) {
        return 'This action adds a new printer';
    }

    async findAll() {
        return await this.usersRepository.find();
    }

    async findOne(id: string) {
        return await this.usersRepository.findOneBy({id});
    }

    update(id: number, updatePrinterDto: UpdatePrinterDto) {
        return `This action updates a #${id} printer`;
    }

    remove(id: number) {
        return `This action removes a #${id} printer`;
    }
}
