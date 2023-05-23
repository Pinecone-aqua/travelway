import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MiniStoryService } from './miniStory.service';
import { CreateMiniStoryDto } from './dto/create-miniStory.dto';
import { MiniStory } from './schemas/miniStory.schema';
import { UpdateMiniStorylDto } from './dto/update-miniStory.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('ministory')
export class MiniStoryController {
  constructor(private readonly travelService: MiniStoryService) {}

  @Post('add')
  create(@Body() createTravelDto: CreateMiniStoryDto): Promise<MiniStory> {
    return this.travelService.create(createTravelDto);
  }

  @Post('uploadimg')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    try {
      const result = await this.travelService.addOneImageToCld(file);
      return result;
    } catch (error) {
      console.log('eRRor==> ', error);
    }
  }

  @Get('allId')
  findAllId(): Promise<number> {
    return this.travelService.findAllId();
  }
  @Get('get')
  findAll(): Promise<MiniStory[]> {
    return this.travelService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<MiniStory> {
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
    return this.travelService.findMinstory(id);
  }
}
