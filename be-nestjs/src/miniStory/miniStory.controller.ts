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
  constructor(private readonly miniStoryService: MiniStoryService) {}

  @Post('add')
  create(@Body() createMiniStoryDto: CreateMiniStoryDto): Promise<miniStory> {
    return this.miniStoryService.create(createMiniStoryDto);
  }

  @Get('get')
  findAll(): Promise<miniStory[]> {
    return this.miniStoryService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<miniStory> {
    // console.log('Request ID orj irlee', params.id);
    return this.miniStoryService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateMiniStorylDto,
  ): Promise<miniStory> {
    return this.miniStoryService.update(id, updateTravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<miniStory> {
    return this.miniStoryService.remove(id);
  }
}
