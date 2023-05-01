import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MiniStoryService } from './miniStory.service';
import { CreateMiniStoryDto } from './dto/create-miniStory.dto';
import { MiniStory } from './schemas/miniStory.schema';
import { UpdateMiniStorylDto } from './dto/update-miniStory.dto';

@Controller('miniStory')
export class MiniStoryController {
  constructor(private readonly travelService: MiniStoryService) {}

  @Post('add')
  create(@Body() createTravelDto: CreateMiniStoryDto): Promise<MiniStory> {
    console.log(createTravelDto);

    return this.travelService.create(createTravelDto);
  }

  @Get('get')
  findAll(): Promise<MiniStory[]> {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<MiniStory> {
    // console.log('Request ID orj irlee', params.id);
    return this.travelService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateMiniStorylDto,
  ): Promise<MiniStory> {
    return this.travelService.update(id, updateTravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<MiniStory> {
    return this.travelService.remove(id);
  }
  // sharavaa nemev
  @Get('user/:id')
  find(@Param('id') id: string): Promise<MiniStory[]> {
    console.log(id);
    return this.travelService.findMinstory(id);
  }
}
