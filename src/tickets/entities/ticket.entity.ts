import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tickets')
export class Ticket {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    created_at: Date;
}
