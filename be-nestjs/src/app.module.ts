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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TagsModule,
    TravelsModule,
    StoryModule,
    MiniStoryModule,
    TravelWayModule,
    // GoogleLoginModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_URI'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: './env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
