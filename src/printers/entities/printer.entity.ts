import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('printers')
export class Printer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    ip_address: string;

    @Column()
    location: string;

    @Column()
    status: string;

    /* @Column()
    toner_level: number; */

    @Column({ type: 'timestamp', nullable: true })
    deleted_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
