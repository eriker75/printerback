import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        /* console.log(
          'Database Host:',
          configService.get<string>('DATABASE_HOST'),
        );
        console.log(
          'Database Port:',
          configService.get<number>('DATABASE_PORT'),
        );
        console.log(
          'Database User:',
          configService.get<string>('DATABASE_USER'),
        );
        console.log(
          'Database Password:',
          configService.get<string>('DATABASE_PASSWORD'),
        );
        console.log(
          'Database Name:',
          configService.get<string>('DATABASE_NAME'),
        );
        */
        return {
          type: 'mysql',
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          username: configService.get<string>('DATABASE_USER'),
          password: configService.get<string>('DATABASE_PASSWORD'),
          database: configService.get<string>('DATABASE_NAME'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
