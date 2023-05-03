import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoryController } from './story.controller';
import { StoryService } from './story.service';
import { StorySchema } from './schemas/story.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Story', schema: StorySchema }]),
  ],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
