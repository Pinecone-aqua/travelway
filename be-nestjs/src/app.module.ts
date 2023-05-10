import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsModule } from './tags/tags.module';
import { TravelsModule } from './travels/travels.module';
import { UsersModule } from './user/user.module';
import { MiniStoryModule } from './miniStory/miniStory.module';
import { TravelWayModule } from './travelWay/miniStory.module';
import { StoryModule } from './story/story.module';
import { dbConstants } from './constants';
import { ConfigModule } from '@nestjs/config';
// import { UploadController } from './travels/uploadController';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env',
    }),
    MongooseModule.forRoot(dbConstants.db_uri),
    AuthModule,
    UsersModule,
    TagsModule,
    TravelsModule,
    StoryModule,
    MiniStoryModule,
    TravelWayModule,
    // UploadController,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
