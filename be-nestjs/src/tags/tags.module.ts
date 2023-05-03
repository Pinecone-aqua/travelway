import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsSchema } from './schemas/tags.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TrTags', schema: TagsSchema }]),
  ],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
