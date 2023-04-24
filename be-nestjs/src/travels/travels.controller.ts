import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TravelsService } from './travels.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { Travel } from './schemas/travel.schema';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { Types } from 'mongoose';

@Controller('travels')
export class TravelsController {
  constructor(private readonly travelService: TravelsService) {}

  @Post('add')
  create(@Body() createTravelDto: CreateTravelDto): Promise<Travel> {
    return this.travelService.create(createTravelDto);
  }

  @Get('get')
  findAll(): Promise<Travel[]> {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Travel> {
    console.log(id);
    return this.travelService.findOne(id);
  }

  @Get('allid')
  findAllId(): Promise<Types.ObjectId[]> {
    return this.travelService.findIdAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateTravelDto,
  ): Promise<Travel> {
    return this.travelService.update(id, updateTravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Travel> {
    return this.travelService.remove(id);
  }
}
