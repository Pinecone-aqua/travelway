import { Module } from '@nestjs/common';
import { TravelWayController } from './miniStory.controller';
import { TravelWayService } from './miniStory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelWaySchema } from './schemas/miniStory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'TravelWay', schema: TravelWaySchema }]),
  ],
  controllers: [TravelWayController],
  providers: [TravelWayService],
})
export class TravelWayModule {}
