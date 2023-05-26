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
import { MiniStory } from './schemas/miniStory.schema';
import { UpdateMiniStorylDto } from './dto/update-miniStory.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateMiniStoryDto } from './dto/create-miniStory.dto';

@Controller('ministory')
export class MiniStoryController {
  constructor(private readonly travelService: MiniStoryService) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body()
    body: { body: string },
    @UploadedFile() file: Express.Multer.File,
  ): Promise<MiniStory> {
    try {
      const reqBody: CreateMiniStoryDto = JSON.parse(body.body);

      if (file) {
        const url = await this.travelService.addOneImageToCld(file);
        reqBody.image = url;
      }
      console.log('Request data ====> ');
      console.log(reqBody);

      return this.travelService.create(reqBody);
    } catch (error) {
      console.log(error);
    }
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

  @Get('pageNum')
  countNum(): Promise<number> {
    return this.travelService.countNum();
  }

  @Get('page:id')
  findPage(@Param('id') pageNum: number): Promise<MiniStory> {
    return this.travelService.findPage(pageNum);
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
