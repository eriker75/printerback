import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrintersModule } from './printers/printers.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { MailerModule } from './mailer/mailer.module';
import { PdfModule } from './pdf/pdf.module';
import { TicketsModule } from './tickets/tickets.module';
import { SheetModule } from './sheet/sheet.module';
import { QrModule } from './qr/qr.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env',
    }),
    PrintersModule,
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    CommonModule,
    MailerModule,
    PdfModule,
    TicketsModule,
    SheetModule,
    QrModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
