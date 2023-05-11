import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseFilePipe,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { TravelsService } from './travels.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { Travel } from './schemas/travel.schema';
import { UpdateTravelDto } from './dto/update-travel.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';

@Controller('travels')
export class TravelsController {
  constructor(private readonly travelService: TravelsService) {}

  @Post('add')
  create(@Body() createTravelDto: CreateTravelDto): Promise<Travel> {
    return this.travelService.create(createTravelDto);
  }

  @Get('get')
  findAll(): Promise<Travel[]> {
    return this.travelService.findAll();
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
  async fileUpload(
    @Body() body: { body: string },
    @UploadedFiles(new ParseFilePipe())
    file: Express.Multer.File,
  ) {
    try {
      const req = JSON.parse(body.body);

      console.log(file.buffer);
      console.log('Body ==> ', req);

      const result = await this.travelService.addOneImageToCld(file);

      console.log('Result');
      console.log(result);
      return result;
    } catch (error) {
      console.log('eRRor==> ', error);
    }
  }

  @Post('uploadimages')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image' }]))
  async filesUploads(
    @Body() body: { body: string },
    @UploadedFiles(new ParseFilePipe())
    files: {
      image?: Express.Multer.File[];
    },
  ) {
    try {
      const req = JSON.parse(body.body);
      const result = await this.travelService.addToCloudinary(
        files.image,
        files.image.length,
      );
      // if (result.length === files.image.length) console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
