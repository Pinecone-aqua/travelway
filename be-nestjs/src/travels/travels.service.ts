import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Travel } from './schemas/travel.schema';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelsService {
  constructor(
    @InjectModel('Travel') private readonly travelModel: Model<Travel>,
  ) {}

  async create(createTravelDto: CreateTravelDto): Promise<Travel> {
    const newTravel = new this.travelModel(createTravelDto);
    const result = await newTravel.save();
    return result;
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
}
