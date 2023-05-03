import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { jwtConstants } from './constants';
import { TrtagsModule } from './trtags/trtags.module';
import { TravelsModule } from './travels/travels.module';
import { UsersModule } from './user/user.module';
import { MiniStoryModule } from './miniStory/miniStory.module';
import { TravelWayModule } from './travelWay/miniStory.module';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    MongooseModule.forRoot(jwtConstants.db_uri),
    AuthModule,
    UsersModule,
    TrtagsModule,
    TravelsModule,
    StoryModule,
    MiniStoryModule,
    TravelWayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
