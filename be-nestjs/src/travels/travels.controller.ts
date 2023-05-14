import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TravelsService } from './travels.service';
import { Travel } from './schemas/travel.schema';
import { UpdateTravelDto } from './dto/update-travel.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { CreateTravelDto } from './dto/create-travel.dto';

@Controller('travels')
export class TravelsController {
  constructor(private readonly travelService: TravelsService) {}

  @Post('add')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'images' }]))
  async createTravel(
    @Body() body: { body: string },
    @UploadedFiles() files?: { images?: Express.Multer.File[] },
  ) {
    const request: CreateTravelDto = JSON.parse(body.body);

    if (files.images) {
      const url = await this.travelService.uploadImageToCloudinary(
        files.images,
      );
      request.images.push(...url);
    }

    console.log('BE Request files.images ==>');
    console.log(request);

    return this.travelService.create(request);
  }
  @Get('pageNum')
  countNum(): Promise<number> {
    return this.travelService.countNum();
  }
  @Get('allId')
  findAllId(): Promise<number> {
    return this.travelService.findAllId();
  }
  @Get('get')
  findAll(): Promise<Travel[]> {
    return this.travelService.findAll();
  }

  @Get('page:id')
  findPage(@Param('id') pageNum: number): Promise<Travel> {
    return this.travelService.findPage(pageNum);
  }
  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<Travel> {
    return this.travelService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelDto: UpdateTravelDto,
  ): Promise<Travel> {
    return this.travelService.update(id, updateTravelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Travel> {
    return this.travelService.remove(id);
  }
  //sharavaa added
  @Get('user/:id')
  find(@Param('id') id: string): Promise<Travel[]> {
    return this.travelService.findTravels(id);
  }

  // Add Image to Cloudinary
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

  // @Post('uploadimages')
  // @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
  // async filesUploads(
  //   @Body() body: { body: string },
  //   @UploadedFiles(new ParseFilePipe())
  //   files: {
  //     image?: Express.Multer.File[];
  //   },
  // ) {
  //   try {
  //     const req = JSON.parse(body.body);
  //     const result = await this.travelService.addToCloudinary(
  //       files.image,
  //       files.image.length,
  //     );
  //     // if (result.length === files.image.length) console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
