import { IsEmail, IsNotEmpty, IsString, MinLength, ValidateIf } from "class-validator";
//import { IsEitherEmailOrUsername } from "../validator/register.validator";

export class LoginDto {

    /* @ValidateIf(o => !o.username) // Si username no está presente, email es requerido
    @IsEitherEmailOrUsername('username', {
        message: 'Either email or username must be provided',
    }) */
    @IsEmail()
    email: string;

    /* @IsString()
    @ValidateIf(o => !o.email) // Si email no está presente, username es requerido
    @IsEitherEmailOrUsername('email', {
        message: 'Either email or username must be provided',
    })
    username: string; */

    @IsString()
    @IsNotEmpty()
    @MinLength(8, {
        message: 'La contraseña debe tener al menos 8 caracteres.'
    })
    password: string;
}
