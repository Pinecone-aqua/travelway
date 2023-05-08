import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { StoryService } from './story.service';
import { Story } from './schemas/story.schema';
@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Story> {
    return this.storyService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Story> {
    return this.storyService.remove(id);
  }
  @Post('create')
  create(@Body() create: CreateStoryDto) {
    return this.storyService.create(create);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStoryDto: UpdateStoryDto,
  ): Promise<Story> {
    return this.storyService.update(id, updateStoryDto);
  }
  @Get('pageNum')
  countNum(): Promise<number> {
    return this.storyService.countNum();
  }
  // page number
  @Get('page/:id')
  findPage(@Param('id') pageNum: number): Promise<Story> {
    return this.storyService.findPage(pageNum);
  }
}
