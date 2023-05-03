import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Tags } from './schemas/tags.schema';
import { TagsService } from './tags.service';
import { CreateTagsDto } from './dto/create-tags.dto';
import { UpdateTagsDto } from './dto/update-tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post('add')
  async create(@Body() createTagsDto: CreateTagsDto): Promise<Tags> {
    return this.tagsService.create(createTagsDto);
  }

  @Get('get')
  async findAll(): Promise<Tags[]> {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Tags> {
    return this.tagsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTagsDto: UpdateTagsDto,
  ): Promise<Tags> {
    return this.tagsService.update(id, updateTagsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Tags> {
    const result = this.tagsService.remove(id);
    return result;
  }
}
