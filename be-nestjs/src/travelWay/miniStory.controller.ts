import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TravelWayService } from './miniStory.service';
import { CreateTravelWayDto } from './dto/create-travelWay.dto';
import { TravelWay } from './schemas/miniStory.schema';
import { UpdateTravelWayDto } from './dto/update-travelWay.dto';

@Controller('travelways')
export class TravelWayController {
  constructor(private readonly travelWayService: TravelWayService) {}

  @Post('add')
  create(@Body() createTravelDto: CreateTravelWayDto): Promise<TravelWay> {
    return this.travelWayService.create(createTravelDto);
  }

  @Get('get')
  findAll(): Promise<TravelWay[]> {
    return this.travelWayService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<TravelWay> {
    return this.travelWayService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateTravelWayDto,
  ): Promise<TravelWay> {
    return this.travelWayService.update(id, updateTravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<TravelWay> {
    return this.travelWayService.remove(id);
  }
}
