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
import { miniStory } from './schemas/miniStory.schema';
import { UpdateMiniStorylDto } from './dto/update-miniStory.dto';

@Controller('miniStory')
export class MiniStoryController {
  constructor(private readonly travelService: MiniStoryService) {}

  @Post('add')
  create(@Body() createTravelDto: CreateMiniStoryDto): Promise<miniStory> {
    return this.travelService.create(createTravelDto);
  }

  @Get('get')
  findAll(): Promise<miniStory[]> {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<miniStory> {
    // console.log('Request ID orj irlee', params.id);
    return this.travelService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateMiniStorylDto,
  ): Promise<miniStory> {
    return this.travelService.update(id, updateTravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<miniStory> {
    return this.travelService.remove(id);
  }
}
