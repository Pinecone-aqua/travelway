import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { jwtConstants } from './constants';
import { TagsModule } from './tags/tags.module';
import { TravelsModule } from './travels/travels.module';
import { UsersModule } from './user/user.module';
import { QuestModule } from './quest/quest.module';
import { MiniStoryModule } from './miniStory/miniStory.module';

@Module({
  imports: [
    MongooseModule.forRoot(jwtConstants.db_uri),
    AuthModule,
    UsersModule,
    TagsModule,
    TravelsModule,
    QuestModule,
    MiniStoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
