import { Module } from '@nestjs/common';
import { GoogleLoginController } from './google-login.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from '../user/user.module';
import { GoogleLoginService } from './google.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [GoogleLoginController],
  providers: [GoogleLoginService],
})
export class GoogleLoginModule {}
