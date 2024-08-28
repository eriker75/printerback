import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationController } from './authentication.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/passport-jwt.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    controllers: [AuthenticationController],
    providers: [JwtStrategy],
})
export class AuthenticationModule {}
