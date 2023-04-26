import { Module } from '@nestjs/common';
import { MiniStoryController } from './miniStory.controller';
import { MiniStoryService } from './miniStory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { miniStorySchema } from './schemas/miniStory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'miniStory', schema: miniStorySchema }]),
  ],
  controllers: [MiniStoryController],
  providers: [MiniStoryService],
})
export class MiniStoryModule {}
