import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Travel } from './schemas/travel.schema';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { CloudinaryService as Cloudinary } from 'src/cloudinary/cloudinary.service';
import { CreateTravelDto } from './dto/create-travel.dto';

@Injectable()
export class TravelsService {
  constructor(
    @InjectModel('Travel') private readonly travelModel: Model<Travel>,
    private readonly cloudinary: Cloudinary,
  ) {}
  async create(createTravel: CreateTravelDto): Promise<Travel> {
    console.log('Model create before');
    console.log(createTravel);
    // const newTravel = new this.travelModel({...createTravel});
    // const result = await newTravel.save();
    return;
  }

  async findAll(): Promise<Travel[]> {
    const result = await this.travelModel.find();
    return result;
  }

  async findOne(id: string): Promise<Travel> {
    const result = await this.travelModel.findOne({ _id: id });

    return result;
  }

  async update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel> {
    const updatedtravels = await this.travelModel.findOneAndUpdate(
      { _id: id },
      updateTravelDto,
      { new: true },
    );

    if (!updatedtravels) {
      throw new BadRequestException(
        `Аяллын мэдээлэл дундаас ${id} ID-тай аялал олдсонгүй`,
      );
    }
    return updatedtravels;
  }

  async remove(id: string): Promise<Travel> {
    const deletedTravels = await this.travelModel.findByIdAndRemove({
      _id: id,
    });

    if (!deletedTravels) {
      throw new NotFoundException(`Аяллын ${id} ID-тай аялал олдсонгүй`);
    }
    return deletedTravels;
  }
  //sharva added

  async findTravels(id: string): Promise<Travel[]> {
    const result = await this.travelModel.find({ userId: id });
    return result;
  }

  async addOneImageToCld(file: any): Promise<any> {
    const { secure_url } = await this.cloudinary.uploadImage(file);
    return secure_url;
  }

  async uploadImageToCloudinary(
    images: Express.Multer.File[],
  ): Promise<string[]> {
    const arr = [];
    await Promise.all(
      images?.map(async (file) => {
        const { secure_url } = await this.cloudinary.uploadImage(file);
        return arr.push(secure_url);
      }),
    );
    return arr;
  }
}
