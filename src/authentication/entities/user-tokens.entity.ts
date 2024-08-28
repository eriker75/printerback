import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('password_reset_tokens')
export class PasswordResetTokens{

    @PrimaryColumn()
    email: string;

    @Column()
    token: string;

    @Column()
    created_at: Date;

    @Column()
    expires_at: Date;
}
