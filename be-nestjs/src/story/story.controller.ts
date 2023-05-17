import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
  @Get('mark')
  findMark(): Promise<number> {
    return this.storyService.findMark();
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
    const url = await this.storyService.uploadImageToCloudinary(files.file);
    const req: CreateStoryDto = JSON.parse(body.product);
    req.image.push(...url);
    return this.storyService.create(req);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStoryDto: UpdateStoryDto,
  ): Promise<Story> {
    return this.storyService.update(id, updateStoryDto);
  }

  // page number
}
