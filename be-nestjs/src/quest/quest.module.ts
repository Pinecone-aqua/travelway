import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestsController } from './quest.controller';
import { QuestService } from './quest.service';
import { QuestSchema } from './schemas/quest.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Quest', schema: QuestSchema }]),
  ],
  controllers: [QuestsController],
  providers: [QuestService],
})
export class QuestModule {}
