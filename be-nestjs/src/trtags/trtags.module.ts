import { Module } from '@nestjs/common';
import { TrtagsController } from './trtags.controller';
import { TrtagsService } from './trtags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TrTagsSchema } from './schemas/tags.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TrTags', schema: TrTagsSchema }]),
  ],
  controllers: [TrtagsController],
  providers: [TrtagsService],
})
export class TrtagsModule {}
