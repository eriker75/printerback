import { Body, Controller, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LoginDto } from './dto/LoginDto';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { GetUser } from './decorators/user.decorator';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/RegisterDto';

@Controller('auth')
export class AuthenticationController {
    //inject jwt service
    //inject mail service
    //inject config service
    constructor(
        private jwtService: JwtService,
        private userService: UsersService,
        // private mailService: MailService,
        // private configService: Config
    ) {}

    @Post('login')
    async login(
        @Body() loginDto: LoginDto
    ) {
        const user = await this.userService.findOneByEmail(loginDto.email);

        if(!user){
            throw new UnauthorizedException("Credenciales no validas")
        }

        const userInfo = {
            username: user.username,
            role: 'user',
            email: user.email,
            id: user.id
        };

        const token = await this.jwtService.signAsync(userInfo);

        return {
            token,
            user: {
                ...userInfo
            }
        }
    }

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        const newUser = await this.userService.create(registerDto);

        return {
            user: newUser,
            token: await this.jwtService.signAsync({
                username: newUser.username,
                sub: newUser.id
            })
        }
    }

    @Post('forgot-password')
    forgotPassword() {
        return 'forgot-password';
    }

    @Post('reset-password')
    resetPassword() {
        return 'reset-password';
    }

    @Post('change-password')
    changePassword() {
        return 'change-password';
    }

    @Post('refresh-token')
    refreshToken(){
        return 'refresh-token';
    }

    @Post('logout')
    logout(){
        return 'logout';
    }

    @Post('verify-email')
    verifyEmail(){
        return 'verify-email';
    }

    @Post('resend-verification-email')
    resendVerificationEmail(){
        return 'resend-verification-email';
    }

    @Post('change-email')
    changeEmail(){
        return 'change-email';
    }

    @Post('change-username')
    changeUsername(){
        return 'change-username';
    }

    @Post('delete-account')
    deleteAccount(){
        return 'delete-account';
    }

    @Post('deactivate-account')
    deactivateAccount(){
        return 'deactivate-account';
    }

    @Post('activate-account')
    activateAccount(){
        return 'activate-account';
    }

    @Post('update-profile')
    updateProfile(){
        return 'update-profile';
    }

    @Post('update-avatar')
    updateAvatar(){
        return 'update-avatar';
    }

    @Post('profile')
    @UseGuards(JwtAuthGuard)
    async profile(@GetUser() user: User){
        const {password, ...userData} = await this.userService.findOne(user.id);
        return userData;
    }
}
