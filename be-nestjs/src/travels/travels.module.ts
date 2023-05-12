import { Module } from '@nestjs/common';
import { TravelsController } from './travels.controller';
import { TravelsService } from './travels.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelSchema } from './schemas/travel.schema';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Travel', schema: TravelSchema }]),
    CloudinaryModule,
  ],
  controllers: [TravelsController],
  providers: [TravelsService],
})
export class TravelsModule {}
