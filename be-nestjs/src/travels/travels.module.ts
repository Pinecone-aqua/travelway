import { Module } from '@nestjs/common';
import { TravelsController } from './travels.controller';
import { TravelsService } from './travels.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelSchema } from './schemas/travel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Travel', schema: TravelSchema }]),
  ],
  controllers: [TravelsController],
  providers: [TravelsService],
})
export class TravelsModule {}
