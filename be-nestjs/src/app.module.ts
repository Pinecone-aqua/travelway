import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { jwtConstants } from './constants';
import { TrtagsModule } from './trtags/trtags.module';
import { TravelsModule } from './travels/travels.module';
import { UsersModule } from './user/user.module';
import { QuestModule } from './quest/quest.module';

@Module({
  imports: [
    MongooseModule.forRoot(jwtConstants.db_uri),
    AuthModule,
    UsersModule,
    TrtagsModule,
    TravelsModule,
    QuestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
