import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TrTags } from './schemas/tags.schema';
import { TrtagsService } from './trtags.service';
import { CreateTagsDto } from './dto/create-tags.dto';
import { UpdateTagsDto } from './dto/update-tags.dto';

@Controller('trtags')
export class TrtagsController {
  constructor(private readonly tagsService: TrtagsService) {}

  @Post('add')
  async create(@Body() createTagsDto: CreateTagsDto): Promise<TrTags> {
    return this.tagsService.create(createTagsDto);
  }

  @Get('get')
  async findAll(): Promise<TrTags[]> {
    return this.tagsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TrTags> {
    return this.tagsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTagsDto: UpdateTagsDto,
  ): Promise<TrTags> {
    return this.tagsService.update(id, updateTagsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TrTags> {
    const result = this.tagsService.remove(id);
    return result;
  }
}
