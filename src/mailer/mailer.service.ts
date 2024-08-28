import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerService {

    async sendMail() {
        console.log('send mail');
    }
}
