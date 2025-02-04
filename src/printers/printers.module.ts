import { Module } from '@nestjs/common';
import { PrintersService } from './printers.service';
import { PrintersController } from './printers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Printer } from './entities/printer.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Printer])
    ],
    controllers: [PrintersController],
    providers: [PrintersService],
})
export class PrintersModule { }
