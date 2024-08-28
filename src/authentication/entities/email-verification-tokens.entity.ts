import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('email_verification_tokens')
export class EamilVerificationTokens{

    @PrimaryColumn()
    email: string;

    @Column()
    token: string;

    @Column()
    created_at: Date;

    @Column()
    expires_at: Date;
}
