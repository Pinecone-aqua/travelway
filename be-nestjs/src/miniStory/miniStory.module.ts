import { Module } from '@nestjs/common';
import { MiniStoryController } from './miniStory.controller';
import { MiniStoryService } from './miniStory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { miniStorySchema } from './schemas/miniStory.schema';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'miniStory', schema: miniStorySchema }]),
  ],
  controllers: [MiniStoryController],
  providers: [MiniStoryService, CloudinaryService],
})
export class MiniStoryModule {}
