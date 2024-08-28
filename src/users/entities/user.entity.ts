import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    first_name: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false
    })
    last_name: string;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP'
    })
    updated_at: Date;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: null
    })
    deleted_at: Date;

    @Column({
        type: 'boolean',
        default: true,
    })
    is_active: boolean;

    @Column({
        type: 'timestamp',
        nullable: true,
        default: null
    })
    email_verified_at: Date;

    /* @Column({
        type: 'int',
        nullable: true,
    })
    role_id?: number; */

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    profile_picture?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    phone_number?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    address?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    city?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    state?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    country?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    zip?: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: true,
        default: null
    })
    timezone?: string;
}
