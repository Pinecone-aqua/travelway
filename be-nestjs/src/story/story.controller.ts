import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { StoryService } from './story.service';
import { Story } from './schemas/story.schema';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}
  @Get('pageNum')
  countNum(): Promise<number> {
    return this.storyService.countNum();
  }
  @Get('static')
  status(): Promise<any> {
    return this.storyService.status();
  }
  @Get('prostatic')
  statusProvince(): Promise<any> {
    return this.storyService.statusProvince();
  }

  @Get('page:id')
  findPage(@Param('id') pageNum: number): Promise<Story> {
    return this.storyService.findPage(pageNum);
  }

  @Get('user:id')
  findUser(@Param('id') userId: string): Promise<Story[]> {
    return this.storyService.findUser(userId);
  }

  @Get('allId')
  findAllId(): Promise<number> {
    return this.storyService.findAllId();
  }
  //filter
  @Get('mark')
  async findMark(@Query() query: any): Promise<any> {
    console.log(query);

    const result = await this.storyService.findMark(query);
    if (result[0]) {
      return result;
    } else {
      throw new HttpException('No stories', HttpStatus.NO_CONTENT);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Story> {
    return this.storyService.findOne(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Story> {
    return this.storyService.remove(id);
  }
  @Post('create')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'file' }]))
  async create(
    @Body() body: { product: string },
    @UploadedFiles() files?: { file?: Express.Multer.File[] },
  ) {
    try {
      const url = await this.storyService.uploadImageToCloudinary(files.file);
      const req: CreateStoryDto = JSON.parse(body.product);
      req.image.push(...url);
      const result = this.storyService.create(req);
      return result;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStoryDto: UpdateStoryDto,
  ): Promise<Story> {
    return this.storyService.update(id, updateStoryDto);
  }
}
