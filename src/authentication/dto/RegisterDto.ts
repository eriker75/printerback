import { IsEmail, IsString } from "class-validator";

export class RegisterDto {

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsString()
    username: string;

    @IsString()
    first_name: string;

    @IsString()
    last_name: string;
}
